namespace NodeJS {
    export interface ProcessEnv {
        GOOGLE_CLIENT_ID: string
        GOOGLE_CLIENT_SECRET: string
        GITHUB_CLIENT_ID: string
        GITHUB_CLIENT_SECRET: string
        DATABASE_URL: string
        DIRECT_URL: string
        NEXT_PUBLIC_VAPID_PUBLIC_KEY: string
        VAPID_PRIVATE_KEY: string
    }
}