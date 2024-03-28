import swc from "unplugin-swc"
import { defineConfig } from "vitest/config"

import { createVitestConfig } from "./create-vitest-config"

export default defineConfig({
	test: createVitestConfig("e2e"),
	plugins: [swc.vite()]
})
