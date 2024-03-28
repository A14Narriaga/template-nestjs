import { Module } from "@nestjs/common"

import { EnvModule } from "./env"
import { GraphqlModule } from "./graphql"

@Module({
	imports: [EnvModule, GraphqlModule]
})
export class ConfigModule {}
