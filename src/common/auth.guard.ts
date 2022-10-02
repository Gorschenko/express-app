import { IMiddleware } from './middleware.interface'
import { NextFunction, Request, Response } from 'express'

export class AuthGuard implements IMiddleware {
	async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
		if (req.user) {
			return next()
		}
		res.status(401).send({ error: 'Вы не авторизованы' })
	}
}
