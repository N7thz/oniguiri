import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const Loading = () => {
    return (
        <Card className="my-4">
            <CardHeader>
                <Skeleton className="rounded-full h-8" />
            </CardHeader>
            <CardContent className="space-y-3">
                <Skeleton className="rounded-full h-8 w-1/2" />
                <Skeleton className="rounded-full h-8 w-2/3" />
            </CardContent>
        </Card>
    )
}
