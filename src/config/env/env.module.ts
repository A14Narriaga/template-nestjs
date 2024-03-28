import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { EnvConfig } from "./env.config"
import { EnvsValidationSchema } from "./validation.schema"

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [EnvConfig],
			validationSchema: EnvsValidationSchema
		})
	]
})
export class EnvModule {}
