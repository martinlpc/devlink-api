import app from './app.js'
import { env } from './config/env.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`🚀 DevLink APIServer (${env.NODE_ENV}) running on http://localhost:${env.PORT}`)
})