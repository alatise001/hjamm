import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function GalleryBlock({ day, title, coverImg, images }) {
    return (

        <div className=" h-fit rounded-[10px] p-[14px]  bg-white  border border-[#0000001A] shadow" >
            <div className=" relative  outline-1 bg-[url('/heroBg.jpg')] rounded-[10px] bg-cover bg-center h-[204px]" style={{ backgroundImage: `url(${coverImg})` }}>
                <div className='absolute shadow top-4 right-3.25 bg-[#D4AF37E5] px-3 py-1 w-fit flex items-center justify-center'>
                    <p className='uppercase text-white text-[8px] lg:text-[10px] font-bold font-switzer tracking-[.8px]'>{images.length} Photos</p>
                </div>
            </div>

            <div className="py-4 flex flex-col gap-4 rounded-b-[10px] bg-white">
                <h2 className="text-[#2C2C2C] text-base lg:text-xl font-semibold font-gambetta leading-8 tracking-[-0.24px]">
                    {day} - {title}
                </h2>

                <h3 className='flex items-center text-[10px] lg:text-[12px] font-bold font-switzer leading-3.5 tracking-[2px] text-[#D4AF37] uppercase'>VIEW COLLECTION <ArrowRight className=" inline-block h-3 w-3 ml-1" /></h3>


            </div>
        </div>
    )
}
