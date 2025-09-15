import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "./src/setupTests.vitest.ts",
    environment: "jsdom",
    include: ["src/components/**/__tests__/**/*.test.{ts,tsx}"],
    exclude: ["src/e2e/**"],
  },
});
