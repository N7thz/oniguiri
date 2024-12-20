import { TaskRepository } from "@/repositories/task.repository/@index"
import { NextRequest, NextResponse } from "next/server"
import { ContextProps } from "@/@types"

export async function Get({ params: { id } }: ContextProps) {

    const { findTaskById } = TaskRepository()

    const { error, task } = await findTaskById(id)

    if (error) return NextResponse.json({ message: error }, { status: 401 })

    return NextResponse.json(task)
}