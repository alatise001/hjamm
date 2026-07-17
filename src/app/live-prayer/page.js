import PetitionForm from '@/components/petitoionForm'
import { Button } from '@/components/ui/button'
import { Clock3, KeyRound, Leaf, Phone, UsersRound } from 'lucide-react'
import React from 'react'

export default function LivePrayer() {
    return (
        <div>
            <section className="pt-36 pb-16 px-9.25 md:pt-50 h-fit md:h-[80vh] bg-[url('/livePrayerBg.jpg')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/80">

                <div className="flex flex-col gap-5">
                    <h1 className="text-[36px] md:text-[72px] text-white font-gambetta font-medium text-center tracking-[-2.4px]">Our Live Prayer Lines</h1>

                    <p className="text-[#C9C6C6] italic text-[14px] md:text-[24px] font-light font-switzer text-center">"For where two or three are gathered together in my name, there am I in the midst of
                        them."</p>
                </div>
            </section>

            <section className='bg-[#fff] py-8 md:py-[70px] px-6 md:px-[48px] flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 items-center'>
                <div className=' flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className='bg-[#F5F1ED] flex justify-center items-center h-10 w-10 aspect-square rounded-full md:h-16 md:w-16'>
                        <UsersRound className=' text-[#8B3A3A] h-4 w-4 md:h-8 md:w-8' />

                    </div>

                    <div>
                        <p className='text-[#2C2C2C] text-[18px] text-center md:text-left md:text-[24px] font-bold tracking-[-0.24px] font-gambetta'>
                            1000+
                        </p>

                        <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                            DAILY INTERCESSORS
                        </p>
                    </div>

                </div>

                <div className=' flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className='bg-[#F5F1ED] flex justify-center items-center h-10 w-10 aspect-square rounded-full md:h-16 md:w-16'>
                        <Clock3 className=' text-[#8B3A3A] h-4 w-4 md:h-8 md:w-8' />

                    </div>

                    <div>
                        <p className='text-[#2C2C2C] text-[18px] text-center md:text-left md:text-[24px] font-bold tracking-[-0.24px] font-gambetta'>
                            24/7
                        </p>

                        <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                            PRAYER COVERAGE
                        </p>
                    </div>

                </div>

                <div className=' flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className='bg-[#F5F1ED] flex justify-center items-center h-10 w-10 aspect-square rounded-full md:h-16 md:w-16'>
                        <Leaf className=' text-[#8B3A3A] h-4 w-4 md:h-8 md:w-8' />

                    </div>

                    <div>
                        <p className='text-[#2C2C2C] text-[18px] text-center md:text-left md:text-[24px] font-bold tracking-[-0.24px] font-gambetta'>
                            Infinite
                        </p>

                        <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                            SPIRITUAL GROWTH
                        </p>
                    </div>

                </div>

            </section >

            <section className='bg-[#F5F1ED] py-8 md:py-[59px] px-6 md:px-[43px] flex flex-col gap-8 md:gap-10'>
                <div className="text-center flex flex-col md:items-start gap-2 w-[90%] mx-auto">
                    <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Prayer Directory</h2>
                    <p className="text-[12px] md:text-[18px] font-switzer text-[#4A5565] leading-4.75 ">Find the prayer line that speaks to your heart and join our scheduled sessions.</p>
                </div>


                <div className='flex flex-col lg:flex-row gap-10'>

                    <div className='flex lg:w-[70%] flex-col gap-6'>
                        <div className='bg-[#FFFFFF] p-6 md:p-8 flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 rounded-[10px]'>
                            <div className='bg-[#F5F1ED] flex justify-center items-center h-12 w-12 aspect-square rounded-full md:h-14 md:w-14'>
                                <Phone className=' text-[#D4AF37] h-5 w-5 md:h-6 md:w-6' />

                            </div>

                            <div className='flex flex-col items-center gap-2 md:gap-1 md:items-start '>
                                <div className='flex py-0.5 px-2 w-fit h-fit bg-[#D4AF37] items-center justify-center rounded-[2px]'>
                                    <p className='uppercase text-[8px] md:text-[10px] font-switzer font-bold tracking-[1px] text-white'>Daily</p>
                                </div>

                                <p className='text-[#2C2C2C] text-[18px] md:text-[24px] font-semibold tracking-[-0.24px] font-gambetta'>
                                    Holy Spirit Prayer Line
                                </p>

                                <div className='flex gap-2 md:gap-3 items-center'>
                                    <Clock3 className=' text-[#8B3A3A] h-3 w-3 md:h-4 md:w-4' />
                                    <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                                        10pm ET (Sat-Thurs) | 9pm ET (Fri)
                                    </p>
                                </div>
                            </div>

                            <div className='md:ml-auto flex flex-col gap-2 md:gap-3 items-center justify-center'>
                                <Button className='rounded-[0]  md:h-12 w-[200px]'>
                                    <Phone />
                                    CALL +1-605-472-5461
                                </Button>

                                <Button className='rounded-[0] border-[#D4AF374D] w-[200px] text-[#4B5563] bg-white md:h-12'>
                                    <KeyRound />
                                    CODE: 347692#
                                </Button>

                            </div>

                        </div>
                        <div className='bg-[#FFFFFF] p-6 md:p-8 flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 rounded-[10px]'>
                            <div className='bg-[#F5F1ED] flex justify-center items-center h-12 w-12 aspect-square rounded-full md:h-14 md:w-14'>
                                <Phone className=' text-[#D4AF37] h-5 w-5 md:h-6 md:w-6' />

                            </div>

                            <div className='flex flex-col items-center gap-2 md:gap-1 md:items-start '>
                                <div className='flex py-0.5 px-2 w-fit h-fit bg-[#D4AF37] items-center justify-center rounded-[2px]'>
                                    <p className='uppercase text-[8px] md:text-[10px] font-switzer font-bold tracking-[1px] text-white'>Daily</p>
                                </div>

                                <p className='text-[#2C2C2C] text-[18px] md:text-[24px] font-semibold tracking-[-0.24px] font-gambetta'>
                                    Holy Spirit Prayer Line
                                </p>

                                <div className='flex gap-2 md:gap-3 items-center'>
                                    <Clock3 className=' text-[#8B3A3A] h-3 w-3 md:h-4 md:w-4' />
                                    <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                                        10pm ET (Sat-Thurs) | 9pm ET (Fri)
                                    </p>
                                </div>
                            </div>

                            <div className='md:ml-auto flex flex-col gap-2 md:gap-3 items-center justify-center'>
                                <Button className='rounded-[0]  md:h-12 w-[200px]'>
                                    <Phone />
                                    CALL +1-605-472-5461
                                </Button>

                                <Button className='rounded-[0] border-[#D4AF374D] w-[200px] text-[#4B5563] bg-white md:h-12'>
                                    <KeyRound />
                                    CODE: 347692#
                                </Button>

                            </div>

                        </div>
                        <div className='bg-[#FFFFFF] p-6 md:p-8 flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 rounded-[10px]'>
                            <div className='bg-[#F5F1ED] flex justify-center items-center h-12 w-12 aspect-square rounded-full md:h-14 md:w-14'>
                                <Phone className=' text-[#D4AF37] h-5 w-5 md:h-6 md:w-6' />

                            </div>

                            <div className='flex flex-col items-center gap-2 md:gap-1 md:items-start '>
                                <div className='flex py-0.5 px-2 w-fit h-fit bg-[#D4AF37] items-center justify-center rounded-[2px]'>
                                    <p className='uppercase text-[8px] md:text-[10px] font-switzer font-bold tracking-[1px] text-white'>Daily</p>
                                </div>

                                <p className='text-[#2C2C2C] text-[18px] md:text-[24px] font-semibold tracking-[-0.24px] font-gambetta'>
                                    Holy Spirit Prayer Line
                                </p>

                                <div className='flex gap-2 md:gap-3 items-center'>
                                    <Clock3 className=' text-[#8B3A3A] h-3 w-3 md:h-4 md:w-4' />
                                    <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                                        10pm ET (Sat-Thurs) | 9pm ET (Fri)
                                    </p>
                                </div>
                            </div>

                            <div className='md:ml-auto flex flex-col gap-2 md:gap-3 items-center justify-center'>
                                <Button className='rounded-[0]  md:h-12 w-[200px]'>
                                    <Phone />
                                    CALL +1-605-472-5461
                                </Button>

                                <Button className='rounded-[0] border-[#D4AF374D] w-[200px] text-[#4B5563] bg-white md:h-12'>
                                    <KeyRound />
                                    CODE: 347692#
                                </Button>

                            </div>

                        </div>
                        <div className='bg-[#FFFFFF] p-6 md:p-8 flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 rounded-[10px]'>
                            <div className='bg-[#F5F1ED] flex justify-center items-center h-12 w-12 aspect-square rounded-full md:h-14 md:w-14'>
                                <Phone className=' text-[#D4AF37] h-5 w-5 md:h-6 md:w-6' />

                            </div>

                            <div className='flex flex-col items-center gap-2 md:gap-1 md:items-start '>
                                <div className='flex py-0.5 px-2 w-fit h-fit bg-[#D4AF37] items-center justify-center rounded-[2px]'>
                                    <p className='uppercase text-[8px] md:text-[10px] font-switzer font-bold tracking-[1px] text-white'>Daily</p>
                                </div>

                                <p className='text-[#2C2C2C] text-[18px] md:text-[24px] font-semibold tracking-[-0.24px] font-gambetta'>
                                    Holy Spirit Prayer Line
                                </p>

                                <div className='flex gap-2 md:gap-3 items-center'>
                                    <Clock3 className=' text-[#8B3A3A] h-3 w-3 md:h-4 md:w-4' />
                                    <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                                        10pm ET (Sat-Thurs) | 9pm ET (Fri)
                                    </p>
                                </div>
                            </div>

                            <div className='md:ml-auto flex flex-col gap-2 md:gap-3 items-center justify-center'>
                                <Button className='rounded-[0]  md:h-12 w-[200px]'>
                                    <Phone />
                                    CALL +1-605-472-5461
                                </Button>

                                <Button className='rounded-[0] border-[#D4AF374D] w-[200px] text-[#4B5563] bg-white md:h-12'>
                                    <KeyRound />
                                    CODE: 347692#
                                </Button>

                            </div>

                        </div>
                        <div className='bg-[#FFFFFF] p-6 md:p-8 flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 rounded-[10px]'>
                            <div className='bg-[#F5F1ED] flex justify-center items-center h-12 w-12 aspect-square rounded-full md:h-14 md:w-14'>
                                <Phone className=' text-[#D4AF37] h-5 w-5 md:h-6 md:w-6' />

                            </div>

                            <div className='flex flex-col items-center gap-2 md:gap-1 md:items-start '>
                                <div className='flex py-0.5 px-2 w-fit h-fit bg-[#D4AF37] items-center justify-center rounded-[2px]'>
                                    <p className='uppercase text-[8px] md:text-[10px] font-switzer font-bold tracking-[1px] text-white'>Daily</p>
                                </div>

                                <p className='text-[#2C2C2C] text-[18px] md:text-[24px] font-semibold tracking-[-0.24px] font-gambetta'>
                                    Holy Spirit Prayer Line
                                </p>

                                <div className='flex gap-2 md:gap-3 items-center'>
                                    <Clock3 className=' text-[#8B3A3A] h-3 w-3 md:h-4 md:w-4' />
                                    <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                                        10pm ET (Sat-Thurs) | 9pm ET (Fri)
                                    </p>
                                </div>
                            </div>

                            <div className='md:ml-auto flex flex-col gap-2 md:gap-3 items-center justify-center'>
                                <Button className='rounded-[0]  md:h-12 w-[200px]'>
                                    <Phone />
                                    CALL +1-605-472-5461
                                </Button>

                                <Button className='rounded-[0] border-[#D4AF374D] w-[200px] text-[#4B5563] bg-white md:h-12'>
                                    <KeyRound />
                                    CODE: 347692#
                                </Button>

                            </div>

                        </div>
                        <div className='bg-[#FFFFFF] p-6 md:p-8 flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 rounded-[10px]'>
                            <div className='bg-[#F5F1ED] flex justify-center items-center h-12 w-12 aspect-square rounded-full md:h-14 md:w-14'>
                                <Phone className=' text-[#D4AF37] h-5 w-5 md:h-6 md:w-6' />

                            </div>

                            <div className='flex flex-col items-center gap-2 md:gap-1 md:items-start '>
                                <div className='flex py-0.5 px-2 w-fit h-fit bg-[#D4AF37] items-center justify-center rounded-[2px]'>
                                    <p className='uppercase text-[8px] md:text-[10px] font-switzer font-bold tracking-[1px] text-white'>Daily</p>
                                </div>

                                <p className='text-[#2C2C2C] text-[18px] md:text-[24px] font-semibold tracking-[-0.24px] font-gambetta'>
                                    Holy Spirit Prayer Line
                                </p>

                                <div className='flex gap-2 md:gap-3 items-center'>
                                    <Clock3 className=' text-[#8B3A3A] h-3 w-3 md:h-4 md:w-4' />
                                    <p className='text-[#6B7280] text-[10px] md:text-[14px] tracking-[1.4px] font-switzer'>
                                        10pm ET (Sat-Thurs) | 9pm ET (Fri)
                                    </p>
                                </div>
                            </div>

                            <div className='md:ml-auto flex flex-col gap-2 md:gap-3 items-center justify-center'>
                                <Button className='rounded-[0]  md:h-12 w-[200px]'>
                                    <Phone />
                                    CALL +1-605-472-5461
                                </Button>

                                <Button className='rounded-[0] border-[#D4AF374D] w-[200px] text-[#4B5563] bg-white md:h-12'>
                                    <KeyRound />
                                    CODE: 347692#
                                </Button>

                            </div>

                        </div>

                    </div>

                    <div className='flex flex-col gap-6 md:gap-10'>
                        <div className='bg-white py-6 lg:py-10 flex flex-col gap-6 md:gap-10 rounded-[10px] px-6'>
                            <div className="text-left flex flex-col md:items-start gap-2">
                                <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Submit a Prayer Request</h2>
                                <p className="text-[12px] md:text-[18px] font-switzer text-[#4A5565] leading-4.75 ">Your intentions will be placed at the foot of the altar and remembered in our daily intercessory sessions.</p>
                            </div>
                            <PetitionForm />
                        </div>


                        <div className='bg-[#8B3A3A] text-left w-full rounded-[10px] py-4 lg:py-16 lg:px-8 px-6 flex flex-col gap-2'>
                            <h2 className='text-white text-left text-[18px] font-semibold md:text-[20px] italic font-gambetta leading-10'>
                                Need Guidance?
                            </h2>

                            <p className="text-[#FFFFFFCC] text-left font-switzer font-light text-[12px] md:text-[14px] ">
                                Our spiritual directors are available for private consultation.
                            </p>

                            <div className=" flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-8 mt-3">

                                <Button variant='outline' className=' md:w-fit tracking-[1.4px] w-full'>
                                    CONTACT US
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className=" bg-[#E8E3DD] text-center py-8 px-6 md:px-[185px] md:py-[96px] flex flex-col gap-7 md:gap-9">
                <h2 className='text-[#2C2C2C] text-[24px] md:text-[48px] font-gambetta leading-6.5 md:leading-[48px] text-center'>
                    Ready to Join the Prayer Community?
                </h2>

                <p className="text-[#4B5563] font-switzer font-light text-[12px] md:text-[20px] ">
                    Whether you are a seasoned intercessor or just beginning your prayer journey, there is a place for you at
                    our table of intercession.
                </p>

                <div className=" flex flex-col lg:flex-row lg:justify-center gap-6">
                    <Button className='text-[#fff]  w-full lg:w-fit'>
                        JOIN A MINISTRY
                    </Button>

                </div>

            </section >

        </div >
    )
}
