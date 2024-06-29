import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Request,
	UseGuards
} from "@nestjs/common"
import { FastifyRequest } from "fastify"

import { AuthService } from "./auth.service"
import { LoginDto, RegisterUserDto, UpdateUserDto } from "./dto"
import { AuthGuard } from "./guards"

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	login(@Body() loginDto: LoginDto) {
		return this.authService.login(loginDto)
	}

	@Post("register")
	register(@Body() registerUserDto: RegisterUserDto) {
		return this.authService.register(registerUserDto)
	}

	@UseGuards(AuthGuard)
	@Get("refresh-token")
	refreshToken(@Request() req: FastifyRequest) {
		const user = req["user"]!
		return this.authService.refreshToken(user)
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.authService.update(+id, updateUserDto)
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.authService.remove(id)
	}
}
