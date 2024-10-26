import { FormCreateTaskType } from "./forms-type"

export interface CreateTaskResquest extends FormCreateTaskType {
    email: string
    imageUrl: string
}