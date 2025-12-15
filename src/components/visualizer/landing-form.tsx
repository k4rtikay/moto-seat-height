"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, Resolver, useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
    height: z
        .coerce.number()
        .min(120, "Height must be at least 120 cm.")
        .max(250, "Height must be at most 250 cm."),
    inseam: z
        .coerce.number()
        .min(50, "Inseam length must be at least 50 cm.")
        .max(120, "Inseam length must be at most 120 cm."),
})

export function MeasurementsForm() {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as Resolver<z.infer<typeof formSchema>>,
        defaultValues: {
            height: 175,
            inseam: 80,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log("measurements submitted:", data)
        const params = new URLSearchParams({
            height: data.height.toString(),
            inseam: data.inseam.toString(),
        })

        router.push(`/visualizer?${params.toString()}`)

        form.reset()
    }

    return (
        <Card className="w-full sm:max-w-md">
            <CardHeader>
                <CardTitle>Enter Your Measurements</CardTitle>
                <CardDescription>
                    Provide your inseam length and height to visualize seat heights.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="height"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-height">
                                        Height
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-height"
                                        type="number"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your height"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="inseam"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-inseam">
                                        Inseam Length
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-inseam"
                                        type="number"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your inseam length"
                                        autoComplete="off"
                                    />
                                    <FieldDescription>
                                        Measured from crotch to the bottom of your leg.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-demo">
                        Start Visualizer
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}
