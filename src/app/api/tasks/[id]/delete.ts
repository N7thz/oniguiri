import { TaskRepository } from "@/repositories/task.repository"
import { NextResponse } from "next/server"
import { ContextProps } from "./route"

export async function Delete({ params: { id } }: ContextProps) {

    const { deleteTask, findTaskById } = TaskRepository()

    const { error } = await findTaskById(id)

    if (error) {        
        return NextResponse.json({
            message: "Task not exist"
        }, {
            status: 401
        })
    }

    deleteTask(id)

    return NextResponse.json({ message: "Deleted" }, { status: 203 })
}