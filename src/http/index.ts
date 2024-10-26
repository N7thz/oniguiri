import { FormCreateTaskType } from "@/@types/forms-type"
import { Task } from "@prisma/client"
import axios from "axios"

export const api = axios.create({
    baseURL: "/api",
})

interface CreateTaskResquest extends FormCreateTaskType {
    email: string
}

export function useHttp() {

    async function createTask({
        name, quantity, obs, email
    }: CreateTaskResquest) {

        return api.post<Task>("/tasks", { name, quantity, obs, email })
    }
    return {
        createTask
    }
}