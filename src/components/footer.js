import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>

            <div className='pt-10 md:pt-20 pb-5 md:pb-12.5 px-6 md:px-12 bg-white h-max flex flex-col md:flex-row md:justify-between gap-10 '>
                <div className='flex flex-col gap-6 md:max-w-142'>

                    <Link href="/" className="flex gap-2 items-center">
                        <div className="flex gap-2 items-center">

                            <Image
                                className=""
                                src="/logo_HJM.png"
                                alt="HJM logomark"
                                width={40}
                                height={40}
                            />

                            <div className="" >
                                <h1 className='text-xl font-bold text-[#6B7280] font-gambetta' >HJAMM</h1>
                                <p className='text-[#D4AF37] text-[10px] font-medium uppercase font-switzer tracking-[1px]'>Hearts of Jesus & Mary ministries</p>
                            </div>
                        </div>
                    </Link>

                    <p className='text-[#7A7A7A] text-[12px] font-switzer leading-4.25 md:max-w-[70%]'>
                        A ministry dedicated to the traditional Catholic devotions, healing prayer, and the spiritual nourishment of the faithful through the intercession of the Hearts of Jesus and Mary.
                    </p>

                    <div className='flex gap-4 items-center'>
                        {/* <div className='h-10 aspect-square rounded-full border border-[#6B728029] flex items-center justify-center'>
                    </div> */}
                        <Image
                            className=""
                            src="/facebook.svg"
                            alt="Facebook logomark"
                            width={30}
                            height={30}
                        />

                        <Image
                            className=""
                            src="/youtube.svg"
                            alt="YouTube logomark"
                            width={30}
                            height={30}
                        />
                    </div>

                    <p className='hidden md:block text-[#7A7A7A] font-switzer text-[12px] underline '>
                        Safe Environment Policy
                    </p>


                </div>

                <div className='flex flex-col gap-6'>
                    <h3 className=' text-xl text-[#6B7280] font-bold font-gambetta border-b-2 border-[#6B728029] pb-2 pr-14 w-fit'>
                        Sanctuary
                    </h3>

                    <nav>
                        <ul className='flex flex-col gap-4 text-[#7A7A7A] text-[16px] font-switzer leading-6'>
                            <li>Ministries</li>
                            <li>Books</li>
                            <li>Live Events</li>
                            <li>Volunteer </li>
                        </ul>
                    </nav>
                </div>

                <div className='flex flex-col gap-6'>
                    <h3 className=' text-xl text-[#6B7280] font-bold font-gambetta border-b-2 border-[#6B728029] pb-2 pr-14 w-fit'>
                        Connect
                    </h3>

                    <nav>
                        <ul className='flex flex-col gap-4 text-[#7A7A7A] text-[16px] font-switzer leading-6'>
                            <li>Gallery</li>
                            <Link href="/events">
                                <li>Events</li>
                            </Link>
                            <li>About Us</li>
                        </ul>
                    </nav>
                </div>

                <div className='flex flex-col gap-6'>
                    <h3 className=' text-xl text-[#6B7280] font-bold font-gambetta border-b-2 border-[#6B728029] pb-2 pr-14 w-fit'>
                        Contact Us
                    </h3>


                    <div className='flex flex-col justify-center gap-4 text-[#7A7A7A] text-[16px] font-switzer w-[80%] leading-6 pb-5'>
                        <p className='flex items-center gap-2'> <MapPin className='w-5 h-5 text-[#8B3A3A]' /> Hearts of Jesus and Mary Chapel, Spiritual City</p>
                        <p className='flex items-center gap-2'> <Phone className='w-5 h-5 text-[#8B3A3A]' /> +234 (0) 800 HJAMM 000</p>
                        <p className='flex items-center gap-2'> <Mail className='w-5 h-5 text-[#8B3A3A]' /> intercession@hjamm.orgs</p>
                    </div>
                </div>



            </div>

            <div className='flex items-center justify-center flex-col md:flex-row md:justify-between pb-6 md:pb-10 px-6 md:px-12 text-left pt-6.5 gap-5.5'>


                <p className='hidden md:block text-[#9CA3AF] italic font-switzer text-[12px]'>
                    May the Sacred Heart of Jesus and the Immaculate Heart of Mary be praised forever.
                </p>


                <p className='text-[#7A7A7A] text-center font-switzer text-[12px]'>
                    © 2026 Hearts of Jesus and Mary Ministry (HJAMM). All rights reserved.
                </p>

                <p className='md:hidden text-[#7A7A7A] font-switzer text-[12px] underline '>
                    Safe Environment Policy
                </p>

            </div >
        </>
    )
}
