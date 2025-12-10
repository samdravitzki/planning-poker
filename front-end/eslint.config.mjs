// @ts-check
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default defineConfig(
    { ignores: ["node_modules/", "dist/", ".astro/"] },
    js.configs.recommended,
    ts.configs.strict,
    astro.configs.recommended,
);
