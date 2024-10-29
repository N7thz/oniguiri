import { CreateTaskResquest } from "@/@types"
import { TaskRepository } from "@/repositories/task.repository"
import { UserRepository } from "@/repositories/user.repository"
import { NextRequest, NextResponse } from "next/server"

const { createUser, findUserByEmail } = UserRepository()
const { createTask, findTaskByName, findAllTasks } = TaskRepository()

export async function GET() {

    const { tasks } = await findAllTasks()

    return NextResponse.json(tasks)
}

export async function POST(request: NextRequest) {

    const {
        name, quantity, obs, unit, email, image, userName
    }: CreateTaskResquest = await request.json()

    const { task: taskExisted } = await findTaskByName(name)

    if (taskExisted) {

        return NextResponse.json({
            message: "task already exist."
        }, {
            status: 409,
        })
    }

    const { error, user: UserExisted } = await findUserByEmail(email)

    let user = UserExisted

    if (error) {

        const { user: userCreated } = await createUser({
            email,
            image,
            name: userName
        })

        user = userCreated
    }

    const obsIsValid = obs !== "" && obs !== undefined
    const userId = user!.id

    const { task } = await createTask({
        name,
        quantity,
        wasBought: false,
        obs: obsIsValid ? obs : null,
        unit,
        userId
    })

    return NextResponse.json(task, { status: 201 })
}