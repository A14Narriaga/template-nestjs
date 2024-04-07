// import { loadEnv } from "vite"
import { InlineConfig } from "vitest"

export const createVitestConfig = (testingType: string): InlineConfig => {
	return {
		root: "./",
		globals: true,
		isolate: false,
		passWithNoTests: true,
		include: [`tests/${testingType}/**/*.test.ts`],
		// env: loadEnv("test", process.cwd(), ""),
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
}
