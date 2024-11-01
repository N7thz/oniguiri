import { TaskRepository } from "@/repositories/task.repository/@index"
import { NextResponse } from "next/server"
import { ContextProps } from "@/@types"

export async function Delete({ params: { id } }: ContextProps) {

    const { deleteTask, findTaskById } = TaskRepository()

    const { error } = await findTaskById(id)

    if (error) {
        return NextResponse.json({
            message: "Task not exist"
        }, {
            status: 400
        })
    }

    deleteTask(id)

    return NextResponse.json("no Body")
}