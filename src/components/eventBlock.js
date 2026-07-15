import React from 'react'
import MissionForm from './missionForm'
import { Calendar, Clock, UserRound, UsersRound } from 'lucide-react'
import { Button } from './ui/button'

export default function EventBlock() {
    return (

        <div className=" h-fit rounded-[10px] lg:flex border border-[#0000001A] bg-[#F5F1ED] shadow">
            <div className=" flex flex-col lg:h-[773px] lg:w-[50%] items-center gap-8 justify-center bg-[url('/missionBg.png')] px-6.5 rounded-t-[10px] lg:rounded-t-none lg:rounded-l-[10px] bg-cover bg-center h-[216px] bg-blend-overlay bg-black/50" />

            <div className="lg:h-[773px] lg:w-[50%] px-6 py-6.5 lg:p-16 flex flex-col lg:justify-around gap-3 rounded-b-[10px] bg-[#F5F1ED]">

                <div className='flex items-center gap-2 text-[#8B3A3A] text-[10px] lg:text-[18px] font-bold font-switzer'>
                    <Calendar className='h-3.5 w-3.5' />
                    <p>June 12 – 14, 2026</p>
                </div>

                <h2 className="text-[#2C2C2C] text-[24px] lg:text-[36px] font-gambetta tracking-[-0.24px]">
                    2026 National Retreat: Touch me Lord
                </h2>

                <div className='flex gap-4'>
                    <div className='flex flex-col justify-center items-center w-fit gap-1'>
                        <Clock className='h-5.25 w-5.25 text-[#D4AF37]' />
                        <p className='text-[#6B7280] font-medium text-[10px] font-switzer uppercase tracking-[1px]'>Duration</p>
                        <p className='text-[#2C2C2C] text-[12px] font-semibold font-switzer'>3 Days</p>
                    </div>

                    <div className='flex flex-col justify-center items-center w-fit gap-1'>
                        <UsersRound className='h-5.25 w-5.25 text-[#D4AF37]' />
                        <p className='text-[#6B7280] font-medium text-[10px] font-switzer uppercase tracking-[1px]'>Capacity</p>
                        <p className='text-[#2C2C2C] text-[12px] font-semibold font-switzer'>Limited</p>
                    </div>
                </div>

                <p className='font-gambetta inline-block text-[12px] lg:text-[18px] font-light leading-[16.8px] text-[#6B7280]'>
                    Join Rev. Fr. Thomas Aquinas for a week of radical silence and deep prayer in the heart of the Blue Ridge Mountains. This encounter is designed to strip away the noise of the digital world, allowing you to hear the quiet whisper of the Sacred Heart. Participants will engage in daily Eucharist, spiritual direction, and guided meditation on the Sorrowful Mysteries.
                    <span className='ml-1 underline text-[#8B3A3A]'>
                        see more
                    </span>
                </p>

                <div className="h-[1.3px] w-full self-center bg-[#8B3A3A1A] my-4" />

                <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-1.5'>
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-[#6B7280] font-switzer font-bold uppercase tracking-[1px] text-[10px] lg:text-[12px]'>Registration Fee</p>

                        <p className='text-[#8B3A3A] font-switzer font-bold text-[30px] leading-9'>$150.00  <span className='text-[#6B7280] font-normal italic leading-5 text-[14px]'>/ person</span></p>
                    </div>

                    <Button className="h-12.5 w-full lg:w-fit text-[14px] tracking-[1.4px] mt-[24px]">
                        Register Now
                    </Button>

                </div>
            </div>

        </div>
    )
}
