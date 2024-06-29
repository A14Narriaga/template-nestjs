import "fastify"

import { User } from "@src/modules"

declare module "fastify" {
	interface FastifyRequest {
		user?: User
	}
}
