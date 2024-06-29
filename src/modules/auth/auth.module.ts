import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { MongooseModule } from "@nestjs/mongoose"

import { EnvConfig } from "@src/config"

import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { User, UserSchema } from "./entities"

const { jwtSeed } = EnvConfig()

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: User.name,
				schema: UserSchema
			}
		]),
		JwtModule.register({
			global: true,
			secret: jwtSeed,
			signOptions: { expiresIn: "6h" }
		})
	],
	controllers: [AuthController],
	providers: [AuthService]
})
export class AuthModule {}
