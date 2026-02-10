import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		experimental: {
			viteModuleRunner: false,
		},
		typecheck: {
			enabled: true,
		},
	},
});
