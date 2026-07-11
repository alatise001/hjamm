import { MapPin } from 'lucide-react'
import React from 'react'

export default function EventItemBlock() {
    return (

        <div className="min-w-68 h-fit rounded-[10px] border border-[#0000001A] shadow">
            <div className="relative outline-1 bg-[url('/heroBg.jpg')] rounded-[10px] bg-cover bg-center h-47.75" >
                <div className='absolute shadow top-4 right-3.25 bg-[#D4AF37E5] px-3 py-1 w-fit flex items-center justify-center'>
                    <p className='uppercase text-white text-[8px] font-bold font-switzer tracking-[.8px]'>Workshop</p>
                </div>
            </div>

            <div className="p-4.5 flex flex-col gap-2">
                <div className='text-[#8B3A3A99] flex gap-2 items-center'>
                    <MapPin className='h-2.5 w-2.5 ' />
                    <p className='font-bold font-switzer text-[8px] uppercase tracking-[1px] '>YouTube & Facebook Live</p>
                </div>

                <h2 className="text-[#2C2C2C] text-[15px] font-gambetta">
                    Sacred Music & Chant Workshop
                </h2>

                <p className="text-[10px] font-light text-[#6B7280] font-switzer">
                    A deep dive into the Gregorian melodies and polyphony that elevate the soul toward the...
                </p>

                <div className="h-[1.3px] w-full self-center bg-[#8B3A3A1A] my-2" />

                <div className='flex justify-between items-center'>
                    <p className="text-[10px] font-medium text-[#2C2C2C] font-switzer">
                        April 12, 2026
                    </p>

                    <p className="text-[10px] font-medium underline text-[#8B3A3A] uppercase tracking-[1px] font-switzer">
                        View Details
                    </p>
                </div>
            </div>
        </div>
    )
}
