import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  private page: Page;
  private addToCartButton: Locator;
  private cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('"Add to cart"');
    this.cartIcon = page.locator(".shopping_cart_link");
  }

  async getNumItems() {
    const itemCount = await this.page
      .locator(".shopping_cart_badge")
      .textContent();
    return itemCount;
  }

  async addItemsToCart(numItems: number): Promise<void> {
    for (let i = 0; i < numItems; i++) {
      await this.page.locator('"Add to cart"').nth(i).click();
    }
    await this.page.locator(".shopping_cart_link").click();
  }

  async gotoCart() {
    await this.cartIcon.click();
  }
}
