/// <reference types="vite/client" />

export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_ENDPOINT: string;
            API_KEY:string;
        }
    }
}
