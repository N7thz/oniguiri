import { CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export const ScrollItemsTasksLoading = () => {
    return (
        <CardContent className="mt-6">
            <ul className={cn(
                "grid grid-cols-2 gap-3",
                "max-sm:grid-cols-1"
            )}>
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
