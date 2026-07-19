"use client"
import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, ChevronUp, Church, Cross, Earth, HandHelping, MicVocal, Monitor, Music, Sparkle, TextAlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { iconLibraries } from 'shadcn/icons'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { routes } from "../routes"


export default function HeaderDesktop() {

    const pathname = usePathname();

    const navList = [
        {
            name: "Ministries",
            hasOptions: true,
            route: routes.ministries,
        },
        {
            name: "Events",
            hasOptions: false,
            route: routes.events,
        },
        {
            name: "Gallery",
            hasOptions: false,
            route: routes.gallery,
        }, {
            name: "Books",
            hasOptions: false,
            route: routes.books
        }, {
            name: "Live Prayers",
            hasOptions: false,
            route: routes.livePrayer
        }, {
            name: "About Us",
            hasOptions: false,
            route: routes.aboutUs
        },
    ]

    const options = [
        {
            name: "Singing Ministry",
            icon: <Music />,
            desc: 'Sacred harmony & liturgical worship',
            route: routes.ministryDetails("singing")
        },
        {
            name: "Youth Ministry",
            icon: <Music />,
            desc: 'Forming young hearts in faith',
            route: routes.ministryDetails("youth")
        },
        {
            name: "Gesthsemane Hour Ministry",
            icon: <Music />,
            desc: 'Vigil of prayer and reparation',
            route: routes.ministryDetails("gesthsemane")
        }, {
            name: "Technology Ministry",
            icon: <Music />,
            desc: 'Digital stewardship & livestreams',
            route: routes.ministryDetails("technology")
        }, {
            name: "Mission & a Charity Ministry",
            icon: <Music />,
            desc: 'Global apostolic service',
            route: routes.ministryDetails("mission-charity")
        }, {
            name: "Rosary Ministry",
            icon: <Music />,
            desc: 'Sacred Rosary prayer',
            route: routes.ministryDetails("rosary")
        }, {
            name: "Testimony Ministry",
            icon: <Music />,
            desc: 'Witnessing Gods grace & mercy',
            route: routes.ministryDetails("testimony")
        }, {
            name: "Intercessory Ministry",
            icon: <Music />,
            desc: 'Standing in prayer for all',
            route: routes.ministryDetails("intercessory")
        },
    ]



    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Optional but recommended: Prevent scrolling on the main page when the menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);


    return (
        <div className='hidden lg:block'>
            <header onMouseLeave={() => isMenuOpen ? setIsMenuOpen(false) : ""} className={`w-full fixed py-6 px-10
                 inset-0 h-fit z-40 `}>
                <div className="h-fit bg-[#C9C6C3] rounded-[60px] flex items-center justify-between p-4 px-6">
                    <Link href="/" className="flex gap-2 items-center">
                        <div className="flex gap-4 items-center cursor-pointer">
                            <Image
                                className=""
                                src="/logo_HJM.png"
                                alt="HJM logomark"
                                width={55}
                                height={55}
                            />

                            <div className='' >
                                <h1 className='text-xl font-bold text-[#423300] font-gambetta' >HJAMM</h1>
                                <p className='text-[#8B3A3A] text-[10px] font-extrabold uppercase font-switzer tracking-[3px]'>Hearts of Jesus & Mary ministries</p>
                            </div>
                        </div>
                    </Link>


                    <nav>
                        <ul className='text-[#2C2C2C] text-[14px] flex gap-16 font-switzer font-medium trcking-[0.35px] leading-5'>

                            {
                                navList.map((item, index) => (
                                    <Link key={index} href={item.route} className={`flex gap-2 items-center hover:text-[#8B3A3A] ${pathname === item.route ? 'text-[#8B3A3A] border-b-2 border-[#8B3A3A] pb-2.5 transition' : ''}`}>
                                        <li onMouseEnter={() => item.hasOptions ? setIsMenuOpen(true) : setIsMenuOpen(false)} className={'flex items-center gap-0.5 cursor-pointer'}>
                                            {item.name}
                                            {item.hasOptions && isMenuOpen ? <ChevronUp className='h-3.5 w-3.5' /> : item.hasOptions && <ChevronDown className='h-3.5 w-3.5' />}
                                        </li>
                                    </Link>

                                ))
                            }
                            {/* <li className={'flex items-center gap-0.5'}>Minstries
                                    <ChevronDown className='h-3.5 w-3.5' />
                                </li> */}
                        </ul>
                    </nav>

                    <Button size="lg" className='h-[40px] w-[138px] text-[14px] font-medium tracking-[0.35px] font-switzer ' >
                        Donate today

                    </Button>
                </div>
            </header>


            {
                isMenuOpen && (

                    <div onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)} className='w-full h-fit px-10 fixed top-32'>

                        <div className='bg-[#C9C6C3] rounded-[30px] h-fit w-full pt-12 outline-1 '>

                            <div className='grid grid-cols-3 gap-15 pb-12 px-12 grid-rows-3'>
                                {
                                    options.map((item, index) => (
                                        <Link key={index} href={{ pathname: item.route, query: { name: item.name } }} className='w-fit h-fit'>
                                            <div className='flex w-fit cursor-pointer h-fit items-center gap-4'>
                                                <div className='h-12 w-12 rounded-[10px] bg-[#FFFFFF80] text-[#8B3A3A] flex flex-col items-center justify-center'>
                                                    {item.icon}
                                                </div>

                                                <div>
                                                    <p className='font-gambetta tracking-[-1.16px] text-[16px] font-bold text-[#2C2C2C]'>{item.name}</p>
                                                    <p className='font-switzer text-[12px] text-[#6B7280]'>{item.desc}</p>
                                                </div>
                                            </div>
                                        </Link>

                                    ))
                                }


                            </div>

                            <div className=' bg-[#8B3A3A0D] mt-auto h-[48px] py-4 px-12 border-[#D4AF371A] border-t flex justify-between items-center text-[10px] font-semibold uppercase tracking-[2px] font-switzer'>
                                <p className='text-[#707070]'>DISCOVER YOUR VOCATION IN OUR MINISTRY FAMILY</p>

                                <div className='flex items-center gap-4 text-[#8B3A3A]'>
                                    <p>
                                        VIEW ALL MINISTRIES
                                    </p>
                                    <ArrowRight />
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}
