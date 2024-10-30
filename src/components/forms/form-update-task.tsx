import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useUser } from "@/providers/user-provider"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { api, useHttp } from "@/http"
import { toast } from "@/lib/toast"
import { SelectUnit } from "@/components/select-unit"
import { useEffect, useState } from "react"
import { Task, Unit } from "@prisma/client"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Item } from "@/@types"
import { FormCreateTaskType as FormUpdateTaskType } from "@/@types/forms-type"
import {
    FormCreateTaskSchema as FormUpdateTaskSchema
} from "@/schemas/form-create-task-schema"
import { invalidateQuery } from "@/functions/invalidate-query"

export const FormUpdateTask = ({ item: { id } }: { item: Item }) => {

    const http = useHttp()
    const queryClient = useQueryClient()

    const { data: task, isLoading } = useQuery({
        queryKey: ["find-task-by-id", id],
        queryFn: async () => {

            const response = await api.get<Task>(`/tasks/${id}`)

            return response.data
        }
    })

    console.log(task)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormUpdateTaskType>({
        resolver: zodResolver(FormUpdateTaskSchema),
        defaultValues: {
            name: task?.name,
            obs: task?.obs ?? undefined,
            quantity: task?.quantity,
            unit: task?.unit
        }
    })

    const [selectValue, setSelectValue] = useState<string>(task?.unit ?? "UN")

    useEffect(() => {
        setValue("unit", selectValue as Unit)
    }, [selectValue])

    if (!task || isLoading) return

    const { name, obs, quantity, unit } = task

    function updateTask({ name, quantity, obs, unit }: FormUpdateTaskType) {

        console.log({ name, quantity, obs, unit })

        http
            .updateTask({ id, name, quantity, unit, obs })
            .then(res => {
                console.log(res)

                toast({
                    title: "Item criado com sucesso.",
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
                    title: "Erro ao criar item.",
                    variant: "error"
                })
            })
    }

    return (
        <form
            id="form-update-task"
            onSubmit={handleSubmit(updateTask)}
            className="flex flex-col gap-6"
        >
            <Label>
                Nome:
                <Input
                    defaultValue={name}
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
                    defaultValue={quantity}
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
                    defaultValue={obs ?? undefined}
                    className="mt-3"
                    {...register("obs")}
                />
            </Label>
        </form>
    )
}
