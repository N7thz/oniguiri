import { CreateTaskResquest, UpdateTaskResquest } from "@/@types"
import { Task } from "@prisma/client"
import axios from "axios"

export const api = axios.create({
    baseURL: "/api",
})

interface AddTaskToUserBuyerRequest {
    id: string,
    email: string
}

function useHttp() {

    async function createTask(body: CreateTaskResquest) {
        return api.post<Task>("/tasks", body)
    }

    async function updateTask({ id, ...props }: UpdateTaskResquest) {

        const body = { ...props }

        return api.post<Task>(`/tasks/${id}`, body)
    }

    async function removeTask(id: string) {
        return api.delete(`/tasks/${id}`)
    }

    async function addTaskToUserBuyer({ id, email }: AddTaskToUserBuyerRequest) {
        return api.post(`/user-to-task/${id}`, { email })
    }

    async function removeTaskToUserBuyer(id: string) {
        return api.put(`/user-to-task/${id}`)
    }

    return {
        createTask,
        updateTask,
        removeTask,
        addTaskToUserBuyer,
        removeTaskToUserBuyer
    }
}

export const http = useHttp()