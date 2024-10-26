"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

    const queryClient = new QueryClient()

    return (
        <NextThemesProvider {...props}>
            <SessionProvider refetchOnWindowFocus>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </SessionProvider>
        </NextThemesProvider>
    )
}