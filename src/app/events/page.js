"use client"
import React from 'react'
import DateSelect from '@/components/dateSelect'
import EventBlock from '@/components/eventBlock'
import EventItemBlock from '@/components/eventItemBlock'
import { InputSearch, Search } from '@/components/search'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarDays } from 'lucide-react'
import Image from 'next/image'
import { Calendar } from "@/components/ui/calendar"
import { allEvents } from '../../data'
import Link from 'next/link'
import { routes } from "@/routes"

export default function Events() {

    const events = [
        {
            type: "All Events",
        },
        {
            type: "Workshops",
        },
        {
            type: "Retreats",
        },
        {
            type: "Conventions",
        }
    ]

    const [date, setDate] = React.useState(new Date())


    return (
        <div className="w-full">
            <section className="pt-36 pb-16 px-9.25 md:pt-50 h-fit md:h-[80vh] bg-[url('/eventBg.png')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/50">


                <div className='h-[48px] w-[48px] md:h-[62px] md:w-[62px] rounded-full border-[1.3px] border-[#FFFFFF33] flex items-center justify-center'>
                    <CalendarDays className='text-[#D4AF37] h-6 md:h-9 md:w-9 w-6 ' />
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-[36px] md:text-[72px] text-white font-gambetta font-medium text-center tracking-[-2.4px]">Events, Workshop & Retreats</h1>

                    <p className="text-[#C9C6C6] italic text-[14px] md:text-[24px] font-light font-switzer text-center">&quot;Come away by yourselves to a deserted place and rest a while.&quot;</p>
                </div>
            </section>

            <section className='bg-[#F5F1ED4D] py-8 md:py-[70px] px-6 md:px-[48px] flex flex-col gap-7'>

                <div className='flex flex-col gap-1'>
                    <p className='text-[#D4AF37] font-gambetta text-[12px] font-bold uppercase tracking-[3.5px] leading-20px]'>coming soon</p>

                    <h2 className='text-[#2C2C2C] font-gambetta text-2xl lg:text-[48px] leading-10'>Upcoming Events</h2>
                </div>


                <EventBlock />

            </section>


            <section className='bg-[#F0EBE6] w-full py-8 px-6 lg:px-12 lg:py-18 flex flex-col gap-7'>

                <div className='flex flex-col lg:flex-row items-center gap-3.5'>
                    <div className='flex gap-2.5 overflow-x-auto scrollbar-none w-full'>
                        {
                            events.map((event, index) => (
                                <div key={index} className={` ${index === 0 ? 'bg-[#8B3A3A] text-white' : 'bg-[#FFFFFF] text-[#6B7280]'} justify-center items-center border border-[#8B3A3A0D] uppercase rounded-full py-2.25 px-3 lg:px-8  w-fit`}>
                                    <p className={'font-switzer text-[8px] lg:text-[10px] font-bold leading-3.75 tracking-[1px]'}>{event.type}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className='w-full lg:w-[319px]'>
                        <InputSearch />

                    </div>


                    <div className="w-full flex self-end lg:hidden">

                        <DateSelect />
                    </div>
                </div>


                <div className='flex flex-col gap-7 lg:flex-row lg:gap-12'>

                    <div className="flex flex-col gap-8">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-lg border font-gambetta hidden lg:block"
                        // captionLayout="dropdown"
                        />

                        <div className='bg-[#8B3A3AE5] hidden lg:flex flex-col gap-8 px-8 py-6 rounded-[16px]'>
                            <h3 className='font-gambetta text-[16px] text-white leading-7'>Upcoming Soon</h3>

                            <div className='flex flex-col gap-6'>

                                <div className='flex items-center gap-4'>
                                    <div className='h-[38px] w-[43px] rounded-[4px] bg-[#FFFFFF1A] font-switzer tracking-[1px] leading-3.75 flex flex-col items-center justify-center text-[10px] text-white uppercase'>
                                        <p className='font-bold'>09</p>
                                        <p className='font-light'>May</p>
                                    </div>

                                    <div>
                                        <p className='font-switzer text-[14px] font-bold text-white'>St. Joseph Novena Live</p>
                                        <p className='font-switzer font-light text-[10px] text-white'>Liturgical Prayer</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='h-[38px] w-[43px] rounded-[4px] bg-[#FFFFFF1A] font-switzer tracking-[1px] leading-3.75 flex flex-col items-center justify-center text-[10px] text-white uppercase'>
                                        <p className='font-bold'>09</p>
                                        <p className='font-light'>May</p>
                                    </div>

                                    <div>
                                        <p className='font-switzer text-[14px] font-bold text-white'>Divine Mercy Vigil</p>
                                        <p className='font-switzer font-light text-[10px] text-white'>Night Consecration</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="flex lg:grid lg:grid-cols-2 gap-4 lg:gap-8 overflow-x-auto scrollbar-none w-full">
                        {
                            allEvents.map((event, index) => (


                                <EventItemBlock key={index} online={event.online} type={event.type} location={event.location} name={event.name} description={event.description} route={event.route} date={event.date} img={event.img} />
                            ))
                        }

                    </div>

                    <div className='bg-[#8B3A3AE5] lg:hidden flex flex-col gap-8 px-8 py-6 rounded-[16px]'>
                        <h3 className='font-gambetta text-[16px] text-white leading-7'>Upcoming Soon</h3>

                        <div className='flex flex-col gap-6'>

                            <div className='flex items-center gap-4'>
                                <div className='h-[38px] w-[43px] rounded-[4px] bg-[#FFFFFF1A] font-switzer tracking-[1px] leading-3.75 flex flex-col items-center justify-center text-[10px] text-white uppercase'>
                                    <p className='font-bold'>09</p>
                                    <p className='font-light'>May</p>
                                </div>

                                <div>
                                    <p className='font-switzer text-[14px] font-bold text-white'>St. Joseph Novena Live</p>
                                    <p className='font-switzer font-light text-[10px] text-white'>Liturgical Prayer</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <div className='h-[38px] w-[43px] rounded-[4px] bg-[#FFFFFF1A] font-switzer tracking-[1px] leading-3.75 flex flex-col items-center justify-center text-[10px] text-white uppercase'>
                                    <p className='font-bold'>09</p>
                                    <p className='font-light'>May</p>
                                </div>

                                <div>
                                    <p className='font-switzer text-[14px] font-bold text-white'>Divine Mercy Vigil</p>
                                    <p className='font-switzer font-light text-[10px] text-white'>Night Consecration</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section >



            <section className='bg-[#8B3A3A] w-full py-8 lg:py-24 lg:px-46.25 px-6 flex flex-col gap-5'>
                <h2 className='text-white text-[24px] lg:text-[48px] italic font-gambetta leading-10 text-center'>
                    Seeking Something More?
                </h2>

                <div className="h-px bg-[#D4AF37] w-24 mx-auto"></div>

                <p className="text-[#FFFFFFCC] font-switzer text-center font-light text-[12px] lg:text-[20px] ">
                    Can't find an event that fits your schedule or spiritual needs? Our team is always organizing new liturgical gatherings and events. </p>

                <div className=" flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-8 mt-3">
                    <Button className='bg-white h-[52px] lg:w-fit tracking-[1.4px] text-[#8B3A3A]  w-full'>
                        <Link href={routes?.aboutUs} className="w-full md:w-fit">
                            Contact Support
                        </Link>
                    </Button>

                    <Button variant='outline' className='h-13 lg:w-fit tracking-[1.4px] w-full'>
                        <Link href={routes?.livePrayer} className="w-full md:w-fit">
                            Submit a Prayer Request
                        </Link>
                    </Button>
                </div>
            </section>
        </div >
    )
}
