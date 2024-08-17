import { Page, Locator } from "@playwright/test";

export class CartPage {
  private page: Page;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('button[data-test="checkout"]');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export default CartPage;
