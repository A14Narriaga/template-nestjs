import swc from "unplugin-swc"
import { defineConfig } from "vitest/config"

import { createVitestConfig } from "./create-vitest-config"

export default defineConfig({
	test: createVitestConfig("unit"),
	plugins: [swc.vite()]
})
