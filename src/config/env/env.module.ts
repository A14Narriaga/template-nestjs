import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { EnvConfig, EnvsValidationSchema } from "./env.config"

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [EnvConfig],
			validationSchema: EnvsValidationSchema
		})
	]
})
export class EnvModule {}
