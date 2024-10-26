import type { Metadata } from "next"
import {
    CardHeader, CardTitle, CardContent, CardDescription
} from "@/components/ui/card"
import { PagePrivete } from "@/components/page-privete"
import { Card } from "@/components/card-border-animated"
import { NotFoundTasks } from "@/components/tasks/not-found-tasks"
import { DialogCreateTask } from "@/components/dialog-create-task"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
    title: "Oniguiri list | Home"
}

export default function Home() {

    const items: string[] = []

    return (
        <>
            <PagePrivete
                className="h-dvh w-full flex items-center justify-center"
            >
                <Card className="size-5/6">
                    <CardHeader
                        className="w-full flex-row justify-between items-center"
                    >
                        <div className="space-y-3">
                            <CardTitle className="text-4xl">
                                Onigiri
                            </CardTitle>
                            <CardDescription>
                                Lista de compras online
                            </CardDescription>
                        </div>
                        <DialogCreateTask />
                    </CardHeader>
                    <CardContent className="mt-24">
                        <ul className="size-full flex flex-col items-center gap-3">
                            {
                                items.length === 0
                                    ? <NotFoundTasks />
                                    : items.map(item => <li key={item}>{item}</li>)
                            }
                        </ul>
                    </CardContent>
                </Card>
            </PagePrivete>
            <Toaster />
        </>
    )
}