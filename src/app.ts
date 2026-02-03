import express from 'express'
import { notFound } from './middleware/notFound.js'
import { errorHandler } from './middleware/errorHandler.js'
import { requestLogger } from './middleware/requestLogger.js'

const app = express()

app.use(express.json())
app.use(requestLogger)

app.get('/health', (_req, res) => {
    res.json({ status: 'ok' })
})

app.use(notFound)
app.use(errorHandler)

export default app