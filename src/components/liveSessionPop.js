import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function LiveSessionPop({ onClose }) {
    return (
        <div className="w-full md:w-fit">
            <div className='p-10 bg-[#F5F1ED] flex flex-col gap-2'>
                <div className="flex gap-2 items-center py-1">
                    <p className="text-[#8B3A3A] leading-4 font-bold tracking-[3.5px] text-[20px] font-switzer pb-1">
                        •
                    </p>
                    <h3 className="text-[#8B3A3A] text-[10px] uppercase font-switzer leading-4 font-bold tracking-[3.5px]">LIVE IN PROGRESS</h3>
                </div>
                <h2 className="text-[#2C2C2C] text-[28px] md:text-[36px] font-gambetta leading-[26.4px]">Station of the Cross</h2>
            </div>

            <div className='px-12 py-7 flex flex-col gap-4 text-center bg-[#FFFFFF]'>
                <div className='font-gambetta'>
                    <h3 className='text-[#2C2C2C] font-bold tracking-[-0.2px] text-[18px] md:text-[20px]'>Choose Your Connection Method</h3>
                    <p className='text-[#6B7280] text-[12px] md:text-[14px]'>Select how you'd like to join the live prayer session today</p>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
                    <div className='p-8 flex flex-col items-center gap-4 bg-[#F5F1ED] rounded-[10px]'>
                        <div className='flex flex-col items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 40 28" fill="none">
                                <g clipPath="url(#clip0_499_2374)">
                                    <path d="M39.1166 4.36722C38.8871 3.52311 38.4396 2.75356 37.8185 2.1352C37.1974 1.51684 36.4244 1.07125 35.5766 0.8428C32.4725 0 19.9797 0 19.9797 0C19.9797 0 7.48628 0.0255111 4.38222 0.868311C3.53432 1.09678 2.76135 1.54239 2.14025 2.16078C1.51916 2.77916 1.07163 3.54875 0.842217 4.39289C-0.0966887 9.88369 -0.460907 18.2504 0.867998 23.5216C1.09743 24.3657 1.54498 25.1352 2.16607 25.7536C2.78716 26.3719 3.56013 26.8175 4.408 27.046C7.51206 27.8888 20.0052 27.8888 20.0052 27.8888C20.0052 27.8888 32.4981 27.8888 35.602 27.046C36.4499 26.8176 37.2229 26.372 37.8441 25.7536C38.4652 25.1353 38.9128 24.3657 39.1422 23.5216C40.1325 18.023 40.4377 9.6614 39.1166 4.36722Z" fill="#FF0000" />
                                    <path d="M16.0039 19.921L26.3677 13.9449L16.0039 7.96875V19.921Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_499_2374">
                                        <rect width="40" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h3 className='text-[#2C2C2C] font-bold tracking-[-0.1px] text-[14px] md:text-[18px]'>YouTube Live</h3>
                        </div>

                        <div className='flex flex-col gap-8 items-center'>
                            <p className='text-[#6B7280] font-gambetta text-[10px] md:text-[12px]'>
                                Watch with high quality video and
                                participate in community chat.
                            </p>


                            <Link href='https://www.youtube.com/@heartsofjesusandmaryminist4802' target='_blank'>
                                <Button onClick={onClose} className='text-[10px] h-[43px] md:text-[12px]'>
                                    JOIN ON YOUTUBE
                                </Button>
                            </Link>
                        </div>

                    </div>


                    <div className='p-8 flex flex-col items-center gap-4 bg-[#F5F1ED] rounded-[10px]'>
                        <div className='flex flex-col items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                <g clip-path="url(#clip0_499_2384)">
                                    <mask id="mask0_499_2384" maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="37">
                                        <path d="M0 0H37V37H0V0Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_499_2384)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M37 18.5C37 28.7166 28.7166 37 18.5 37C8.28337 37 0 28.7166 0 18.5C0 8.28337 8.28337 0 18.5 0C28.7166 0 37 8.28337 37 18.5ZM9.25 24.975H23.125V14.8C23.125 14.4356 23.0532 14.0747 22.9138 13.7381C22.7743 13.4014 22.5699 13.0955 22.3122 12.8378C22.0545 12.5801 21.7486 12.3757 21.4119 12.2362C21.0753 12.0968 20.7144 12.025 20.35 12.025H6.475V22.2C6.475 22.936 6.76736 23.6418 7.28778 24.1622C7.54546 24.4199 7.85137 24.6243 8.18805 24.7638C8.52473 24.9032 8.88558 24.975 9.25 24.975ZM24.975 21.275L30.525 24.975V12.025L24.975 15.725V21.275Z" fill="#2727F5" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_499_2384">
                                        <rect width="37" height="37" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h3 className='text-[#2C2C2C] font-bold tracking-[-0.1px] text-[14px] md:text-[18px]'>Zoom Meeting</h3>
                        </div>

                        <div className='flex flex-col gap-8 items-center'>
                            <p className='text-[#6B7280] font-gambetta text-[10px] md:text-[12px]'>
                                Watch with high quality video and
                                participate in community chat.
                            </p>


                            <Link href='https://app.zoom.us/wc' target='_blank'>

                                <Button onClick={onClose} className='text-[10px] h-[43px] md:text-[12px]'>
                                    JOIN ZOOM MEETING
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>

                <p className='text-[#9CA3AF] text-[10px] md:text-[12px] font-gambetta mt-12 uppercase tracking-[1px] text-center'>
                    HAVING TROUBLE? CONTACT OUR <span className='text-[#8B3A3A]'>TECHNOLOGY MINISTRY</span>
                </p>

            </div>

        </div>
    )
}
