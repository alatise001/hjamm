import { Button } from '@/components/ui/button'
import UpcomingEventsBlock from '@/components/upcomingEventsBlock'
import { ArrowLeft, ArrowRight, Calendar, Calendar1, Clock, Clock1, Cross, DollarSign, MapPin, UsersRound } from 'lucide-react'
import React from 'react'
import { retreatSchedule, allEvents } from "../../../data"
import Link from 'next/link'
import { routes } from '@/routes'

export default function EventDetails() {
    return (
        <div className='pt-[100px] lg:pt-[163px]'>
            <section className='flex gap-4 px-6 md:px-12 py-4 font-medium text-[10px] lg:text-[14px]  uppercase font-switzer'>
                <ArrowLeft className='h-3.5 w-3.5 text-[#ADB5BD]' />
                <p className='text-[#ADB5BD] '>
                    Events & Retreats
                </p>

                <p className='text-[#ADB5BD] '>
                    /
                </p>

                <p className='text-[#8B3A3A]'>
                    2026 National Retreat
                </p>

            </section>

            <section className='flex flex-col gap-8 lg:gap-16 px-6 md:px-12'>

                <h1 className='font-gambetta text-[#2C2C2C] text-[24px] lg:text-[48px] font-medium tracking-[-0.48px]'>
                    2026 National Retreat
                </h1>

                <div>

                    <div className='h-[60vh] lg:h-[773px] w-full bg-[url("/oneEventBg.jpg")] bg-cover bg-center' />

                    <div className='flex flex-col gap-4 bg-[#F5F1ED] lg:gap-8 px-8 lg:px-16 lg:py-8.5 py-4'>
                        <div className='flex items-center gap-2 text-[#8B3A3A] text-[10px] lg:text-[18px] font-bold font-switzer'>
                            <Calendar className='h-3.5 w-3.5' />
                            <p>June 12 – 14, 2026</p>
                        </div>

                        <h2 className="text-[#2C2C2C] text-[24px] lg:text-[36px] font-gambetta tracking-[-0.24px]">
                            2026 National Retreat: Touch me Lord
                        </h2>

                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-col justify-center items-center w-fit gap-1'>
                                <Clock className='h-4 w-4 md:h-5.25 md:w-5.25 text-[#D4AF37]' />
                                <p className='text-[#6B7280] font-medium text-[8px] md:text-[10px] font-switzer uppercase tracking-[1px]'>Duration</p>
                                <p className='text-[#2C2C2C] text-[10px] md:text-[12px] font-semibold font-switzer'>3 Days</p>
                            </div>

                            <div className='flex flex-col justify-center items-center w-fit gap-1'>
                                <UsersRound className='h-4 w-4 md:h-5.25 md:w-5.25 text-[#D4AF37]' />
                                <p className='text-[#6B7280] font-medium text-[8px] md:text-[10px] font-switzer uppercase tracking-[1px]'>Capacity</p>
                                <p className='text-[#2C2C2C] text-[10px] md:text-[12px] font-semibold font-switzer'>Limited</p>
                            </div>

                            <div className='flex flex-col justify-center items-center w-fit gap-1'>
                                <DollarSign className='h-4 w-4 md:h-5.25 md:w-5.25 text-[#D4AF37]' />
                                <p className='text-[#6B7280] font-medium text-[8px] md:text-[10px] font-switzer uppercase tracking-[1px]'>Cost</p>
                                <p className='text-[#2C2C2C] text-[10px] md:text-[12px] font-semibold font-switzer'>$150.00 / person</p>
                            </div>

                            <div className='flex flex-col justify-center items-center w-fit gap-1'>
                                <Cross className='h-4 w-4 md:h-5.25 md:w-5.25 text-[#D4AF37]' />
                                <p className='text-[#6B7280] font-medium text-[8px] md:text-[10px] font-switzer uppercase tracking-[1px]'>DIRECTOR/HOST</p>
                                <p className='text-[#2C2C2C] text-[10px] md:text-[12px] font-semibold font-switzer'>Bro Uwakwe Chukwu</p>
                            </div>

                            <div className='flex flex-col justify-center items-center w-fit gap-1'>
                                <MapPin className='h-4 w-4 md:h-5.25 md:w-5.25 text-[#D4AF37]' />
                                <p className='text-[#6B7280] font-medium text-[8px] md:text-[10px] font-switzer uppercase tracking-[1px]'>LOCATION</p>
                                <p className='text-[#2C2C2C] text-[10px] md:text-[12px] font-semibold font-switzer'>Youtube & Facebook Live</p>
                            </div>
                        </div>

                        <p className='font-gambetta inline-block text-[12px] lg:text-[18px]  leading-[29px] text-[#4B5563]'>
                            Hello  everyone, HJM 2026 Annual Retreat  is on the way and this year it will be in Plano Texas (St. John Paul II High School, 900 Coit Rd, Plano TX 75077) and we are all looking forward to having you with us  throughout this few days the 12th, 13th, and 14th of June 2026.
                        </p>

                        <div className="h-[1.3px] w-full self-center bg-[#8B3A3A1A] my-4" />

                        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-1.5'>
                            <div className='flex flex-col gap-1.5'>
                                <p className='text-[#9CA3AF] font-gambetta  uppercase tracking-[1.2px] text-[10px] lg:text-[12px]'>Registration Fee</p>

                                <p className='text-[#8B3A3A] font-switzer font-semibold text-[24px] leading-9'>$150.00  <span className='text-[#6B7280] font-normal italic leading-5 text-[14px]'>/ person</span></p>
                            </div>

                            <Button className="h-12.5 w-full md:w-fit text-[14px] lg:text-[14px] font-semibold tracking-[1.4px] mt-[24px]">
                                Register Now
                            </Button>

                        </div>
                    </div>

                </div>


            </section >



            <section className="py-8 px-6 md:px-[48px] md:py-[96px] flex flex-col gap-7 md:gap-9">
                <div className="text-center flex flex-col gap-3.5 w-[90%] mx-auto">
                    <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[36px] ">Daily Retreat Schedule</h2>
                    <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
                </div>


                <div className='flex gap-2 justify-between lg:gap-16 items-start'>

                    <div className='flex flex-col gap-3 lg:gap-6'>
                        <div className='w-fit lg:w-[247.5px] lg:h-[72px] bg-[#8B3A3A] text-white rounded-[8px] flex justify-between items-center gap-2 px-4 lg:px-6 py-2 lg:py-4'>
                            <p className='font-gambetta text-[10px] lg:text-[16px]'>Day 1 (Jun 12)</p>
                            <ArrowRight className='h-3 w-3 lg:h-6 lg:w-6' />
                        </div>

                        <div className='w-fit lg:w-[247.5px] lg:h-[72px] bg-[#F5F1ED] text-[#6B7280] rounded-[8px] flex justify-between items-center gap-2 px-4 lg:px-6 py-2 lg:py-4'>
                            <p className='font-gambetta  text-[10px] lg:text-[16px]'>Day 2 (Jun 13)</p>
                            <ArrowRight className='h-3 w-3 lg:h-6 lg:w-6' />
                        </div>

                        <div className='w-fit lg:w-[247.5px] lg:h-[72px] text-[#6B7280] bg-[#F5F1ED] rounded-[8px] flex justify-between items-center gap-2 px-4 lg:px-6 py-2 lg:py-4'>
                            <p className='font-gambetta text-[10px] lg:text-[16px]'>Day 3 (Jun 14)</p>
                            <ArrowRight className='h-3 w-3 lg:h-6 lg:w-6' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 lg:gap-10 w-full p-4 lg:p-12 bg-[#F5F1ED] rounded-[10px]'>
                        <div className='flex items-center gap-2 lg:gap-4 text-[#8B3A3A] font-gambetta font-bold text-[12px] lg:text-[24px] tracking-[-0.24px]'>
                            <Clock1 className='h-3 w-3 lg:h-6 lg:w-6' />
                            <p>
                                Opening Day: The Wilderness Call
                            </p>
                        </div>

                        <div className='flex flex-col'>

                            {
                                retreatSchedule.map((item, index) => (

                                    <div key={index} className='h-fit flex gap-4 lg:gap-8'>
                                        <div className=' w-fit flex flex-col items-center'>
                                            <div className={`h-2.5 w-2.5 lg:h-3 lg:w-3 aspect-square rounded-full ${(index % 2 === 0) ? 'bg-[#8B3A3A]' : 'bg-[#D4AF37]'}`} />
                                            <div className={`h-full w-px rounded-full ${(index % 2 === 0) ? 'bg-[#8B3A3A]' : 'bg-[#D4AF37]'} `} />
                                        </div>

                                        <div className='w-full'>
                                            <div className=' flex justify-between w-full font-switzer font-semibold'>
                                                <div className='flex'>
                                                    <p className='text-[#2C2C2C]  text-[12px] lg:text-[18px]'>{item.time}</p>
                                                    <p className='text-[#2C2C2C]  text-[12px] lg:text-[18px]'>—</p>
                                                    <p className='text-[#2C2C2C]  text-[12px] lg:text-[18px]'>{item.namee}</p>
                                                </div>
                                                <p className='text-[#D4AF37]  text-[8px] lg:text-[12px] tracking-[1.2px] uppercase'>{item.duration}</p>
                                            </div>
                                            <p className='text-[#6B7280] font-gambetta text-[10px] lg:text-[14px]'>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className='h-20 md:h-14 lg:h-18'></div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </section>


            <section className='bg-[#8B3A3A] w-full py-8 lg:py-24 lg:px-46.25 px-6 flex flex-col gap-5 md:gap-10'>
                <h2 className='text-white text-[24px] lg:text-[48px] italic font-gambetta leading-10 text-center'>
                    Commit to the Encounter
                </h2>

                <div className=" flex flex-col md:flex-row md:justify-center gap-6 lg:gap-8">
                    <Button className='bg-white h-[52px] md:w-fit tracking-[1.4px] text-[#8B3A3A] w-full'>
                        REGISTER NOW
                    </Button>

                    <Button variant='outline' className='h-13 md:w-fit tracking-[1.4px] lg:gap-8 w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.8116 10.0008C17.8114 13.7983 15.0805 17.0457 11.3393 17.6971C7.5981 18.3486 3.93031 16.2154 2.64653 12.6415C1.36275 9.06761 2.83486 5.08818 6.13547 3.21016C9.43608 1.33215 13.6091 2.09956 16.0256 5.02895C16.3553 5.42827 16.2988 6.01922 15.8995 6.34887C15.5001 6.67851 14.9092 6.62202 14.5795 6.2227C12.7993 4.06462 9.75417 3.44199 7.26974 4.72809C4.7853 6.01418 3.53566 8.86006 4.27001 11.5595C5.00437 14.259 7.52346 16.0797 10.317 15.93C13.1106 15.7803 15.4207 13.7008 15.8624 10.9383H9.99907C9.48165 10.9383 9.06157 10.5182 9.06157 10.0008C9.06157 9.4834 9.48165 9.06332 9.99907 9.06332H16.8741C17.3915 9.06332 17.8116 9.4834 17.8116 10.0008Z" fill="white" />
                        </svg>
                        ADD TO GOOGLE CALENDAR
                    </Button>

                    <Button variant='outline' className='h-13 md:w-fit tracking-[1.4px] lg:gap-8 w-full'>
                        <Calendar1 className='h-5 w-5 lg:h-6 lg:w-6' />
                        ADD TO iCALENDAR (.ICS)
                    </Button>
                </div>
            </section>


            <section className="bg-white w-full py-8 px-6 md:px-11.5 flex flex-col gap-6 md:gap-12.5 ">
                <div className="text-center flex flex-col gap-3">
                    <p className='text-[#D4AF37] text-left font-gambetta text-[12px] font-bold uppercase tracking-[3.5px] leading-20px]'>FURTHER EXPLORATION</p>
                    <div className='flex items-center justify-between gap-5 md:gap-12.5'>
                        <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Other Upcoming Retreats</h2>
                        <div className=" flex items-center text-[#8B3A3A]">
                            <Link href={routes?.events} className="flex items-center gap-2">
                                <p className='text-[10px] font-switzer lg:text-[12px]'>ALL EVENTS</p>
                                <ArrowRight className=' h-3 w-3 lg:h-6 lg:w-6' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 lg:gap-10.5 overflow-x-auto scrollbar-none w-full">
                    {
                        allEvents.map((event, index) => (

                            <UpcomingEventsBlock key={index} online={event.online} type={event.type} location={event.location} name={event.name} route={event.route} description={event.description} date={event.date} img={event.img} />
                        ))
                    }
                </div>
            </section>



        </div >
    )
}
