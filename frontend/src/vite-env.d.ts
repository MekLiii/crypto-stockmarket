/// <reference types="vite/client" />

export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITE_API_ENDPOINT: string,
            VITE_COINMARKETCAP_API_ENDPOINT: string,
            VITE_COINMARKETCAP_API_KEY: "d2cef0cb-d973-43b3-8171-317c674f5286",
        }
    }
}
