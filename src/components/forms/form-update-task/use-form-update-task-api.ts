import { api } from "@/http"
import { Task } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"

export function useFormUpdateTaskApi(id: string) {

    const { data: task, isLoading } = useQuery({
        queryKey: ["find-task-by-id", id],
        queryFn: async () => {

            const response = await api.get<Task>(`/tasks/${id}`)

            return response.data
        }
    })

    return {
        task,
        isLoading
    }
}