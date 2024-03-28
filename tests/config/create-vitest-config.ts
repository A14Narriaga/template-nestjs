import { InlineConfig } from "vitest"

export const createVitestConfig = (testingType: string): InlineConfig => 
({
		root: "./",
		globals: true,
		isolate: false,
		passWithNoTests: true,
		include: [`tests/${testingType}/**/*.test.ts`],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			reportsDirectory: `tests/coverage/${testingType}`,
			include: ["src/**/*.ts"],
			exclude: [
				"src/config",
				"src/**/*.module.ts",
				"src/**/index.ts",
				"src/main.ts"
			]
		}
	}
)
