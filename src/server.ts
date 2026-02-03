import app from './app.js'
import { env } from './config/env.js'
import {logger} from './config/logger.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    logger.info(
        {port: env.PORT, env: env.NODE_ENV},
        'Server started'
    )
})