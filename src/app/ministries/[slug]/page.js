'use client'
import React from 'react'
import PetitionForm from '@/components/petitoionForm'
import { ArrowLeft, HandHelping, MessageSquare } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function MinistryDetails() {


    const searchParams = useSearchParams();
    const name = searchParams.get("name");

    return (
        <div className="">
            <section className="pt-36 pb-16 px-9.25 md:pt-50 h-[80vh] bg-[url('/intercessoryBg.png')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/80">
                <div className="flex flex-col lg:max-w-[50%] gap-5">
                    <h1 className="text-[36px] md:text-[72px] text-white font-gambetta font-medium text-center tracking-[-2.4px]">{name}</h1>
                </div>
            </section>

            <div className="bg-[#F5F1ED] mb-13 px-6 md:px-9 py-8 md:py-14">

                <section className='flex gap-4 pb-8  md:pb-14 font-medium text-[10px] lg:text-[14px]  uppercase font-switzer'>
                    <ArrowLeft className='h-3.5 w-3.5 text-[#ADB5BD]' />
                    <p className='text-[#ADB5BD] '>
                        MINISTRIES
                    </p>

                    <p className='text-[#ADB5BD] '>
                        /
                    </p>

                    <p className='text-[#8B3A3A]'>
                        {name}
                    </p>

                </section>


                <section className=" bg-[#8B3A3A] rounded-[10px] text-center py-8 px-6 md:px-[48px] md:py-[60px] flex flex-col gap-8 md:gap-10">

                    <div className=" flex flex-col items-center gap-6">
                        <div className="h-[142px] w-[142px] bg-[url('/minLeader.png')] bg-contain bg-center bg-no-repeat border-white border-2 b aspect-square rounded-full" />


                        <div className='flex flex-col gap-1 md: gap-2 font-switzer uppercase'>
                            <p className='text-[16px] text-white font-semibold tracking-[1.4px] md:text-[20px]'>
                                JOSEPHINE BALIMA
                            </p>
                            <p className='text-[11px] md:text-[14px] tracking-[1.4px] text-[#D9D9D9]'>
                                intercessory coordinator
                            </p>
                        </div>

                    </div>

                    <div className='font-gambetta text-[16px] md:text-[24px] tracking-[-0.48px] text-white'>

                        <p>
                            Our Intercessory Ministry dedicates their time to pray for the organization and for the needy in the society.
                        </p>

                        <p>
                            We meet every Tuesday @ 7:00PM ET to pray for people’s requests: prayer@hjamm.org
                        </p>
                    </div>




                </section >

                <section className="bg-white py-8 px-6 md:px-46.25 mt-[53px] rounded-[10px] md:py-24 flex flex-col gap-7">
                    <div className="text-center flex flex-col gap-4.5 w-[90%] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <HandHelping className="text-[#8B3A3A] h-6 w-6" />
                            <p className=" text-[12px] font-bold text-[#8B3A3A] uppercase tracking-[3.65px] font-switzer">
                                Sacred Petitions
                            </p>
                        </div>
                        <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Submit a Prayer Request</h2>
                        <p className="text-[12px] md:text-[18px] font-switzer text-[#4A5565] leading-4.75 ">Your intentions will be placed at the foot of the altar and remembered in our daily intercessory sessions.</p>
                        <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
                    </div>

                    <div className="py-6.5 px-5 bg-[#F5F1ED59] rounded-[16px]">

                        <PetitionForm />

                    </div>
                </section>
            </div>

        </div>
    )
}
