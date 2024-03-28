import { Logger, ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import {
	FastifyAdapter,
	NestFastifyApplication
} from "@nestjs/platform-fastify"

import { AppModule } from "./app.module"

async function bootstrap() {
	const logger = new Logger("Bootstrap")
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
	)
	const configService = app.get(ConfigService)
	const port = Number(configService.get<string>("APP_PORT"))
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true
		})
	)
	app.setGlobalPrefix("api")
	// app.useStaticAssets({
	// 	root: join(__dirname, "..", "public"),
	// 	prefix: "/public/",
	// })
	await app.listen(port, "0.0.0.0")
	logger.log(`App is ready and listening on port ${port} 🚀`)
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
