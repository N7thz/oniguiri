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

interface FormCreateTaskProps {
    setIsOpen: (open: boolean) => void
}

export const FormCreateTask = ({ setIsOpen }: FormCreateTaskProps) => {

    const { data } = useSession()
    const http = useHttp()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormCreateTaskType>({
        resolver: zodResolver(FormCreateTaskSchema)
    })

    function createTask({ name, quantity, obs }: FormCreateTaskType) {

        if (!data || !data.user || !data.user.email) return

        const email = data.user.email

        http
            .createTask({ email, name, quantity, obs })
            .then(res => {
                console.log(res)

                setIsOpen(false)

                toast({
                    title: "Tópico criado com sucesso.",
                    variant: "sucess"
                })
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao criar tópico.",
                    variant: "error"
                })
            })
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
