import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/import" as *;  @use 'sass:math'; @use 'sass:map';`,
			},
		},
	},
});
