import { BaseController } from '../common/base.controller'
import { inject, injectable } from 'inversify'
import { HTTPError } from '../errors/http-error.class'
import { TYPES } from '../types'
import { Request, Response, NextFunction } from 'express'
import { ILogger } from '../logger/logger.interface'
import 'reflect-metadata'
import { IUserController } from './users.controller.interface'
import { UserLoginDto } from './dto/user-login.dto'
import { UserRegisterDto } from './dto/user-register.dto'
import { User } from './user.entity'
@injectable()
export class UsersController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService)
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		])
	}

	login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		next(new HTTPError(401, 'Ошибка авторизации'))
	}
	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const newUser = new User(body.email, body.name)
		await newUser.setPassword(body.password)
		this.ok(res, newUser)
	}
}
