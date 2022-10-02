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
import { UserService } from './users.service'
import { ValidateMiddleware } from '../common/validate.middleware'
@injectable()
export class UsersController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.UsersService) private userService: UserService,
	) {
		super(loggerService)
		this.bindRoutes([
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleware(UserRegisterDto)],
			},
			{
				path: '/login',
				method: 'post',
				func: this.login,
				middlewares: [new ValidateMiddleware(UserLoginDto)],
			},
		])
	}

	async login(
		{ body }: Request<{}, {}, UserLoginDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const result = await this.userService.validateUser(body)
		if (!result) {
			return next(new HTTPError(401, 'Ошибка авторизации'))
		}
		this.ok(res, {})
	}
	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const result = await this.userService.createUser(body)
		if (!result) {
			return next(new HTTPError(422, 'Такой пользователь уже существует'))
		}
		this.ok(res, result)
	}
}
