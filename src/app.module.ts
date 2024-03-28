import { Module } from "@nestjs/common"
import { ConfigModule } from "./config"
import { SharedModule } from "./shared"

@Module({
	imports: [ConfigModule, SharedModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
