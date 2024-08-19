const { defineConfig, devices } = require("@playwright/test");
import dotenv from "dotenv";
import config from "./config";
// Load environment variables from .env file
dotenv.config();
console.log("BASE_URL:", process.env.BASE_URL);
module.exports = defineConfig({
  use: {
    baseURL: config.baseURL,
    credentials: {
      username: config.username,
      password: config.password,
    },
    trace: "on-first-retry",
    video: "on",
    screenshot: "only-on-failure",
  },
  testDir: "tests",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  reporter: [
    ["list"],
    ["json", { outputFile: "test-results/results.json" }],
    ["html", { open: "on-failure" }],
  ],
  projects: [
    {
      name: "Development",
      use: {
        baseURL: config.baseURL,
        credentials: {
          username: config.username,
          password: config.password,
        },
      },
    },
    {
      name: "Sandbox",
      use: {
        baseURL: config.baseURL,
        credentials: {
          username: config.username,
          password: config.password,
        },
      },
    },
  ],
});
