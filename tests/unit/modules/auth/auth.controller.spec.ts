import { Test, TestingModule } from "@nestjs/testing"

import { AuthController, AuthService } from "@src/modules"

describe("AuthController", () => {
	let controller: AuthController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AuthController],
			providers: [AuthService]
		}).compile()

		controller = module.get<AuthController>(AuthController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
