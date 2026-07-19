// Resilient helper to format dates safely without throwing exceptions
export const formatCalendarDate = (dateString) => {
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

export const handleGoogleCalendar = () => {
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