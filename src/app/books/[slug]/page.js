import React from 'react'
import BooksBlock from '@/components/booksBlock'
import { Button } from '@/components/ui/button'
import UpcomingEventsBlock from '@/components/upcomingEventsBlock'
import { ArrowLeft, ArrowRight, Calendar, Calendar1, CircleCheck, Clock, Clock1, Cross, DollarSign, HandCoins, MapPin, Star, UsersRound } from 'lucide-react'
import Image from 'next/image'
import { events, ministries, announcements, books } from "../../../data"

export default function EventDetails() {
    return (
        <div className='pt-[100px] lg:pt-[163px]'>
            <section className='flex gap-4 px-6 border-b-[#00000026] border-b md:px-12 py-4 font-medium text-[10px] lg:text-[14px]  uppercase font-switzer'>
                <ArrowLeft className='h-3.5 w-3.5 text-[#ADB5BD]' />
                <p className='text-[#ADB5BD] '>
                    Books
                </p>

                <p className='text-[#ADB5BD] '>
                    /
                </p>

                <p className='text-[#8B3A3A]'>
                    War Against Python & Snake Spirits
                </p>

            </section>



            <section className=" bg-[#fff] py-8 md:py-[70px] md:px-[36px] px-6 flex flex-col lg:flex-row lg:gap-16 lg:justify-between gap-7">
                <Image
                    className="h-full w-full object-contain self-center md:h-[441px] md:w-[329px]"
                    src="/country.png"
                    alt="Vercel logomark"
                    width={1000}
                    height={1000}
                    objectFit=""
                />

                <div className=' flex flex-col md:w-full gap-6 md:justify-between'>
                    <div className='flex flex-col items-center text-center gap-2 lg:w-[50%] md:gap-1 md:gap-4 md:items-start '>
                        <div className='flex py-1 px-2 w-fit h-fit bg-[#D4AF37] justify-center rounded-[2px]'>
                            <p className='uppercase text-[8px] md:text-[10px] font-switzer font-bold tracking-[2px] text-white'>SAINTS COLLECTION</p>
                        </div>

                        <p className='text-[#2C2C2C] text-[32px] md:text-[60px] md:text-left font-medium tracking-[-0.6px] font-gambetta'>
                            War Against Python & Snake Spirits
                        </p>

                        <div className='flex gap-2 md:gap-3 '>
                            <p className='text-[#6B7280] italic text-[18px] md:text-[24px] tracking-[-0.24px] font-gambetta'>
                                By Dr. Uwakwe Chukwu
                            </p>
                        </div>

                        <div className='flex flex-col gap-1 md:flex-row md:items-center md:gap-2'>
                            <div className=' flex gap-2'>
                                {
                                    [1, 2, 3, 4, 5].map((_, index) => (
                                        <Star key={index} className='h-3 w-3 fill-[#D4AF37] md:h-4 md:w-4 text-[#D4AF37] inline-block' />
                                    ))
                                }

                            </div>

                            <p className='text-[#8B3A3A] text-[11px] md:text-[14px] font-gambetta'>(61 Reviews)</p>
                            <p className='text-[#D1D5DB] hidden md:block text-[11px] md:text-[14px] font-gambetta'>|</p>

                            <p className='text-[#16A34A]  text-[10px] md:text-[12px] uppercase font-switzer tracking-[1.2px] font-bold'>IN STOCK</p>
                        </div>

                        <p className='text-[#8B3A3A] hidden md:block text-[24px] md:text-[30px] font-switzer font-semibold'>
                            NGN 33,979.00
                        </p>
                    </div>

                    <div className='flex flex-col gap-8 p-10 rounded-[2px] bg-[#F8F5F2]'>
                        <div className='pb-8 flex flex-col gap-1'>
                            <p className='text-[#9CA3AF] font-switzer text-[10px] md:tet-[12px] tracking-[2.4px] font-bold'>
                                PURCHASE PRICE
                            </p>
                            <p className='text-[#8B3A3A] text-[24px] md:text-[30px] font-switzer font-semibold'>
                                NGN 33,979.00
                            </p>
                            <p className='text-[#16A34A] text-[10px] md:text-[12px] uppercase font-switzer tracking-[1.2px] font-bold inline-flex gap-1 items-center'>
                                <CircleCheck className='h-3 w-3 md:h-4 md:w-4' />
                                IN STOCK & READY TO SHIP</p>
                        </div>

                        <Button className='rounded-[2px] text-white w-full md:w-fit'>
                            <HandCoins />
                            BUY ON AMAZON
                        </Button>

                        <div className=' flex flex-col gap-4'>
                            <p className='text-[#9CA3AF] mb-2 font-switzer text-[8px] uppercase md:tet-[10px] tracking-[2.5px] font-bold'>
                                SPECIFICATIONS
                            </p>

                            <div className='flex flex-col gap-4'>
                                <div className=' flex items-center justify-between '>
                                    <p className='font-gambetta text-[12px] text-[#9CA3AF] md:text-[14px]'>ISBN</p>
                                    <p className=' font-switzer text-[12px] text-[#2C2C2C] font-semibold md:text-[14px]'> 172-153-0371</p>
                                </div>
                                <div className=' flex items-center justify-between '>
                                    <p className='font-gambetta text-[12px] text-[#9CA3AF] md:text-[14px]'>Pages</p>
                                    <p className=' font-switzer text-[12px] text-[#2C2C2C] font-semibold md:text-[14px]'>309 pages </p>
                                </div>
                                <div className=' flex items-center justify-between '>
                                    <p className='font-gambetta text-[12px] text-[#9CA3AF] md:text-[14px]'>Language</p>
                                    <p className=' font-switzer text-[12px] text-[#2C2C2C] font-semibold md:text-[14px]'>English</p>
                                </div>
                                <div className=' flex items-center justify-between '>
                                    <p className='font-gambetta text-[12px] text-[#9CA3AF] md:text-[14px]'>Published</p>
                                    <p className=' font-switzer text-[12px] text-[#2C2C2C] font-semibold md:text-[14px]'> 2018 (Classic Edition)</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className="bg-white py-8 px-6 md:px-8 md:items-start md:py-16 flex flex-col gap-7">
                <div className="text-center md:text-left flex flex-col md:items-start gap-2 mx-auto md:mx-[0]" >
                    <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">About this Book</h2>
                    <div className="h-px bg-[#D4AF37] w-24 my-3 flex self-start mx-auto md:mx-[0] "></div>
                </div>

                <p className='font-gambetta text-[#4B5563] text-[12px] md:text-[18px] '>
                    The first Biblical prophecy in Genesis 3:15 simply reveals a salient truth: There is a spiritual hostility and conflict between the righteous and the devil, the ancient serpent. God wants us to engage the ancient serpent in a battle. He wants us to use the authority He has given to us to smash the serpent’s head! Unfortunately, so many people of God are bound by demonic forces but do not know how to be free. The proliferation of python and snake spirits in this end time has resulted in an epidemic of people living in spiritual bondage. These python and snake spirits have an aggressive appetite for destinies to swallow!
                    War Against Python And Snake Spirits is an attempt to address this problem using two powerful strategies: knowledge of how the enemy works and fighting them with acidic warfare prayers. Praying with knowledge of how the enemy operates gives a believer superior advantage over the enemy. As you pray with this book, you will see a great release of God’s power as it blends the power of His Word with these two powerful strategies. The prayers in this book is a do-it-yourself kind of prayer, designed for you to see results. They are written to be simple, yet powerful. My dear, you can’t wait to hunt down those python and snake spirits coiling and squeezing your life and family. Enough of that intimidation! Pick this Book and let’s go-a-hunting!
                </p>


            </section>


            <section className="bg-white w-full py-8 px-6 md:px-11.5 flex flex-col gap-6 md:gap-12.5 ">
                <div className="text-center flex flex-col gap-3">
                    <p className='text-[#D4AF37] text-left font-gambetta text-[12px] font-bold uppercase tracking-[3.5px] leading-20px]'>FURTHER EXPLORATION</p>
                    <div className='flex items-center justify-between gap-5 md:gap-12.5'>
                        <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Explore Similar Spiritual Works</h2>
                    </div>
                </div>

                <div className="flex gap-4 lg:gap-10.5 overflow-x-auto scrollbar-none w-full">

                    {
                        books.map((book, index) => (
                            <BooksBlock key={index} title={book.title} author={book.author} price={book.price} img={book.img} link={book.link} />
                        ))
                    }
                </div>
            </section>



        </div >
    )
}
