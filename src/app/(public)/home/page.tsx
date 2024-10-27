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
import webpush from "web-push"

export const metadata: Metadata = {
    title: "Oniguiri list | Home"
}

export default function Home() {

    const vapidKeys = webpush.generateVAPIDKeys()

    console.log('Paste the following keys in your .env file:')
    console.log('-------------------')
    console.log('NEXT_PUBLIC_VAPID_PUBLIC_KEY=', vapidKeys.publicKey)
    console.log('VAPID_PRIVATE_KEY=', vapidKeys.privateKey)

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
                    <div className="px-6 rounded-lg">
                        <ScrollItemsTasks />
                    </div>
                    <CardFooter className="justify-end items-center pt-12">
                        <Button className="w-1/3">
                            Finalizar compra
                        </Button>
                    </CardFooter>
                </Card>
            </PagePrivete>
            <Toaster />
        </>
    )
}