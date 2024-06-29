import { EnvConfig } from "../env"

const { allowedOrigins } = EnvConfig()

export const corsConfig = {
	origin: allowedOrigins
	// methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
	// credentials: true
}
