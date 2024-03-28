import { createVitestConfig } from "test/config"
import swc from "unplugin-swc"
import { defineConfig } from "vitest/config"

export default defineConfig({
	test: createVitestConfig("(unit|e2e)"),
	plugins: [swc.vite()],
})
