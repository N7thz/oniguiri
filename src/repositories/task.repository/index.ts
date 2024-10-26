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

export function TaskRepository() {

    async function findAllTasks() {

        const tasks = await prisma.task.findMany({
            include: {
                user: true
            }
        })

        return { tasks }
    }

    async function findTaskByName(name: string) {

        const task = await prisma.task.findUnique({
            where: {
                name
            }
        })

        if (!task) return {
            error: "User not exist."
        }

        return { task }
    }

    async function createTask(data: CreateTaskProps) {

        const task = await prisma.task.create({
            data
        })

        return { task }
    }

    return {
        createTask,
        findTaskByName,
        findAllTasks
    }
}
