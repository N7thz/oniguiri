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

interface UpdateTaskProps {
    data: {
        name: string
        quantity: number
        obs: string | null
        unit: Unit
    }
    id: string
}

export function TaskRepository() {

    async function findAllTasks() {

        const tasks = await prisma.task.findMany({
            include: {
                user: true
            },
            where: {
                wasBought: false
            },
            orderBy: {
                createdAt: "asc"
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
            error: "Task not exist."
        }

        return { task }
    }

    async function findTaskById(id: string) {

        const task = await prisma.task.findUnique({
            where: {
                id
            }
        })

        if (!task) return {
            error: "Task not exist."
        }

        return { task }
    }

    async function createTask(data: CreateTaskProps) {

        const task = await prisma.task.create({
            data
        })

        return { task }
    }

    async function updateTask({ id, data }: UpdateTaskProps) {

        const task = await prisma.task.update({
            where: {
                id
            },
            data
        })

        return { task }
    }

    async function deleteTask(id: string) {

        await prisma.task.delete({
            where: {
                id
            },
        })
    }

    return {
        createTask,
        updateTask,
        deleteTask,
        findTaskByName,
        findTaskById,
        findAllTasks
    }
}
