import { Module } from "@nestjs/common"

import { EnvModule } from "./env"
// import { GraphqlModule } from "./graphql"
import { MongodbModule } from "./mongodb"

@Module({
	// imports: [EnvModule, GraphqlModule, MongodbModule]
	imports: [EnvModule, MongodbModule]
})
export class ConfigModule {}
