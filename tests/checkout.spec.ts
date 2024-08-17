import { test, expect } from "@playwright/test";
import { PageObjects } from "../pages";

test("should complete the checkout process", async ({ page }) => {
  const pageObjects = new PageObjects(page);

  // Login to the application
  await pageObjects.login.goto();
  await pageObjects.login.login("standard_user", "secret_sauce");

  // Sort prices by low to high
  await page.selectOption(".product_sort_container", "lohi");

  // Add item to the cart
  await pageObjects.inventory.addItemsToCart(2);

  // Assert 2 items in the cart
  let itemCount = await pageObjects.inventory.getNumItems();
  expect(parseInt(itemCount ?? "0")).toBe(2);

  // Go to the cart and proceed to checkout
  await pageObjects.inventory.gotoCart();
  await pageObjects.cart.proceedToCheckout();

  // Fill in checkout information and finish the checkout
  await pageObjects.checkout.checkoutDetails("John", "Doe", "12345");
  await pageObjects.checkout.finishCheckout();

  // Assert that checkout was successful
  const confirmationMessage = await page
    .locator(".complete-header")
    .textContent();
  expect(confirmationMessage).toBe("Thank you for your order!");
});
