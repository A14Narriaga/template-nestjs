import { IsEmail, IsString, MinLength } from "class-validator"

export class CreateUserDto {
	@IsEmail()
	email!: string

	@IsString()
	name!: string

	@IsString()
	lastName!: string

	@MinLength(8)
	password!: string
}
