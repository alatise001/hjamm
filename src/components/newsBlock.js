import React from 'react'

export default function NewsBlock() {
    return (

        <div className=" h-fit rounded-[10px]  border border-[#0000001A] shadow">
            <div className="  outline-1 bg-[url('/heroBg.jpg')] rounded-t-[10px] bg-cover bg-center h-[204px]" />

            <div className="px-6 py-6.5 flex flex-col gap-3 rounded-b-[10px] bg-white">

                <h3 className='text-[10px] font-bold font-switzer leading-3.5 tracking-[2px] text-[#D4AF37] uppercase'>Upcoming Retreat</h3>

                <h2 className="text-[#2C2C2C] text-base font-bold font-gambetta leading-6 tracking-[-0.24px]">
                    2026 National Retreat
                </h2>

                <p className="text-[12px] text-[#6B7280] font-switzer leading-5.5">
                    A dedicated time for silence, reflection, and deepening your personal prayer life with the…</p>

                <p className="text-[10px] pt-3.5 font-bold text-[#8B3A3A] uppercase tracking-[1.65px] font-switzer">
                    See more
                </p>
            </div>
        </div>
    )
}
