import { defineConfig, globalIgnores } from "eslint/config";
import nextTs from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";

const config = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", ".next-dev/**", "out/**", "next-env.d.ts"]),
]);

export default config;
