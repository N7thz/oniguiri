import { Item } from "@/@types"
import { api } from "@/http"
import { useQuery } from "@tanstack/react-query"
import { useAutoAnimate } from "@formkit/auto-animate/react"

export function useTasks() {

    const [parent] = useAutoAnimate()

    const { data: items, isLoading } = useQuery({
        queryKey: ["find-all-tasks"],
        queryFn: async () => {

            const response = await api.get<Item[]>("/tasks")

            const data = response.data

            return data
        }
    })

    return {
        items,
        isLoading,
        parent
    }
}