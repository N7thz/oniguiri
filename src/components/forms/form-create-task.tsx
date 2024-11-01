"use client"

import { FormCreateTaskType } from "@/@types/forms-type"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useUser } from "@/providers/user-provider"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormCreateTaskSchema } from "@/schemas/form-create-task-schema"
import { cn } from "@/lib/utils"
import { useHttp } from "@/http"
import { toast } from "@/lib/toast"
import { SelectUnit } from "@/components/select-unit"
import { useEffect, useState } from "react"
import { Unit } from "@prisma/client"
import { useQueryClient } from "@tanstack/react-query"

interface FormCreateTaskProps {
    setIsOpen: (open: boolean) => void
}

export const FormCreateTask = ({ setIsOpen }: FormCreateTaskProps) => {

    const [selectValue, setSelectValue] = useState<string>("UN")

    const { user: { email, image, name: userName } } = useUser()
    const http = useHttp()
    const { invalidateQuery } = useUser()

    useEffect(() => {
        setValue("unit", selectValue as Unit)
    }, [selectValue])

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormCreateTaskType>({
        resolver: zodResolver(FormCreateTaskSchema),
    })

    function createTask({ name, quantity, obs, unit }: FormCreateTaskType) {

        http
            .createTask({ email, name, quantity, obs, unit, image, userName })
            .then(res => {

                console.log(res.data)

                toast({
                    title: "Item criado com sucesso.",
                    variant: "sucess"
                })

                setTimeout(invalidateQuery, 1000)
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao criar item.",
                    variant: "error"
                })
            })
            .finally(() => setIsOpen(false))
    }

    return (
        <form
            id="form-create-task"
            onSubmit={handleSubmit(createTask)}
            className="flex flex-col gap-6"
        >
            <Label>
                Nome:
                <Input
                    className={cn(
                        "my-4",
                        errors.name && "border-2 border-destructive"
                    )}
                    {...register("name")}
                />
                {
                    errors.name &&
                    <span className="text-destructive w-full pl-2 text-base">
                        {errors.name.message}
                    </span>
                }
            </Label>
            <Label>
                Quantidade:
                <Input
                    type="number"
                    defaultValue={1}
                    className={cn(
                        "my-4",
                        errors.quantity && "border-2 border-destructive"
                    )}
                    {...register("quantity")}
                />
                {
                    errors.quantity &&
                    <span className="text-destructive w-full pl-2 text-base">
                        {errors.quantity.message}
                    </span>
                }
            </Label>
            <SelectUnit
                value={selectValue}
                onValueChange={setSelectValue}
            />
            {
                errors.unit &&
                <span className="text-destructive w-full pl-2 text-base">
                    {errors.unit.message}
                </span>
            }
            <Label>
                Observações:
                <Textarea
                    className="mt-3"
                    {...register("obs")}
                />
            </Label>
        </form>
    )
}
