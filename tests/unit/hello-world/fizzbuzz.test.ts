import { describe, expect, it } from "vitest"

import { fizzbuzz } from "@src/hello-world"

describe("fizzbuzz", () => {
	it('should return "fizz" if the number is multiple of 3', () => {
		expect(fizzbuzz(3)).toBe("fizz")
		expect(fizzbuzz(9)).toBe("fizz")
		expect(fizzbuzz(81)).toBe("fizz")
	})

	it('should return "buzz" if the number is multiple of 5', () => {
		expect(fizzbuzz(5)).toBe("buzz")
		expect(fizzbuzz(25)).toBe("buzz")
		expect(fizzbuzz(50)).toBe("buzz")
	})

	it('should return "fizzbuzz" if the number is multiple of 3 and 5', () => {
		expect(fizzbuzz(15)).toBe("fizzbuzz")
		expect(fizzbuzz(30)).toBe("fizzbuzz")
		expect(fizzbuzz(45)).toBe("fizzbuzz")
	})

	it("should return a number if the number is not multiple of 3 or 5", () => {
		expect(fizzbuzz(1)).toBe(1)
		expect(fizzbuzz(2)).toBe(2)
		expect(fizzbuzz(8)).toBe(8)
	})
})
