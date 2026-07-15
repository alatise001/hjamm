"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CirclePlay, Clock, Clock1, Dot, MessageSquare } from "lucide-react";
import Image from "next/image";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldSet,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
} from "@/components/ui/select"

import { days, months, years } from "@/lib/date"
import LiveEvents from "@/components/liveEvents"
import MinistriesBlock from "@/components/ministriesBlock"
import NewsBlock from "@/components/newsBlock"
import PetitionForm from "@/components/petitoionForm"
import MissionBlock from "@/components/missionBlock"
import ReadBlock from "@/components/readBlock"

const formSchema = z.object({

    day: z
        .string({
            required_error: "Please select a day",
        })
        .min(1, "Please select a day"),

    month: z
        .string({
            required_error: "Please select a month",
        })
        .min(1, "Please select a month"),
    year: z
        .string({
            required_error: "Please select a year",
        })
        .min(1, "Please select a year"),

})
export default function DateSelect() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            day: "",
            month: "",
            year: "",
        },
    })


    return (
        <form className="ml-auto lg:ml-0">
            <div className="flex gap-1">
                <Field className="w-fit md:w-[88px] h-3.75 md:h-[28px]">
                    <Select defaultValue=""  >
                        <SelectTrigger id="checkout-exp-month-ts6" className='border-gray-300 rounded-md pr-0 pl-0 pt-0 pb-0 py-0.5 px-1.5 bg-[#F8F8F8] text-gray-900 text-[10px] font-switzer'>
                            <SelectValue placeholder="DD" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    days.map((day) => (
                                        <SelectItem className=" font-switzer text-[10px] text-gray-900" key={day} value={day}>
                                            {day}
                                        </SelectItem>
                                    ))
                                }

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>

                <Field className="w-fit md:w-[88px] h-3.75 md:h-[28px]">
                    <Select defaultValue=""  >
                        <SelectTrigger id="checkout-exp-month-ts6" className='border-gray-300 rounded-md pr-0 pl-0 pt-0 pb-0 py-0.5 px-1.5 bg-[#F8F8F8] text-gray-900 text-[10px] font-switzer'>
                            <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    months.map((month) => (
                                        <SelectItem className=" font-switzer text-[10px] text-gray-900" key={month} value={month}>
                                            {month}
                                        </SelectItem>
                                    ))
                                }

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>

                <Field className="w-fit md:w-[88px] h-3.75 md:h-[28px]">
                    <Select defaultValue=""  >
                        <SelectTrigger id="checkout-exp-month-ts6" className='border-gray-300 rounded-md pr-0 pl-0 pt-0 pb-0 py-0.5 px-1.5 bg-[#F8F8F8] text-gray-900 text-[10px] font-switzer'>
                            <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    years.map((year) => (
                                        <SelectItem className=" font-switzer text-[10px] text-gray-900" key={year} value={year}>
                                            {year}
                                        </SelectItem>
                                    ))
                                }

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
            </div>
        </form>
    )
}
