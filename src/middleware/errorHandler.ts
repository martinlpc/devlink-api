import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import {logger} from '../config/logger.js'

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    const isAppError = err instanceof AppError;

    const statusCode = isAppError ? err.statusCode : 500
    const message = isAppError ? err.message : 'Internal Server Error'

    if(!isAppError) {
        logger.error({ err }, 'Unexpected error')
    }

    res.status(statusCode).json({error: message})
}