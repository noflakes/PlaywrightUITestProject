import { test, expect, Page } from "@playwright/test";
import { PageObjects } from "../pages/index";

// add test for beforeach
let pageObjects: PageObjects;
test.beforeEach(async ({ page }) => {
  pageObjects = new PageObjects(page);
  await pageObjects.login.goto();
});
test("should display an error message with invalid credentials", async ({
  page,
}) => {
  await pageObjects.login.login("invalid_user", "invalid_password");
  const errorMessage = await pageObjects.login.getErrorMessage();
  expect(errorMessage).toBe(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("Enter valid credentials", async ({ page }) => {
  await pageObjects.login.login("standard_user", "secret_sauce");
  expect(page.url()).toContain("inventory.html");
});
