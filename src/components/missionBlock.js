import React from 'react'
import MissionForm from './missionForm'

export default function MissionBlock() {
    return (

        <div className="h-fit lg:h-[880px] lg:flex rounded-[10px] border border-[#0000001A] bg-white pb-10 shadow">
            <div className=" flex flex-col items-center gap-8 justify-center bg-[url('/missionBg.png')] px-6.5 lg:px-[90px] rounded-t-[10px] lg:rounded-l-[10px] lg:rounded-t-none bg-cover bg-center h-[400px] lg:h-[880px] lg:w-[60%] bg-blend-overlay bg-black/50">
                <div className="h-px self-start bg-[#D4AF37] w-12"></div>
                <p className='text-[36px] lg:text-[60px] font-medium italic text-white leading-[53px] font-gambetta'>
                    Be the hands and heart of Christ
                </p>

                <p className='font-light text-[14px] lg:text-[20px] font-switzer text-[#FFFFFFCC]'>
                    Every act of service is a prayer in motion. Join our mission to bring healing and encounter to the  globe at large.
                </p>
            </div>

            <div className=" lg:h-[880px] lg:w-[40%]  px-6 lg:p-16 py-6.5 flex flex-col gap-3 rounded-b-[10px] bg-white">

                <h3 className='text-[12px] font-bold font-switzer leading-3.5 tracking-[2.4px] text-[#D4AF37] uppercase'>Vocation of Service</h3>

                <h2 className="text-[#2C2C2C] text-[32px] lg:text-[36px] font-gambetta leading-10 tracking-[-0.24px]">
                    Join Our Mission
                </h2>

                <p className="text-[14px] lg:text-[16px] text-[#6A7282] font-switzer leading-3.5">
                    Is the Holy Spirit calling you to serve? Please share your details below to begin your journey with our ministry family.
                </p>

                <div className=' mt-4 lg:mt-12'>
                    <MissionForm />

                </div>

                <p className='text-center font-switzer italic text-[10px] text-[#99A1AF] uppercase tracking-[0.55px] mt-6'>
                    Guided by the Sacred Hearts of Jesus & Mary
                </p>

            </div>

        </div>
    )
}
