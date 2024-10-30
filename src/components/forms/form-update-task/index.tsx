import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { SelectUnit } from "@/components/select-unit"
import { Task } from "@prisma/client"
import { Loading } from "./loading"
import { useFormUpdateTaskApi } from "./use-form-update-task-api"
import { useFormUpdateTask } from "./use-form-update-task"

export const FormUpdateTask = ({ id }: { id: string }) => {

    const { isLoading, task } = useFormUpdateTaskApi(id)

    if (!task || isLoading) return <Loading />

    return <Form task={task} />
}

const Form = ({ task }: { task: Task }) => {

    const {
        name,
        quantity,
        obs,
        errors,
        selectValue,
        setSelectValue,
        register,
        handleSubmit,
        updateTask,
    } = useFormUpdateTask(task)

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
                    defaultValue={obs}
                    className="mt-3"
                    {...register("obs")}
                />
            </Label>
        </form>
    )
}