import React from 'react'

export default function PlayGround() {
    return (
        <div>
            <div className="self-stretch p-10 bg-stone-100 border-b-[0.67px] border-black/5 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="w-2 h-2 bg-pink-900 rounded-full" />
                    <div className="inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-pink-900 text-[10px] font-bold font-['Switzer'] uppercase leading-4 tracking-widest">LIVE IN PROGRESS</div>
                    </div>
                </div>
                <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-800 text-4xl font-medium font-['Gambetta'] leading-10">Station of the Cross</div>
                </div>
            </div>
            <div className="self-stretch px-12 py-7 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-center">
                        <div className="text-center justify-center text-zinc-800 text-xl font-bold font-['Gambetta'] leading-7">Choose Your Connection Method</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center">
                        <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Gambetta'] leading-5">Select how you&apos;d like to join the live prayer session today</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex flex-col justify-start items-start">
                    <div className="self-stretch p-8 bg-stone-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-black/0 inline-flex flex-col justify-start items-center">
                        <div className="flex flex-col justify-center items-center gap-2.5">
                            <div className="w-16 h-10 relative overflow-hidden">
                                <div className="w-10 h-7 left-[10.50px] top-[6.96px] absolute overflow-hidden">
                                    <div className="w-10 h-7 left-0 top-0 absolute bg-red-600" />
                                    <div className="w-2.5 h-3 left-[16px] top-[7.97px] absolute bg-white" />
                                </div>
                            </div>
                        </div>
                        <div className="pb-2 flex flex-col justify-start items-start">
                            <div className="flex flex-col justify-start items-center">
                                <div className="text-center justify-center text-zinc-800 text-lg font-bold font-['Gambetta'] leading-7">YouTube Live</div>
                            </div>
                        </div>
                        <div className="pb-8 flex flex-col justify-start items-start">
                            <div className="px-4 flex flex-col justify-start items-center">
                                <div className="text-center justify-center text-gray-500 text-xs font-normal font-['Gambetta'] leading-5">Watch with high quality video and<br />participate in community chat.</div>
                            </div>
                        </div>
                        <div className="self-stretch py-3.5 relative bg-pink-900 rounded-[10px] flex flex-col justify-start items-center">
                            <div className="w-52 h-11 left-0 top-0 absolute bg-white/0 rounded-sm" />
                            <div className="text-center justify-center text-white text-[10px] font-bold font-['Switzer'] uppercase leading-4 tracking-widest">JOIN ON YOUTUBE</div>
                        </div>
                    </div>
                    <div className="self-stretch h-64 p-8 bg-stone-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-black/0 inline-flex flex-col justify-start items-center">
                        <div className="flex flex-col justify-start items-center gap-0.5">
                            <div className="flex flex-col justify-center items-center gap-2.5">
                                <div className="w-16 h-10 relative overflow-hidden">
                                    <div className="w-9 h-9 left-[10.50px] top-[1.68px] absolute overflow-hidden">
                                        <div className="w-9 h-9 left-0 top-0 absolute bg-black" />
                                        <div className="w-9 h-9 left-0 top-0 absolute bg-blue-700" />
                                    </div>
                                </div>
                            </div>
                            <div className="pb-2 flex flex-col justify-start items-start">
                                <div className="flex flex-col justify-start items-center">
                                    <div className="text-center justify-center text-zinc-800 text-lg font-bold font-['Gambetta'] leading-7">Zoom Meeting</div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 flex flex-col justify-start items-start">
                            <div className="px-2 flex flex-col justify-start items-center">
                                <div className="text-center justify-center text-gray-500 text-xs font-normal font-['Gambetta'] leading-5">Join for interactive participation and<br />real-time  connection.</div>
                            </div>
                        </div>
                        <div className="self-stretch py-3.5 relative bg-pink-900 rounded-[10px] flex flex-col justify-start items-center">
                            <div className="w-52 h-11 left-[0.33px] top-[-0.32px] absolute bg-white/0 rounded-sm" />
                            <div className="text-center justify-center text-white text-[10px] font-bold font-['Switzer'] uppercase leading-4 tracking-widest">JOIN ZOOM MEETING</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="text-center justify-center"><span class="text-gray-400 text-[10px] font-normal font-['Gambetta'] uppercase leading-4 tracking-wide">HAVING TROUBLE? CONTACT OUR </span><span class="text-pink-900 text-[10px] font-normal font-['Gambetta'] underline uppercase leading-4 tracking-wide">TECHNOLOGY MINISTRY</span></div>
                </div>
            </div>
        </div>
    )
}
