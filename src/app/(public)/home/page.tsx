import type { Metadata } from "next"
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PagePrivete } from "@/components/page-privete"
import { Card } from "@/components/card-border-animated"
import { DialogCreateTask } from "@/components/dialog-create-task"
import { Toaster } from "@/components/ui/sonner"
import { ScrollItemsTasks } from "@/components/scroll-items-tasks"

export const metadata: Metadata = {
    title: "Oniguiri list | Home"
}

export default function Home() {
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
                    <ScrollItemsTasks />
                </Card>
            </PagePrivete>
            <Toaster />
        </>
    )
}