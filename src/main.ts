import { Logger, ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import {
	FastifyAdapter,
	NestFastifyApplication
} from "@nestjs/platform-fastify"

import { AppModule } from "./app.module"
import { corsConfig } from "./config"

async function bootstrap() {
	const logger = new Logger("Bootstrap")
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
	)
	const configService = app.get(ConfigService)
	const port = Number(configService.get<string>("PORT"))
	app.setGlobalPrefix("api")
	app.enableCors(corsConfig)
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true
		})
	)
	// app.useStaticAssets({
	// 	root: join(__dirname, "..", "public"),
	// 	prefix: "/public/",
	// })
	await app.listen(port, "0.0.0.0")
	logger.log(`App is ready and listening on port ${port}`)
}

bootstrap().catch(handleError)

function handleError(error: unknown) {
	// eslint-disable-next-line no-console
	console.error(error)
	// eslint-disable-next-line unicorn/no-process-exit
	process.exit(1)
}

process.on("uncaughtException", handleError)
