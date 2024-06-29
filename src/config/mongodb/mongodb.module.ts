import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { EnvConfig } from "../env"
const { dbPort, dbUsername, dbPassword, dbHost, dbName } = EnvConfig()

@Module({
	imports: [
		MongooseModule.forRoot(
			`mongodb://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}`,
			{
				dbName
			}
		)
	]
})
export class MongodbModule {}
