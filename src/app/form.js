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
    title: z
        .string()
        .min(5, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    description: z
        .string()
        .min(20, "Description must be at least 20 characters.")
        .max(100, "Description must be at most 100 characters."),

    responses: z.boolean(),
    about: z
        .string()
        .min(10, "Please provide at least 10 characters.")
        .max(200, "Please keep it under 200 characters."),
})


export function Form() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            responses: false,
            about: "",
        },
    })

    function onSubmit(data) {

    }

    return (

        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-rhf-demo-title">
                                Bug Title
                            </FieldLabel>
                            <Input
                                {...field}
                                id="form-rhf-demo-title"
                                aria-invalid={fieldState.invalid}
                                placeholder="Login button not working on mobile"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />


                <Controller
                    name="responses"
                    control={form.control}
                    render={({ field, fieldState }) => (

                        <Field
                            orientation="horizontal"
                            data-invalid={fieldState.invalid}
                        >
                            <Checkbox
                                id={`form-rhf-checkbox`}
                                name={field.name}
                                aria-invalid={fieldState.invalid}
                                checked={field.value}
                                onCheckedChange={field.onChange}


                            />
                            <FieldLabel
                                htmlFor={`form-rhf-checkbox`}
                                className="font-normal"
                            >
                                Receive responses to my bug report
                            </FieldLabel>
                        </Field>
                    )}
                />


                <Controller
                    name="about"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-rhf-textarea-about">
                                More about you
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="form-rhf-textarea-about"
                                aria-invalid={fieldState.invalid}
                                placeholder="I'm a software engineer..."
                                className="min-h-[156px]"
                            />
                        </Field>
                    )}
                />

            </FieldGroup>
        </form>


    )
}
