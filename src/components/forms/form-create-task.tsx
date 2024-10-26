"use client"

import { FormCreateTaskType } from "@/@types/forms-type"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormCreateTaskSchema } from "@/schemas/form-create-task-schema"
import { cn } from "@/lib/utils"
import { useHttp } from "@/http"
import { useSession } from "next-auth/react"
import { toast } from "@/lib/toast"
import { SelectUnit } from "@/components/select-unit"
import { useEffect, useState } from "react"
import { Unit } from "@prisma/client"

interface FormCreateTaskProps {
    setIsOpen: (open: boolean) => void
}

export const FormCreateTask = ({ setIsOpen }: FormCreateTaskProps) => {

    const [selectValue, setSelectValue] = useState<string>("UN")

    const { data } = useSession()
    const http = useHttp()

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

        if (!data || !data.user || !data.user.email || !data.user.image) return

        const email = data.user.email
        const imageUrl = data.user.image

        console.log(name, quantity, obs, unit)

        http
            .createTask({ email, name, quantity, obs, unit, imageUrl })
            .then(res => {
                console.log(res)

                toast({
                    title: "Item criado com sucesso.",
                    variant: "sucess"
                })
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
