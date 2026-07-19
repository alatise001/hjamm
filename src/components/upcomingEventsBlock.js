import { routes } from '@/routes'
import Link from 'next/link'
import React from 'react'

export default function UpcomingEventsBlock({ online, type, location, name, description, date, img, route }) {
    return (
        <Link href={{ pathname: route, query: { name: name } }} className=" flex md:w-fit">

            <div className="min-w-58.75 max-w-[370px] h-fit  rounded-[10px] border border-[#0000001A] shadow">
                <div className=" w-full outline-1 bg-[url('/heroBg.jpg')] rounded-t-[10px] bg-cover bg-center h-33.75" style={{ backgroundImage: `url(${img})` }} />

                <div className="px-3 lg:px-6 py-3 lg:py-7 flex flex-col gap-2">
                    <p className='text-[#D4AF37] font-switzer text-[8px] lg:text-[10px] font-bold uppercase tracking-[3.5px] leading-20px]'>{type}</p>

                    <h2 className="text-[#2C2C2C] text-base lg:text-[20px] font-bold font-gambetta leading-6 tracking-[-0.24px]">
                        {name}
                    </h2>

                    <p className="text-[10px] lg:text-[14px] text-[#6B7280] tracking-[1.65px] font-switzer">
                        {date}
                    </p>
                </div>
            </div>
        </Link>
    )
}
