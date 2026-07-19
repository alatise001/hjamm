import Link from 'next/link'
import React from 'react'

export default function MinistriesBlock({ name, description, img, route }) {
    return (

        <div className="min-w-58.75 max-w-[370px] h-fit rounded-[10px] border border-[#0000001A] shadow">
            <div className={`w-full outline-1 rounded-t-[10px] bg-cover bg-center h-33.75`} style={{ backgroundImage: `url(${img})` }} />

            <div className="p-3.5 flex flex-col gap-2">

                <h2 className="text-[#2C2C2C] text-base font-bold font-gambetta leading-6 tracking-[-0.24px]">
                    {name}
                </h2>

                <p className="text-[8px] text-[#6B7280] font-switzer">
                    {description}
                </p>
                <Link href={{ pathname: route, query: { name: name } }} className="w-full hover:underline md:w-fit">
                    <p className="text-[10px] font-bold text-[#8B3A3A] uppercase tracking-[1.65px] hover:underline font-switzer">
                        See more
                    </p>
                </Link>
            </div>
        </div>
    )
}
