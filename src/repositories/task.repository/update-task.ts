import { prisma } from "@/lib/prisma"
import { Unit } from "@prisma/client"

interface UpdateTaskProps {
    id: string
    data: Data
}

interface Data {
    name: string
    quantity: number
    obs: string | null
    unit: Unit
}

export async function updateTask({ id, data }: UpdateTaskProps) {

    const task = await prisma.task.update({
        where: {
            id
        },
        data
    })

    return { task }
}