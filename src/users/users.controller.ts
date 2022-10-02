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
import { ValidateMiddleware } from '../common/validate.middleware'
import { sign } from 'jsonwebtoken'
import { IConfigService } from '../config/config.service.interface'
import { IUserService } from './users.service.interface'
import { AuthGuard } from '../common/auth.guard'
@injectable()
export class UsersController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.UsersService) private userService: IUserService,
		@inject(TYPES.ConfigService) private configService: IConfigService,
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
			{
				path: '/info',
				method: 'get',
				func: this.info,
				middlewares: [new AuthGuard()],
			},
		])
	}

	async login(
		req: Request<{}, {}, UserLoginDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const result = await this.userService.validateUser(req.body)
		if (!result) {
			return next(new HTTPError(401, 'Ошибка авторизации'))
		}
		const jwt = await this.signJWT(req.body.email, this.configService.get('SECRET'))
		this.ok(res, { jwt })
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

	async info({ user }: Request, res: Response, next: NextFunction): Promise<void> {
		console.log(user)
		// const userInfo = await this.userService.getUserInfo(user)
		// this.ok(res, userInfo)
	}

	private signJWT(email: string, secret: string): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			sign(
				{
					email,
					iat: Math.floor(Date.now() / 1000),
				},
				secret,
				{
					algorithm: 'HS256',
				},
				(err, token) => {
					if (err) {
						reject(err)
					}
					resolve(token as string)
				},
			)
		})
	}
}
