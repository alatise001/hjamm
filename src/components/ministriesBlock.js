import React from 'react'

export default function MinistriesBlock() {
    return (

        <div className="min-w-58.75 max-w-[370px] h-fit rounded-[10px] border border-[#0000001A] shadow">
            <div className=" w-full outline-1 bg-[url('/heroBg.jpg')] rounded-t-[10px] bg-cover bg-center h-33.75" />

            <div className="p-3.5 flex flex-col gap-2">

                <h2 className="text-[#2C2C2C] text-base font-bold font-gambetta leading-6 tracking-[-0.24px]">
                    Intercessory Ministry
                </h2>

                <p className="text-[8px] text-[#6B7280] font-switzer">
                    Intercessory Ministry JOSEPHINE BALIMA COORDINATOR Our Intercessory Ministry dedicates their time to pray for the organization and for the needy in the society. We meet every Tuesday @ 7:00PM ET to pray for people’s requests.
                </p>

                <p className="text-[10px] font-bold text-[#8B3A3A] uppercase tracking-[1.65px] font-switzer">
                    See more
                </p>
            </div>
        </div>
    )
}
