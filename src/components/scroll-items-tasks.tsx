"use client"

import { CardContent} from "@/components/ui/card"
import { NotFoundTasks } from "@/components/tasks/not-found-tasks"
import { TaskItem } from "@/components/tasks/task-item"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Item } from "@/@types"
import { api } from "@/http"
import { useQuery } from "@tanstack/react-query"

export const ScrollItemsTasks = () => {

    const { data: items } = useQuery({
        queryKey: ["find-all-tasks"],
        queryFn: async () => {

            const response = await api.get<Item[]>("/tasks")

            const data = response.data

            return data
        }
    })

    if (!items) return

    return (
        <ScrollArea
            type="hover"
            className="size-full"
        >
            <ScrollBar />
            <CardContent className="mt-6">
                <ul className="grid grid-cols-2 gap-3">
                    {
                        items.length === 0
                            ? <NotFoundTasks />
                            : items.map(item => {
                                return (
                                    <TaskItem item={item} />
                                )
                            })
                    }
                </ul>
            </CardContent>
        </ScrollArea>
    )
}
