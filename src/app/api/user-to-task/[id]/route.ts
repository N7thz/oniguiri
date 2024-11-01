import { ContextProps } from "@/@types"
import { NextRequest, NextResponse } from "next/server"
import { Post } from "./post"
import { TaskRepository } from "@/repositories/task.repository/@index"

export async function POST(request: NextRequest, context: ContextProps) {
    return Post(request, context)
}

export async function PUT(_: NextRequest, context: ContextProps) {

    const {  removeUserBuyerTask, findTaskById } = TaskRepository()

    const { params: { id } } = context

    const { error } = await findTaskById(id)

    if (error) {
        return NextResponse.json({
            message: "Task not exist"
        }, {
            status: 400
        })
    }

    const { task } = await removeUserBuyerTask(id)

    return NextResponse.json(task)
}

