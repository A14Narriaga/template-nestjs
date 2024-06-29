import { Module } from "@nestjs/common"

import { ConfigModule } from "./config"
import { AuthModule } from "./modules"
import { SharedModule } from "./shared"

@Module({
	imports: [ConfigModule, SharedModule, AuthModule],
	controllers: [],
	providers: []
})
export class AppModule {}
