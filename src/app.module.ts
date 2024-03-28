import { Module } from "@nestjs/common"
import { ConfigModule } from "./config"
import { SharedModule } from "./shared"
import { HelloWorldResolver } from "./hello-world"

@Module({
	imports: [ConfigModule, SharedModule],
	controllers: [],
	providers: [HelloWorldResolver],
})
export class AppModule {}
