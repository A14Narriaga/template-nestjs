import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import {
	FastifyAdapter,
	NestFastifyApplication,
} from "@nestjs/platform-fastify"
import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	)
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
		}),
	)
	app.setGlobalPrefix("api")
	// app.useStaticAssets({
	// 	root: join(__dirname, "..", "public"),
	// 	prefix: "/public/",
	// })
	await app.listen(3000)
}
bootstrap()
