// ./types/global.d.ts
export {}

declare global {
    interface Console {
        colorLog: (type: string, ...rest) => void
    }
}
