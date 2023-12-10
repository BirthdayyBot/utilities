import { createVitestConfig } from './scripts/vitest.config';

export default createVitestConfig({
	test: {
		setupFiles: []
	},
	esbuild: {
		target: 'es2020'
	}
});
