import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { FastifyRequest } from "fastify"

import { EnvConfig } from "@src/config"

import { AuthService } from "../../auth.service"
import { JwtPayload } from "../../interfaces"

const { jwtSeed } = EnvConfig()

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private jwtService: JwtService,
		private authService: AuthService
	) {}

	private extractTokenFromHeader(request: FastifyRequest): string | undefined {
		const authorizationHeader = request.headers["authorization"]
		if (!authorizationHeader) return undefined
		const [type, token] = authorizationHeader.split(" ")
		return type === "Bearer" ? token : undefined
	}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		try {
			const request: FastifyRequest = context.switchToHttp().getRequest()
			const token = this.extractTokenFromHeader(request)
			if (!token) throw new UnauthorizedException()
			const options = { secret: jwtSeed }
			const { id } = await this.jwtService.verifyAsync<JwtPayload>(
				token,
				options
			)
			const user = await this.authService.findOne(id)
			if (!user.isActive) throw new UnauthorizedException("User is not active")
			request["user"] = user
			return true
		} catch (error) {
			if (error instanceof Error) {
				throw new UnauthorizedException(error.message)
			}
			throw new UnauthorizedException()
		}
	}
}
