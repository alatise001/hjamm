import Link from 'next/link'
import React from 'react'

export default function NewsBlock({ type, name, description, img, route }) {
    return (

        <div className=" h-fit rounded-[10px]  border border-[#0000001A] shadow">
            <div className="  outline-1 bg-[url('/heroBg.jpg')] rounded-t-[10px] bg-cover bg-center h-[204px]" style={{ backgroundImage: `url(${img})` }} />

            <div className="px-6 py-6.5 flex flex-col gap-3 rounded-b-[10px] bg-white">

                <h3 className='text-[10px] font-bold font-switzer leading-3.5 tracking-[2px] text-[#D4AF37] uppercase'>{type}</h3>

                <h2 className="text-[#2C2C2C] text-base font-bold font-gambetta leading-6 tracking-[-0.24px]">
                    {name}
                </h2>

                <p className="text-[12px] text-[#6B7280] font-switzer leading-5.5">
                    {description}
                </p>

                <Link href={{ pathname: route, query: { name: name } }} className="w-full md:w-fit hover:underline">
                    <p className="text-[10px] pt-3.5 font-bold text-[#8B3A3A] uppercase hover:underline tracking-[1.65px] font-switzer">
                        See more
                    </p>
                </Link>
            </div>
        </div >
    )
}
