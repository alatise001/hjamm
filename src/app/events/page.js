import DateSelect from '@/components/dateSelect'
import EventBlock from '@/components/eventBlock'
import EventItemBlock from '@/components/eventItemBlock'
import { InputSearch, Search } from '@/components/search'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarDays } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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

    return (
        <div className="w-full">
            <section className="pt-36 pb-16 px-9.25 h-fit bg-[url('/eventBg.png')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/50">


                <div className='h-[48px] w-[48px] rounded-full border-[1.3px] border-[#FFFFFF33] flex items-center justify-center'>
                    <CalendarDays className='text-[#D4AF37] h-6 w-6' />
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-[36px] text-white font-gambetta font-medium text-center tracking-[-2.4px]">Events, Workshop & Retreats</h1>

                    <p className="text-[#C9C6C6] italic text-[14px] font-light font-switzer text-center">&quot;Come away by yourselves to a deserted place and rest a while.&quot;</p>
                </div>
            </section>

            <section className='bg-[#F5F1ED4D]  py-8 px-6 flex flex-col gap-7'>

                <div className='flex flex-col gap-1'>
                    <p className='text-[#D4AF37] font-gambetta text-[12px] font-bold uppercase tracking-[3.5px] leading-20px]'>coming soon</p>

                    <h2 className='text-[#2C2C2C] font-gambetta text-2xl leading-10'>Upcoming Events</h2>
                </div>


                <EventBlock />

            </section>


            <section className='bg-[#F0EBE6] w-full py-8 px-6 flex flex-col gap-7'>

                <div className='flex flex-col gap-3.5'>
                    <div className='flex gap-2.5 overflow-x-auto scrollbar-none w-full'>
                        {
                            events.map((event, index) => (
                                <div key={index} className={` ${index === 0 ? 'bg-[#8B3A3A] text-white' : 'bg-[#FFFFFF] text-[#6B7280]'} justify-center items-center border border-[#8B3A3A0D] uppercase rounded-full py-2.25 px-3 w-fit`}>
                                    <p className={'font-switzer text-[8px] font-bold leading-3.75 tracking-[1px]'}>{event.type}</p>
                                </div>
                            ))
                        }

                        {/* <div className={`bg-[#8B3A3A] flex justify-center items-center rounded-full py-2.25 uppercase px-3 w-fit`}>
                        <p className={'font-switzer text-[8px] font-bold leading-3.75 tracking-[1px] text-white'}>All Events</p>
                    </div>

                    <div className={`bg-[#FFFFFF] justify-center items-center border border-[#8B3A3A0D] uppercase rounded-full py-2.25 px-3 w-fit`}>
                        <p className={'font-switzer text-[8px] font-bold leading-3.75 tracking-[1px] text-[#6B7280]'}>Workshops</p>
                    </div>*/}
                    </div>


                    <InputSearch />
                    <DateSelect />
                </div>

                <div className="flex gap-4 overflow-x-auto scrollbar-none w-full">
                    <EventItemBlock />
                    <EventItemBlock />
                    <EventItemBlock />
                    <EventItemBlock />
                </div>

                <div className='bg-[#8B3A3AE5] flex flex-col gap-8 px-8 py-6 rounded-[16px]'>
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


            </section>

            <section className='bg-[#8B3A3A] w-full py-8 px-6 flex flex-col gap-5'>
                <h2 className='text-white text-[24px] italic font-gambetta leading-10 text-center'>
                    Seeking Something More?
                </h2>

                <div className="h-px bg-[#D4AF37] w-24 mx-auto"></div>

                <p className="text-[#FFFFFFCC] font-switzer text-center font-light text-[12px] ">
                    Can't find an event that fits your schedule or spiritual needs? Our team is always organizing new liturgical gatherings and events. </p>

                <div className=" flex flex-col gap-6 mt-3">
                    <Button className='bg-white h-[52px] tracking-[1.4px] text-[#8B3A3A]  w-full'>
                        Contact Support
                    </Button>

                    <Button variant='outline' className='h-13 tracking-[1.4px] w-full'>
                        Submit a Prayer Request
                    </Button>
                </div>
            </section>
        </div>
    )
}
