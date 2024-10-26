import { Task, User } from "@prisma/client"
import { FormCreateTaskType } from "./forms-type"

export interface CreateTaskResquest extends FormCreateTaskType {
    email: string
    imageUrl: string
}

export interface Item extends Task {
    user: User
}