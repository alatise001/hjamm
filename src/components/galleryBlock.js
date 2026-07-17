import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function GalleryBlock() {
    return (

        <div className=" h-fit rounded-[10px] p-[14px]  bg-white  border border-[#0000001A] shadow">
            <div className="  outline-1 bg-[url('/heroBg.jpg')] rounded-[10px] bg-cover bg-center h-[204px]" />

            <div className="py-4 flex flex-col gap-4 rounded-b-[10px] bg-white">
                <h2 className="text-[#2C2C2C] text-base lg:text-xl font-semibold font-gambetta leading-8 tracking-[-0.24px]">
                    2015 Day 3 - Sunday Mass Celebration
                </h2>

                <h3 className='flex items-center text-[10px] lg:text-[12px] font-bold font-switzer leading-3.5 tracking-[2px] text-[#D4AF37] uppercase'>VIEW COLLECTION <ArrowRight className=" inline-block h-3 w-3 ml-1" /></h3>


            </div>
        </div>
    )
}
