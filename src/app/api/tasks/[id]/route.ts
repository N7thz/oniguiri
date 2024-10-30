import { TaskRepository } from "@/repositories/task.repository"
import { NextRequest, NextResponse } from "next/server"

interface ContextProps {
    params: {
        id: string
    }
}

export async function GET(_: NextRequest, { params: { id } }: ContextProps) {

    const { findTaskById } = TaskRepository()

    const { error, task } = await findTaskById(id)

    if (error) return NextResponse.json({ message: error }, { status: 401 })

    return NextResponse.json(task)
}