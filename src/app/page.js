"use client"

import * as React from "react"
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CirclePlay, Cross, MessageSquare } from "lucide-react";
import Image from "next/image";
import LiveEvents from "@/components/liveEvents"
import MinistriesBlock from "@/components/ministriesBlock"
import NewsBlock from "@/components/newsBlock"
import PetitionForm from "@/components/petitoionForm"
import MissionBlock from "@/components/missionBlock"
import ReadBlock from "@/components/readBlock"
import DateSelect from "@/components/dateSelect"



export default function Home() {

  return (
    <div className="w-full">
      <section className="pt-36 md:pt-50 pb-8 px-9.25 h-screen bg-[url('/heroBg.jpg')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/50">

        <div className="flex md:hidden items-center gap-3">
          <div className="h-0.5 w-12 bg-[#D4AF37] rounded-2xl" ></div>
          <p className="text-[#D4AF37] text-[12px] font-gambetta font-bold tracking-[2.4px]">WELCOME TO HJAMM</p>
          <div className="h-0.5 w-12 bg-[#D4AF37] rounded-2xl" ></div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* <Cross className="text-white h-[36px] w-[36px]" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
            <path d="M22.2188 7.875H16.3125V1.96875C16.3125 0.882167 15.4303 0 14.3438 0H9.84375C8.75717 0 7.875 0.882167 7.875 1.96875V7.875H1.96875C0.882167 7.875 0 8.75717 0 9.84375V14.3438C0 15.4303 0.882167 16.3125 1.96875 16.3125H7.875V28.9688C7.875 30.0553 8.75717 30.9375 9.84375 30.9375H14.3438C15.4303 30.9375 16.3125 30.0553 16.3125 28.9688V16.3125H22.2188C23.3053 16.3125 24.1875 15.4303 24.1875 14.3438V9.84375C24.1875 8.75717 23.3053 7.875 22.2188 7.875ZM22.5 14.3438C22.5 14.499 22.374 14.625 22.2188 14.625H15.4688C15.0031 14.625 14.625 15.0031 14.625 15.4688V28.9688C14.625 29.124 14.499 29.25 14.3438 29.25H9.84375C9.68852 29.25 9.5625 29.124 9.5625 28.9688V15.4688C9.5625 15.0031 9.18443 14.625 8.71875 14.625H1.96875C1.81352 14.625 1.6875 14.499 1.6875 14.3438V9.84375C1.6875 9.68852 1.81352 9.5625 1.96875 9.5625H8.71875C9.18443 9.5625 9.5625 9.18443 9.5625 8.71875V1.96875C9.5625 1.81352 9.68852 1.6875 9.84375 1.6875H14.3438C14.499 1.6875 14.625 1.81352 14.625 1.96875V8.71875C14.625 9.18443 15.0031 9.5625 15.4688 9.5625H22.2188C22.374 9.5625 22.5 9.68852 22.5 9.84375V14.3438Z" fill="white" />
          </svg>
        </div>

        <div className="flex flex-col gap-5 md:gap-16 md:max-w-[75%]">
          <h1 className="text-[36px] md:text-[80px] text-white font-gambetta font-medium text-center tracking-[-2.4px] md:tracking-[-1.8px] md:leading-18">A Place of Prayer, Healing, and Encounter with Christ.</h1>

          <p className="text-[#FFFFFFE5] text-[14px] md:[24px] font-light font-switzer text-center tracking-wider leading-[28px]">Our Message to you is that God Loves you and wants the best for you in life. <br className="hidden md:block" /> We the members of Hearts of Jesus and Mary Ministries are consistently praying for you.</p>



          <div className="flex flex-col gap-5 md:flex-row md:gap-4 items-center justify-center">
            <Button size="lg" className='md:w-59.5' >
              Join Prayer
              <ChevronRight className="" />
            </Button>

            <Button size='lg' className='md:w-72.75' variant="outline">
              Submit Prayer Request
              <ChevronRight className="" />
            </Button>
          </div>
        </div>

        <Image
          className="mt-auto"
          src="/mouse.svg"
          alt="Vercel logomark"
          width={25}
          height={40}
        />
      </section>

      <section className="flex flex-col md:flex-row gap-4.5 md:gap-16 py-8 md:py-12 px-6 md:px-11">
        <div className="h-[362] md:h-162.75 md:w-[50%] bg-[#8B3A3A] bg-[url('/countryBg.png')] bg-cont bg-no-repeat bg-center rounded-sm">
          <Image
            className="h-full w-full object-contain"
            src="/country.png"
            alt="Vercel logomark"
            width={1000}
            height={1000}
            objectFit=""
          />
        </div>

        <div className="flex md:w-[50%] flex-col self-center gap-3 md:gap-10">
          <h3 className="text-[#D4AF37] text-[10px] md:text-[14px] uppercase font-gambetta leading-5 font-bold tracking-[3.5px]">THE CITY OF JESUS & MARY</h3>
          <h2 className="text-[#2C2C2C] text-[24px] md:text-[36px] font-gambetta leading-[26.4px]">Welcome to the Hearts of Jesus & Mary Ministries</h2>

          <p className="text-[#6B7280] text-[12px] md:text-[18px] mt-3 md:leading-[29.25px] font-switzer">
            We are living in perilous times where so many children of God are held captive by the forces of darkness. There was a need to raise men and women of prayer, who can stand against them and shake the shackles off. This is our vision: to raise fire brand Christians. <br />
            <br />
            Under his guidance, HJAMM ensures every prayer session and teaching remains faithful to the Magisterium and the Sacred Tradition of the Catholic Church.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F1ED] py-8 md:py-24 px-6 md:px-30.25 flex flex-col gap-4.5 lg:gap-12">

        <div className="flex gap-2 items-center py-1">
          <p className="text-[#8B3A3A] leading-4 font-bold tracking-[3.5px] text-[20px] font-switzer pb-1">
            •
          </p>
          <h3 className="text-[#8B3A3A] text-[10px] uppercase font-switzer leading-4 font-bold tracking-[3.5px]">Liturgical Schedule</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-4">
          <h2 className="text-[#2C2C2C] text-[24px] md:text-[36px] font-gambetta leading-[26.4px]">Live Events</h2>

          <DateSelect />

          <p className="text-[14px] lg:text-right md:text-[16px] col-span-2 lg:col-span-1 font-switzer font-light text-[#6A7282] capitalize ">
            All times listed in Eastern Standard Time (EST)
          </p>
        </div >



        <div className="flex flex-col gap-8">
          <LiveEvents when="live" />
          <LiveEvents when="upcoming" />
        </div>

      </section >

      <section className="bg-white w-full py-8 px-6 md:px-11.5 flex flex-col gap-5 md:gap-12.5 ">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Our Ministries</h2>
          <div className="h-0.5 bg-[#D4AF37] w-24 mx-auto"></div>
        </div>

        <div className="flex gap-4 lg:gap-10.5 overflow-x-auto scrollbar-none w-full">
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
        </div>

        {/* <Button size="sm" className='text-white hidden lg:flex gap-2 self-center'>
          See All Ministries
          <ArrowRight />
        </Button> */}

        <Button className='my-3 md:w-fit self-center gap-2'>
          See All Ministries
          <ArrowRight />
        </Button>
      </section>

      <section className=" bg-[#F5F1ED] py-8 px-6 flex flex-col gap-7">
        <div className="text-center flex flex-col gap-4.5 w-[90%] mx-auto">
          <div className="flex items-center justify-center gap-3">
            <CirclePlay className="text-[#8B3A3A] h-6 w-6" />
            <p className=" text-[12px] font-bold text-[#8B3A3A] uppercase tracking-[3.65px] font-switzer">
              News & Updates
            </p>
          </div>
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Ministry Updates & Announcements</h2>
          <p className="text-[12px] md:text-[18px] font-switzer text-[#4A5565] leading-4.75 ">Stay connected with the latest liturgical events, community growth, and upcoming gatherings within our chapel.</p>
          <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 md:gap-10">
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
        </div>

        <Button className='my-3 md:w-fit self-center gap-2'>
          See All Updates
          <ArrowRight />
        </Button>

      </section>


      <section className="bg-white py-8 px-6 md:px-46.25 lg:w-[60%] lg:mx-auto md:py-24 flex flex-col gap-7">
        <div className="text-center flex flex-col gap-4.5 w-[90%] mx-auto">
          <div className="flex items-center justify-center gap-3">
            <MessageSquare className="text-[#8B3A3A] h-6 w-6" />
            <p className=" text-[12px] font-bold text-[#8B3A3A] uppercase tracking-[3.65px] font-switzer">
              Sacred Petitions
            </p>
          </div>
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Submit a Prayer Request</h2>
          <p className="text-[12px] md:text-[18px] font-switzer text-[#4A5565] leading-4.75 ">Your intentions will be placed at the foot of the altar and remembered in our daily intercessory sessions.</p>
          <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
        </div>

        <div className="py-6.5 px-5 bg-[#F5F1ED59] rounded-[16px]">

          <PetitionForm />

        </div>
      </section>

      <section className="bg-[#F5F1ED] py-8 md:py-24 px-6 md:px-10.5 pt-14.5 flex flex-col gap-7">
        <MissionBlock />

      </section>

      <section className="bg-[#E8E3DD] py-8 px-6 flex flex-col gap-7">
        <div className="text-center flex flex-col gap-3.5 w-[90%] mx-auto">
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[36px] ">Sacred Readings & Spiritual Growth</h2>
          <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 md:gap-10">
          <ReadBlock />
          <ReadBlock />
          <ReadBlock />
          <ReadBlock />
        </div>

        <Button className='my-3 md:w-fit self-center gap-2'>
          VISIT THE BOOKSTORE
          <ArrowRight />
        </Button>


      </section>

      <section className=" bg-[url('/donationBg.png')] text-center py-8 px-6 md:px-[185px] md:py-[96px] flex flex-col gap-7 md:gap-9">
        <h2 className='text-white text-[24px] md:text-[48px] font-gambetta leading-6.5 md:leading-[48px] text-center'>
          Help Us Keep the Sanctuary Light Burning
        </h2>

        <p className="text-[#FFFFFFCC] font-switzer font-light text-[12px] md:text-[20px] ">
          As a non-profit ministry, we rely on the generous stewardship of our community to maintain this chapel, support our live streams, and expand our mission of healing and encounter.
        </p>

        <div className=" flex flex-col lg:flex-row lg:justify-center gap-6">
          <Button className='bg-white text-[#8B3A3A]  w-full lg:w-fit'>
            MAKE A ONE TIME GIFT
            <ArrowRight />
          </Button>

          <Button variant="outline" className=' w-full lg:w-fit'>
            BECOME A MONTHLY SUSTAINER
          </Button>
        </div>

      </section >

    </div >
  );
}


{/* <Image
  className="dark:invert"
  src="/next.svg"
  alt="Next.js logo"
  width={100}
  height={20}
  priority
/> */}

{/* <Image
  className="dark:invert"
  src="/vercel.svg"
  alt="Vercel logomark"
  width={16}
  height={16}
/> */}