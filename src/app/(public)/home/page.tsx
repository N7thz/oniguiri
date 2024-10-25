import type { Metadata } from "next"
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Card } from "@/components/card-border-animated"

export const metadata: Metadata = {
    title: "Oniguiri list | Home"
}

export default function Home() {
    return (
        <div className="h-dvh flex items-center justify-center">
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle className="text-4xl">
                        Onigiri
                    </CardTitle>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>
        </div>
    )
}
