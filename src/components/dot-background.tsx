import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import { ReactNode } from "react"

export const DotBackground = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        >
            <div className="z-40 size-full flex items-center justify-center">
                {children}
            </div>
            <DotPattern className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            )} />
        </div>
    )
}
