import { MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function EventItemBlock({ online, type, location, name, description, date, img, route }) {
    return (

        <div className="min-w-68 lg:h-fit lg:w-fit h-fit rounded-[10px] border border-[#0000001A] shadow">
            <div className="relative outline-1 rounded-[10px] md:rounded-none bg-cover bg-center h-47.75 md:h-62" style={{ backgroundImage: `url(${img})` }} >
                <div className='absolute shadow top-4 right-3.25 bg-[#D4AF37E5] px-3 py-1 w-fit flex items-center justify-center'>
                    <p className='uppercase text-white text-[8px] lg:text-[10px] font-bold font-switzer tracking-[.8px]'>{type}</p>
                </div>
            </div>

            <div className="p-4.5 lg:p-8 flex flex-col gap-2">
                <div className='text-[#8B3A3A99] flex gap-2 items-center'>
                    <MapPin className='h-2.5 w-2.5 ' />
                    <p className='font-bold font-switzer text-[8px] lg:text-[11px] uppercase tracking-[1px] '>{location}</p>
                </div>

                <h2 className="text-[#2C2C2C] text-[15px] lg:text-[24px] font-gambetta">
                    {name}
                </h2>

                <p className="text-[10px] lg:text-[14px] font-light text-[#6B7280] font-switzer">
                    {description}
                </p>

                <div className="h-[1.3px] w-full self-center bg-[#8B3A3A1A] my-2 md:my-6" />

                <div className='flex justify-between items-center'>
                    <p className="text-[10px] lg:text-[14px] font-medium text-[#2C2C2C] font-switzer">
                        {date}
                    </p>


                    <Link href={{ pathname: route, query: { name: name } }} className=" flex md:w-fit">
                        <p className="text-[10px] lg:text-[14px] font-medium underline text-[#8B3A3A] uppercase tracking-[1px] font-switzer">
                            View Details
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
