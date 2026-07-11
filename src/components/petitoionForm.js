"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

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
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
    name: z
        .string()
        .max(32, "Name must be at most 32 characters.")
        .optional(),
    email: z
        .string()
        .optional(),
    intention: z
        .string()
        .min(20, "Prayer Request must be at least 20 characters.")
        .max(100, "Prayer Request must be at most 100 characters.")
        .nonoptional(),

    urgent: z.boolean()
        .optional()
    ,

})


export default function PetitionForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            intention: "",
            urgent: false,
        },
    })

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="flex flex-col gap-8">


            <form id="prayer-request" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="prayer-request-name">
                                    Your Name
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="prayer-request-name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Full Name (or Anonymous)"
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
                                <FieldLabel htmlFor="prayer-request-email">
                                    Email Address
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="prayer-request-email"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="For spiritual encouragement (Optional)"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="intention"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="prayer-request-intention">
                                    Your Intention
                                </FieldLabel>
                                <Textarea
                                    {...field}
                                    id="prayer-request-intention"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Share your prayer request with us..."
                                    className="min-h-39"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />


                    <Controller
                        name="urgent"
                        control={form.control}
                        render={({ field, fieldState }) => (

                            <Field
                                orientation="horizontal"
                                data-invalid={fieldState.invalid}
                            >
                                <Checkbox
                                    id={`prayer-request-urgent`}
                                    name={field.name}
                                    aria-invalid={fieldState.invalid}
                                    checked={field.value}
                                    onCheckedChange={field.onChange}


                                />
                                <FieldLabel
                                    htmlFor={`prayer-request-urgent`}
                                    className="font-normal"
                                >
                                    This is an urgent request for the Intercessory Ministry
                                </FieldLabel>
                            </Field>
                        )}
                    />

                </FieldGroup>
            </form>



            <Button type="submit" form="prayer-request" className="w-full tracking-[2px] ">
                SEND TO THE ALTAR
            </Button>

        </div>


    )
}
