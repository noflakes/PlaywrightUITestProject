import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { InventoryPage } from "./inventoryPage";
import { CartPage } from "./cartPage";
import { CheckoutPage } from "./checkoutPage";

export class PageObjects {
  public login: LoginPage;
  public inventory: InventoryPage;
  public cart: CartPage;
  public checkout: CheckoutPage;

  constructor(page: Page) {
    this.login = new LoginPage(page);
    this.inventory = new InventoryPage(page);
    this.cart = new CartPage(page);
    this.checkout = new CheckoutPage(page);
  }
}
