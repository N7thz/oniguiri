import { CreateTaskResquest } from "@/@types"
import { Task } from "@prisma/client"
import axios from "axios"

export const api = axios.create({
    baseURL: "/api",
})

export function useHttp() {

    async function createTask(body: CreateTaskResquest) {
        return api.post<Task>("/tasks", body)
    }

    return {
        createTask
    }
}