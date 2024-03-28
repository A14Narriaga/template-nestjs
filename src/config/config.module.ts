import { Module } from "@nestjs/common"
import { EnvModule } from "./env"

@Module({
	imports: [EnvModule],
})
export class ConfigModule {}
