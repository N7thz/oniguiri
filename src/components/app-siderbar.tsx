import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton as Button
} from "@/components/ui/sidebar"
import { ButtonLogOut } from "./button-logout"
import { RefreshCcw } from "lucide-react"
import { useUser } from "@/providers/user-provider"
import { ButtonRefresh } from "./button-refresh"

export const AppSidebar = () => {



    return (
        <Sidebar>
            <SidebarContent className="bg-background pt-3">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xl mb-8">
                        Oniguiri
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <ButtonLogOut />
                                <ButtonRefresh />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}