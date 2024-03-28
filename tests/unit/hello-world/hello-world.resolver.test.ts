import { Test, TestingModule } from "@nestjs/testing"
import { beforeEach, describe, expect, it } from "vitest"

import { HelloWorldResolver } from "@src/hello-world"

describe("HelloWorldResolver", () => {
	let resolver: HelloWorldResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HelloWorldResolver]
		}).compile()

		resolver = module.get<HelloWorldResolver>(HelloWorldResolver)
	})

	it("should be defined", () => {
		expect(resolver).toBeDefined()
	})
})
