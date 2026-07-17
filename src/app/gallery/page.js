import GalleryBlock from '@/components/galleryBlock'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Gallery() {
    return (
        <div>
            <section className="pt-36 pb-16 px-9.25 md:pt-50 h-[80vh] bg-[url('/galleryBg.jpg')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/80">


                <div className="hidden md:flex items-center gap-3">
                    {/* <Cross className="text-white h-[36px] w-[36px]" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
                        <path d="M22.2188 7.875H16.3125V1.96875C16.3125 0.882167 15.4303 0 14.3438 0H9.84375C8.75717 0 7.875 0.882167 7.875 1.96875V7.875H1.96875C0.882167 7.875 0 8.75717 0 9.84375V14.3438C0 15.4303 0.882167 16.3125 1.96875 16.3125H7.875V28.9688C7.875 30.0553 8.75717 30.9375 9.84375 30.9375H14.3438C15.4303 30.9375 16.3125 30.0553 16.3125 28.9688V16.3125H22.2188C23.3053 16.3125 24.1875 15.4303 24.1875 14.3438V9.84375C24.1875 8.75717 23.3053 7.875 22.2188 7.875ZM22.5 14.3438C22.5 14.499 22.374 14.625 22.2188 14.625H15.4688C15.0031 14.625 14.625 15.0031 14.625 15.4688V28.9688C14.625 29.124 14.499 29.25 14.3438 29.25H9.84375C9.68852 29.25 9.5625 29.124 9.5625 28.9688V15.4688C9.5625 15.0031 9.18443 14.625 8.71875 14.625H1.96875C1.81352 14.625 1.6875 14.499 1.6875 14.3438V9.84375C1.6875 9.68852 1.81352 9.5625 1.96875 9.5625H8.71875C9.18443 9.5625 9.5625 9.18443 9.5625 8.71875V1.96875C9.5625 1.81352 9.68852 1.6875 9.84375 1.6875H14.3438C14.499 1.6875 14.625 1.81352 14.625 1.96875V8.71875C14.625 9.18443 15.0031 9.5625 15.4688 9.5625H22.2188C22.374 9.5625 22.5 9.68852 22.5 9.84375V14.3438Z" fill="white" />
                    </svg>
                </div>

                <div className="flex flex-col lg:max-w-[50%] gap-5">
                    <h1 className="text-[36px] md:text-[72px] text-white font-gambetta font-medium text-center tracking-[-2.4px]">Gallery of Sacred Moments</h1>

                    <p className="text-[#ffffff] italic text-[14px] md:text-[24px] font-light font-switzer text-center">Witness the profound encounter between the human heart and the Divine
                        through our community's spiritual life.
                    </p>
                </div>
            </section>

            <section className=" bg-[#F5F1ED] py-8 md:py-[70px] md:px-[36px] px-6 flex flex-col gap-7">
                <div className="text-center flex flex-col gap-4.5 w-[90%] mx-auto">
                    <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Featured Collections</h2>
                    <p className="text-[12px] md:text-[18px] font-switzer text-[#4A5565] leading-4.75 ">Candid and curated stories of faith captured in sequence.</p>
                    <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 md:gap-10">
                    <GalleryBlock />
                    <GalleryBlock />
                    <GalleryBlock />
                    <GalleryBlock />
                </div>
            </section>

            <section className=" bg-[#8B3A3A] text-center py-8 px-6 md:px-[185px] md:py-[96px] flex flex-col gap-7 md:gap-9">
                <h2 className='text-[#fff] text-[24px] md:text-[48px] font-gambetta leading-6.5 md:leading-[48px] text-center'>
                    Share Moments From Your Lens
                </h2>

                <p className="text-[#fff] font-switzer font-light text-[12px] md:text-[20px] ">
                    The Digital Prayer Chapel is built by the community. Do you have a photo from a recent retreat or
                    workshop that reflects God's grace? Share it with our community gallery.
                </p>

                <div className=" flex flex-col lg:flex-row lg:justify-center gap-6">
                    <Button className=' text-[#8B3A3A] tracking-[2.8px] bg-white  w-full lg:w-fit'>
                        SUBMIT YOUR PHOTO
                    </Button>
                </div>

                <p className='text-white/40 font-[12px] font-gambetta uppercase tracking-[0.6px]'>
                    ALL SUBMISSIONS ARE REVIEWED BY THE MINISTRY TECHNOLOGY TEAM.
                </p>

            </section >

        </div>

    )
}
