import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { http } from "@/http"
import { toast } from "@/lib/toast"
import { useEffect, useState } from "react"
import { Task, Unit } from "@prisma/client"
import { useQueryClient } from "@tanstack/react-query"
import { FormCreateTaskType as FormUpdateTaskType } from "@/@types/forms-type"
import {
    FormCreateTaskSchema as FormUpdateTaskSchema
} from "@/schemas/form-create-task-schema"
import { useApplication } from "@/providers/user-provider"

interface FormProps {
    task: Task
    setIsOpen: (open: boolean) => void
}

export function useFormUpdateTask({ setIsOpen, task }: FormProps) {


    const { invalidateQuery } = useApplication()

    const { id, name, quantity, unit } = task

    const obs = task.obs ?? undefined

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormUpdateTaskType>({
        resolver: zodResolver(FormUpdateTaskSchema),
        mode: "onChange",
        defaultValues: {
            name,
            obs: obs,
            //@ts-ignore
            quantity: quantity.toString(),
            unit: unit
        }
    })

    const [selectValue, setSelectValue] = useState<string>(unit)

    useEffect(() => {
        setValue("unit", selectValue as Unit)
    }, [selectValue])

    function updateTask({ name, quantity, obs, unit }: FormUpdateTaskType) {

        http()
            .updateTask({ id, name, quantity, unit, obs })
            .then(() => {

                toast({
                    title: "Item atualizado com sucesso.",
                    variant: "sucess"
                })

                setTimeout(invalidateQuery, 1000)
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao atualizar item.",
                    variant: "error"
                })
            })
            .finally(() => setIsOpen(false))
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