import { Module } from "@nestjs/common"

import { ConfigModule } from "./config"
import { HelloWorldResolver } from "./hello-world"
import { SharedModule } from "./shared"

@Module({
	imports: [ConfigModule, SharedModule],
	controllers: [],
	providers: [HelloWorldResolver]
})
export class AppModule {}
