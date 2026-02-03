const required = (key) => {
    const value = process.env[key]
    if (!value) {
        throw new Error(`Missing env variable: ${key}`)
    }
    return value
}

export const env = {
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    PORT: Number(process.env.PORT ?? 3000)
}