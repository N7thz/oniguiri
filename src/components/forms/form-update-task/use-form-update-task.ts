import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useHttp } from "@/http"
import { toast } from "@/lib/toast"
import { useEffect, useState } from "react"
import { Task, Unit } from "@prisma/client"
import { useQueryClient } from "@tanstack/react-query"
import { FormCreateTaskType as FormUpdateTaskType } from "@/@types/forms-type"
import {
    FormCreateTaskSchema as FormUpdateTaskSchema
} from "@/schemas/form-create-task-schema"
import { invalidateQuery } from "@/functions/invalidate-query"

export function useFormUpdateTask(task: Task) {

    const http = useHttp()
    const queryClient = useQueryClient()

    const { id, name, quantity, unit } = task

    const obs = task.obs ?? undefined

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormUpdateTaskType>({
        resolver: zodResolver(FormUpdateTaskSchema),
        defaultValues: {
            name,
            obs: obs,
            quantity: quantity,
            unit: unit
        }
    })

    const [selectValue, setSelectValue] = useState<string>(unit)

    useEffect(() => {
        setValue("unit", selectValue as Unit)
    }, [selectValue])

    function updateTask({ name, quantity, obs, unit }: FormUpdateTaskType) {

        console.log({ name, quantity, obs, unit })

        http
            .updateTask({ id, name, quantity, unit, obs })
            .then(res => {
                console.log(res)

                toast({
                    title: "Item atualizado com sucesso.",
                    variant: "sucess"
                })

                setTimeout(() => invalidateQuery({
                    queryClient,
                    queryKey: ["find-task-by-id", id]
                }), 2000)
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao atualizar item.",
                    variant: "error"
                })
            })
    }

    return {
        name,
        quantity,
        obs,
        errors,
        selectValue,
        setSelectValue,
        register,
        handleSubmit,
        updateTask,
    }
}