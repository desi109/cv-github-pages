import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base =
	process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
		? `/${repositoryName}/`
		: "/";

export default defineConfig({
	base,
	plugins: [
		tanstackStart({ prerender: { enabled: true } }),
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		react(),
		tailwindcss(),
		tsconfigPaths(),
	],
});
