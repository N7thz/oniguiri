"use client"

import { SidebarMenuButton } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { LogOut as Icon } from "lucide-react"
import { signOut } from "next-auth/react"

export const ButtonLogOut = () => {
    return (
        <SidebarMenuButton asChild>
            <Button
                variant={"ghost"}
                onClick={() => signOut()}
                className="text-base justify-normal"
            >
                <Icon />
                <span>Sair</span>
            </Button>
        </SidebarMenuButton>
    )
}
