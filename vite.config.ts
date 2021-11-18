import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import * as pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    define: {
        __VERSION__: JSON.stringify(pkg.version),
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
