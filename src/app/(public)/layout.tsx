import { Header } from "@/components/header"
import { ReactNode } from "react"

export default function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative w-full">
            <Header  />
            <div
                className="mt-[72px] h-[calc(100dvh_-_72px)] flex items-center justify-center"
            >
                {children}
            </div>
        </div>
    )
}
