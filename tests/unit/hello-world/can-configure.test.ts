import { describe, expect, it } from "vitest"

import { canReconfigure } from "@src/hello-world"

describe("canConfigure", () => {
	it("shoud 'from' and 'to' be the same length", () => {
		expect(canReconfigure("A", "BC")).toBe(false)
	})

	it("shoud strings provided have not different number of unique letters", () => {
		expect(canReconfigure("ABC", "DDD")).toBe(false)
	})

	it("shoud strings provided have not different order of transformation letters", () => {
		expect(canReconfigure("XBOX", "XXBO")).toBe(false)
	})
})
