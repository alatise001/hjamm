import React from 'react'
import MissionForm from './missionForm'
import { ShoppingCart } from 'lucide-react'

export default function BooksBlock() {
    return (

        <div className=" h-fit min-w-fit rounded-[10px] border border-[#0000001A] bg-white px-4.5 py-6 shadow">
            <div className=" flex flex-col items-center gap-8 justify-center bg-[url('/missionBg.png')] px-6.5 rounded-t-[10px] bg-cover bg-center h-[359px] bg-blend-overlay bg-black/50" />

            <div className=" pt-4 flex flex-col gap-1 rounded-b-[10px] bg-white">

                <h2 className="text-[#2C2C2C] text-[18px] font-bold font-gambetta leading-7 tracking-[-0.24px]">
                    War Against Python & Snake Spirit
                </h2>
                <h3 className='text-[10px] font-bold font-switzer leading-3.5 tracking-[1px] text-[#D4AF37] uppercase'>DR. uwakwe c. chukwu</h3>
            </div>

            <div className=' my-4 border border-[#F3F4F6]' />

            <div className='flex justify-between items-center'>
                <p className="text-[18px] font-semibold leading-7 text-[#2C2C2C] font-switzer">
                    NGN 33,979.00
                </p>

                <p className='text-[#8B3A3A] font-switzer font-semibold text-[10px] uppercase leading-4 tracking-[1.2px] underline'>
                    View Details
                </p>
            </div>

        </div>
    )
}
