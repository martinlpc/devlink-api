import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
    next(new AppError('Route not found',404))
}