import { ContextProps } from "@/@types"
import { TaskRepository } from "@/repositories/task.repository/@index"
import { UserRepository } from "@/repositories/user.repository"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest, context: ContextProps) {

    const { addUserBuyerTask, findTaskById } = TaskRepository()
    const { findUserByEmail } = UserRepository()
    const { email }: { email: string } = await request.json()
    const { params: { id } } = context

    const { error } = await findTaskById(id)
    const {
        error: EmailError,
        user
    } = await findUserByEmail(email)

    if (error || EmailError) {
        return NextResponse.json({
            message: "Task not exist"
        }, {
            status: 400
        })
    }

    const userBuyerId = user!.id

    const { task } = await addUserBuyerTask({ id, userBuyerId })

    return NextResponse.json(task)
}