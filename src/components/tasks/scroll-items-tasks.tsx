"use client"

import { CardContent } from "@/components/ui/card"
import { NotFoundTasks } from "@/components/tasks/not-found-tasks"
import { TaskItem } from "@/components/tasks/task-item"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    ScrollItemsTasksLoading as Loading
} from "./scroll-items-tasks-loading"
import { cn } from "@/lib/utils"
import { useTasks } from "./use-tasks"

export const ScrollItemsTasks = () => {

    const { items, isLoading, parent } = useTasks()

    if (!items || isLoading) return <Loading />

    return (
        <ScrollArea
            type="hover"
            className="w-full h-[540px] border border-border"
        >
            <ScrollBar />
            <CardContent className="mt-6 size-full">
                <ul
                    ref={parent}
                    className={cn(
                        "grid grid-cols-2 gap-3",
                        items.length === 0 && "grid-cols-1"
                    )}
                >
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
