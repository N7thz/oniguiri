import { UpdateTaskResquest } from "@/@types"
import { TaskRepository } from "@/repositories/task.repository/@index"
import { NextRequest, NextResponse } from "next/server"
import { ContextProps } from "@/@types"

export async function Put(request: NextRequest, context: ContextProps) {

    const { updateTask, findTaskById } = TaskRepository()

    const { params: { id } } = context

    const { error } = await findTaskById(id)

    if (error) {
        return NextResponse.json({
            message: "Task not exist"
        }, {
            status: 401
        })
    }

    const {
        name, quantity, unit, obs
    }: UpdateTaskResquest = await request.json()

    const { task } = await updateTask({
        id,
        data: {
            name,
            quantity,
            unit,
            obs: obs ?? null
        }
    })

    return NextResponse.json(task)
} 