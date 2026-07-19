import React from 'react'
import { Button } from './ui/button'
import { Clock1 } from 'lucide-react'
import Modal from './modal'
import LiveSessionPop from '@/components/liveSessionPop'
import { formatCalendarDate } from '@/lib/calemdarFunctions'


export default function LiveEvents({ when, time, title, description, startDate, endDate }) {

    const [open, setOpen] = React.useState(false);

    // Resilient helper to format dates safely without throwing exceptions
    const formatCalendarDate = (dateString) => {
        if (!dateString) return '';

        try {
            let parsedDate = new Date(dateString);

            // If it's a raw time string like "12:00 PM", append today's date to parse it
            if (isNaN(parsedDate.getTime())) {
                const today = new Date().toISOString().split('T')[0]; // "2026-07-19"

                // Convert "12:00 PM" or "09:00 PM" styles roughly to 24-hour structure if needed
                let cleanTime = dateString.trim();
                if (cleanTime.toLowerCase().includes('pm') || cleanTime.toLowerCase().includes('am')) {
                    // Quick conversion fallback if passing string times directly
                    const [timePart, modifier] = cleanTime.split(' ');
                    let [hours, minutes] = timePart.split(':');
                    if (hours === '12') hours = '00';
                    if (modifier.toLowerCase() === 'pm') hours = parseInt(hours, 10) + 12;
                    cleanTime = `${String(hours).padStart(2, '0')}:${minutes}:00`;
                }

                parsedDate = new Date(`${today}T${cleanTime}`);
            }

            // Fallback checking if it's still invalid
            if (isNaN(parsedDate.getTime())) {
                // Return fallback: right now
                parsedDate = new Date();
            }

            return parsedDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        } catch (error) {
            console.error("Calendar date parsing failed:", error);
            return new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'; // absolute fallback
        }
    };

    const handleGoogleCalendar = () => {
        const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
        const gStart = formatCalendarDate(startDate || time); // Falls back to 'time' prop if string is empty
        const gEnd = formatCalendarDate(endDate || startDate || time);

        const cleanTitle = encodeURIComponent(title || '');
        const cleanDesc = encodeURIComponent(description || '');

        const url = `${base}&text=${cleanTitle}&dates=${gStart}/${gEnd}&details=${cleanDesc}`;
        window.open(url, '_blank');
    };

    const handleICalendar = () => {
        const iStart = formatCalendarDate(startDate || time);
        const iEnd = formatCalendarDate(endDate || startDate || time);

        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//HJAMM Ministries//Calendar Event//EN",
            "BEGIN:VEVENT",
            `SUMMARY:${title}`,
            `DESCRIPTION:${description}`,
            `DTSTART:${iStart}`,
            `DTEND:${iEnd}`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\n");

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", `${(title || 'event').toLowerCase().replace(/\s+/g, '-')}.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`pt-8 lg:p-8 h-77.5 lg:h-[149px] ${when === 'live' ? 'bg-[#8B3A3A]' : 'bg-transparent border-[#8B3A3A73] border-[0.5px]'} rounded-[10px] flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-8 items-center`} >
            <div className="text-center">
                <p className={` ${when === 'live' ? 'text-[#FFFFFFCC]' : 'text-[#99A1AF]'} text-[12px] font-switzer tracking-[1.2px]`}>
                    {when === 'live' ? 'LIVE NOW' : 'UPCOMING'}
                </p>

                <div className={`flex items-center gap-2 ${when === 'live' ? 'text-white' : 'text-[#2C2C2C]'} font-bold font-switzer text-2xl`}>
                    <Clock1 className={`${when === 'live' ? 'text-white' : 'text-[#8B3A3A]'} w-5 h-5`} />
                    <p className="font-switzer">{time}</p>
                </div>
            </div>

            <div className="text-center lg:text-left max-w-[65%]">
                <p className={`font-gambetta text-[20px] font-medium ${when === 'live' ? 'text-white' : 'text-[#2C2C2C]'} capitalize`}>{title}</p>
                <p className={`font-switzer text-[12px]  ${when === 'live' ? 'text-[#FFFFFFCC]' : 'text-[#6A7282]'}`}>
                    {description}
                </p>
            </div>

            <Button
                size='sm'
                className={` ${when === 'live' ? 'bg-white' : 'bg-transparent'} text-[#8B3A3A] font-switzer font-semibold gap-1.5 px-2.5 py-1.5 rounded-[10px]`}
                onClick={when === 'live' ? () => setOpen(true) : () => handleGoogleCalendar()}
            >
                {when === 'live' ? (
                    <>
                        <svg fill="#FF0000" className='lg:h-[28px] h-4 w-4 lg:w-[28px]' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_386_3126)">
                                <mask id="mask0_386_3126" x="0" y="0" width="16" height="16">
                                    <path d="M0 0H16V16H0V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_386_3126)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8ZM4 10.8H10V6.4C10 6.24241 9.96896 6.08637 9.90866 5.94078C9.84835 5.79519 9.75996 5.6629 9.64853 5.55147C9.5371 5.44004 9.40481 5.35165 9.25922 5.29134C9.11363 5.23104 8.95759 5.2 8.8 5.2H2.8V9.6C2.8 9.91826 2.92643 10.2235 3.15147 10.4485C3.2629 10.56 3.39519 10.6483 3.54078 10.7087C3.68637 10.769 3.84241 10.8 4 10.8ZM10.8 9.2L13.2 10.8V5.2L10.8 6.8V9.2Z" fill="#2727F5" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_386_3126">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Join Live
                    </>
                ) : (
                    <>Remind Me</>
                )}
            </Button>

            <Modal isOpen={open} maxWidth='w-fit' onClose={() => setOpen(false)}>
                <LiveSessionPop onClose={() => setOpen(false)} />
            </Modal>
        </div>
    )
}