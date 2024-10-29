import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import { DotBackground } from "@/components/dot-background"
import { UserProvider } from "@/providers/user-provider"
import { Metadata } from "./metadata"
import "./globals.css"

const font = JetBrains_Mono({ subsets: ["latin"] })

export const metadata = Metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <UserProvider>
            <DotBackground>
              {children}
            </DotBackground>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
