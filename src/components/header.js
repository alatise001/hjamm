"use client"
import { useState, useEffect } from 'react'
import { TextAlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { routes } from "../routes"
import { usePathname } from "next/navigation";


export default function Header() {

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
        <div className='lg:hidden' >
            <header className={`w-full fixed inset-0 h-24 z-40  ${isMenuOpen ? 'bg-[#8B3A3A]' : 'bg-transparent'} `}>
                <div className="h-full flex items-center justify-between p-4">
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
                                <h1 className='text-xl font-bold text-white font-gambetta' >HJAMM</h1>
                                <p onClick={() => setIsMenuOpen(false)} className='text-[#D4AF37] text-[10px] font-medium uppercase font-switzer tracking-[1px]'>Hearts of Jesus & Mary ministries</p>
                            </div>
                        </div>
                    </Link>


                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 z-50 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <TextAlignJustify className="w-6 h-6 text-white" />
                        )}
                    </button>

                </div>

            </header>

            {isMenuOpen && (

                <div className={`fixed top-24 left-0 h-[calc(100vh-6rem)] z-40 flex flex-col overflow-y-auto bg-[#8B3A3A] w-full transition-color duration-300  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex-1 flex flex-col justify-center items-center px-4 pb-8 overflow-y-auto">
                        {/* Navigation Links */}
                        <nav className="flex-1 flex flex-col items-center justify-center space-y-8 text-white font-gambetta text-xl tracking-wider">
                            {navList.map((item, index) => (
                                <Link key={index} href={item?.route} className={`flex gap-2 items-center`}>
                                    <p onClick={() => setIsMenuOpen(false)} className={`hover:text-[#D4AF37] ${pathname === item.route ? 'text-[#D4AF37] border-b-1 border-[#D4AF37] pb-2.5 transition' : ''} focus:text-[#D4AF37] transition-colors`}>{item?.name}</p>
                                </Link>
                            )
                            )}
                        </nav>

                        <div className="mt-auto pt-10 text-center text-[#B8B8B8] text-xs italic font-switzer">
                            <p>May the Sacred Heart of Jesus and the Immaculate Heart of Mary be praised forever.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
