import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";

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
        console.error('Unexpected error:',err)
    }

    res.status(statusCode).json({error: message})
}