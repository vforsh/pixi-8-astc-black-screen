import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 3000,
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		copyPublicDir: true,
		target: 'esnext',
	},
	publicDir: 'assets',
	plugins: [],
	base: '/pixi-8-astc-black-screen',
})
