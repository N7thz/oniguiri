import { CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const ScrollItemsTasksLoading = () => {
    return (
        <CardContent className="mt-6">
            <ul className="grid grid-cols-2 gap-3">
                {
                    Array.from({ length: 3 }).map((_, index) =>
                        <Skeleton
                            key={index}
                            className="h-52 rounded-xl"
                        />
                    )
                }
            </ul>
        </CardContent>
    )
}
