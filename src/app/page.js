"use client"

import * as React from "react"
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CirclePlay, MessageSquare } from "lucide-react";
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
      <section className="pt-36 pb-8 px-9.25 h-screen bg-[url('/heroBg.jpg')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/50">

        <div className="flex items-center gap-3">
          <div className="h-0.5 w-12 bg-[#D4AF37] rounded-2xl" ></div>
          <p className="text-[#D4AF37] text-[12px] font-gambetta font-bold tracking-[2.4px]">WELCOME TO HJAMM</p>
          <div className="h-0.5 w-12 bg-[#D4AF37] rounded-2xl" ></div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[36px] text-white font-gambetta font-medium text-center tracking-[-2.4px]">A Place of Prayer, Healing, and Encounter with Christ.</h1>

          <p className="text-[#FFFFFFE5] text-[14px] font-light font-switzer text-center">Our Message to you is that God Loves you and wants the best for you in life. We the members of Hearts of Jesus and Mary Ministries are consistently praying for you.</p>

          <Button size="lg" >
            Join Prayer
            <ChevronRight />
          </Button>

          <Button size='lg' variant="outline">
            Submit Prayer Request
            <ChevronRight />
          </Button>
        </div>

        <Image
          className="mt-auto"
          src="/mouse.svg"
          alt="Vercel logomark"
          width={25}
          height={40}
        />
      </section>

      <section className="flex flex-col gap-4.5 py-8 px-6">
        <div className="h-[362] bg-[#8B3A3A] rounded-sm">
          <Image
            className=""
            src="/logo_HJM.png"
            alt="Vercel logomark"
            width={359}
            height={362}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[#D4AF37] text-[10px] uppercase font-gambetta leading-5 font-bold tracking-[3.5px]">THE CITY OF JESUS & MARY</h3>
          <h2 className="text-[#2C2C2C] text-[24px] font-gambetta leading-[26.4px]">Welcome to the Hearts of Jesus & Mary Ministries</h2>

          <p className="text-[#6B7280] text-[12px] mt-3 font-switzer">
            We are living in perilous times where so many children of God are held captive by the forces of darkness. There was a need to raise men and women of prayer, who can stand against them and shake the shackles off. This is our vision: to raise fire brand Christians.
            <br />
            <br />
            Under his guidance, HJAMM ensures every prayer session and teaching remains faithful to the Magisterium and the Sacred Tradition of the Catholic Church.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F1ED] py-8 px-6 flex flex-col gap-4.5">

        <div className="flex gap-2 items-center py-1">
          <p className="text-[#8B3A3A] leading-4 font-bold tracking-[3.5px] text-[20px] font-switzer pb-1">
            •
          </p>
          <h3 className="text-[#8B3A3A] text-[10px] uppercase font-switzer leading-4 font-bold tracking-[3.5px]">Liturgical Schedule</h3>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-[#2C2C2C] text-[24px] font-gambetta leading-[26.4px]">Live Events</h2>
          <DateSelect />

        </div >

        <p className="text-[14px] font-switzer font-light text-[#6A7282] capitalize ">
          All times listed in Eastern Standard Time (EST)
        </p>


        <div className="flex flex-col gap-8">
          <LiveEvents when="live" />
          <LiveEvents when="upcoming" />
        </div>

      </section >

      <section className="bg-white w-full py-8 px-6 flex flex-col gap-5 ">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl">Our Ministries</h2>
          <div className="h-0.5 bg-[#D4AF37] w-24 mx-auto"></div>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-none w-full">
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
          <MinistriesBlock />
        </div>
      </section>

      <section className=" bg-[#F5F1ED] py-8 px-6 flex flex-col gap-7">
        <div className="text-center flex flex-col gap-4.5 w-[90%] mx-auto">
          <div className="flex items-center justify-center gap-3">
            <CirclePlay className="text-[#8B3A3A] h-6 w-6" />
            <p className=" text-[12px] font-bold text-[#8B3A3A] uppercase tracking-[3.65px] font-switzer">
              News & Updates
            </p>
          </div>
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl">Ministry Updates & Announcements</h2>
          <p className="text-[12px] font-switzer text-[#4A5565] leading-4.75 ">Stay connected with the latest liturgical events, community growth, and upcoming gatherings within our chapel.</p>
          <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
        </div>

        <div className="flex flex-col gap-6">
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
        </div>

        <Button className='my-3'>
          See All Updates
          <ArrowRight />
        </Button>

      </section>


      <section className="bg-white py-8 px-6 flex flex-col gap-7">
        <div className="text-center flex flex-col gap-4.5 w-[90%] mx-auto">
          <div className="flex items-center justify-center gap-3">
            <MessageSquare className="text-[#8B3A3A] h-6 w-6" />
            <p className=" text-[12px] font-bold text-[#8B3A3A] uppercase tracking-[3.65px] font-switzer">
              Sacred Petitions
            </p>
          </div>
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl">Submit a Prayer Request</h2>
          <p className="text-[12px] font-switzer text-[#4A5565] leading-4.75 ">Your intentions will be placed at the foot of the altar and remembered in our daily intercessory sessions.</p>
          <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
        </div>

        <div className="py-6.5 px-5 bg-[#F5F1ED59] rounded-[16px]">

          <PetitionForm />

        </div>
      </section>

      <section className="bg-[#F5F1ED] py-8 px-6 pt-14.5 flex flex-col gap-7">
        <MissionBlock />

      </section>

      <section className="bg-[#E8E3DD] py-8 px-6 flex flex-col gap-7">
        <div className="text-center flex flex-col gap-3.5 w-[90%] mx-auto">
          <h2 className="text-[#2C2C2C] font-gambetta text-2xl">Sacred Readings & Spiritual Growth</h2>
          <div className="h-px bg-[#D4AF37] w-24 my-3 mx-auto"></div>
        </div>

        <div className="flex flex-col gap-6">
          <ReadBlock />
          <ReadBlock />
          <ReadBlock />

          <Button>
            VISIT THE BOOKSTORE
            <ArrowRight />
          </Button>

        </div>
      </section>

      <section className=" bg-[url('/donationBg.png')] text-center py-8 px-6 flex flex-col gap-7">
        <h2 className='text-white text-[24px] font-gambetta leading-6.5 text-center'>
          Help Us Keep the Sanctuary Light Burning
        </h2>

        <p className="text-[#FFFFFFCC] font-switzer font-light text-[12px] ">
          As a non-profit ministry, we rely on the generous stewardship of our community to maintain this chapel, support our live streams, and expand our mission of healing and encounter.
        </p>

        <div className=" flex flex-col gap-6">
          <Button className='bg-white text-[#8B3A3A]  w-full'>
            MAKE A ONE TIME GIFT
            <ArrowRight />
          </Button>

          <Button variant="outline" className=' w-full'>
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