"use client"

import { SidebarMenuButton } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"
import { useApplication } from "@/providers/user-provider"
import { useEffect, useState } from "react"

export const ButtonRefresh = () => {

    const [isSync, setIsSync] = useState(false)

    const { invalidateQuery } = useApplication()

    useEffect(() => {
        setTimeout(() => setIsSync(false), 10000)
    }, [isSync])

    function refresh() {
        setIsSync(true)
        invalidateQuery
    }

    return (
        <SidebarMenuButton asChild>
            <Button
                onClick={refresh}
                variant="ghost"
                disabled={isSync}
                className="disabled:cursor-not-allowed text-base justify-normal"
                title={isSync ? "os dados foram sincronizados" : undefined}
            >
                <RefreshCcw />
                Sincronizar
            </Button>
        </SidebarMenuButton>
    )
}
