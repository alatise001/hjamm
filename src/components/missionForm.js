"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldLegend
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

const spokenLanguages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Italian", value: "it" },
    { label: "Chinese", value: "zh" },
    { label: "Japanese", value: "ja" },
]

const formSchema = z.object({
    name: z
        .string()
        .min(5, "Name must be at least 5 characters.")
        .max(32, "Name must be at most 32 characters."),

    email: z
        .string()
        .email("Please enter a valid email address."),

    phone: z
        .string()
        .min(10, "Phone number must be at least 10 characters.")
        .max(15, "Phone number must be at most 15 characters."),

    ministry: z
        .string()
        .min(1, "Please select a ministry.")
        .refine((val) => val !== "auto", {
            message:
                "Auto-detection is not allowed. Please select a specific ministry.",
        }),

})


export default function MissionForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            ministry: "",
        },
    })

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="flex flex-col gap-8">


            <form id="mission-form" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="mission-form-name">
                                    Your Name
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="mission-form-name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="John Doe"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="mission-form-email">
                                    Email Address
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="mission-form-email"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="john@example.com"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="phone"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="mission-form-phone">
                                    Phone Number
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="mission-form-phone"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="123-456-7890"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />


                    <Controller
                        name="ministry"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                className=""
                                // orientation="responsive"
                                data-invalid={fieldState.invalid}
                            >
                                <FieldLabel htmlFor="mission-form-ministry">
                                    Ministry
                                </FieldLabel>
                                <Select
                                    name={field.name}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    className=""
                                >
                                    <SelectTrigger
                                        id="form-rhf-select-language"
                                        aria-invalid={fieldState.invalid}
                                        className=""
                                    >
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="item-aligned">
                                        <SelectItem value="auto">Auto</SelectItem>
                                        <SelectSeparator />
                                        {spokenLanguages.map((language) => (
                                            <SelectItem key={language.value} value={language.value}>
                                                {language.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                        )}
                    />

                </FieldGroup>
            </form>



            <Button type="submit" form="prayer-request" className="w-full tracking-[2px] ">
                SEND APPLICATION

                <ArrowRight className=" ml-2.5 h-4 w-4" />
            </Button>

        </div>


    )
}
