"use client"

import { CardContent } from "@/components/ui/card"
import { NotFoundTasks } from "@/components/tasks/not-found-tasks"
import { TaskItem } from "@/components/tasks/task-item"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Item } from "@/@types"
import { api } from "@/http"
import { useQuery } from "@tanstack/react-query"
import { 
    ScrollItemsTasksLoading as Loading 
} from "./scroll-items-tasks-loading"

export const ScrollItemsTasks = () => {

    const { data: items, isLoading } = useQuery({
        queryKey: ["find-all-tasks"],
        queryFn: async () => {

            const response = await api.get<Item[]>("/tasks")

            const data = response.data

            return data
        }
    })

    if (!items || isLoading) return <Loading />

    return (
        <ScrollArea
            type="hover"
            className="w-full h-[540px] border border-border"
        >
            <ScrollBar />
            <CardContent className="mt-6 size-full">
                <ul className="grid grid-cols-2 gap-3">
                    {
                        items.length === 0
                            ? <NotFoundTasks />
                            : items.map(item =>
                                <TaskItem
                                    key={item.id}
                                    item={item}
                                />
                            )
                    }
                </ul>
            </CardContent>
        </ScrollArea>
    )
}
