import { prisma } from "@/lib/prisma"
import { Unit } from "@prisma/client"

interface CreateTaskProps {
    name: string
    quantity: number
    wasBought: boolean
    obs: string | null
    unit: Unit
    userId: string
}

export async function createTask(data: CreateTaskProps) {

    const task = await prisma.task.create({
        data
    })

    return { task }
}