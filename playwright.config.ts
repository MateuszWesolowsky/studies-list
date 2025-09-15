import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://localhost:5173", // adres Twojej aplikacji React
    headless: false, // true jeśli chcesz testować w tle
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
  },
  testDir: "./src/e2e",
  testMatch: "**/*.e2e.ts", // tylko pliki .e2e.ts
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
