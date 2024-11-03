import type { Metadata } from "next"
import {
    CardHeader, CardTitle, CardDescription, CardFooter
} from "@/components/ui/card"
import { PagePrivete } from "@/components/page-privete"
import { Card } from "@/components/card-border-animated"
import { DialogCreateTask } from "@/components/dialog-create-task"
import { Toaster } from "@/components/ui/sonner"
import { ScrollItemsTasks } from "@/components/tasks/scroll-items-tasks"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
    title: "Oniguiri list | Home"
}

export default function Home() {
    return (
        <>
            <PagePrivete
                className="flex-1 flex items-center justify-center"
            >
                <Card className="size-5/6">
                    <CardHeader className={cn(
                        "w-full flex-row justify-between items-center",
                        "max-sm:flex-col"
                    )}>
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
                    <div className="px-6 rounded-lg">
                        <ScrollItemsTasks />
                    </div>
                    <CardFooter className="justify-end items-center pt-12">
                        <Button className={cn(
                            "w-1/3",
                            "max-sm:w-full"
                        )}>
                            Finalizar compra
                        </Button>
                    </CardFooter>
                </Card>
            </PagePrivete>
            <Toaster />
        </>
    )
}