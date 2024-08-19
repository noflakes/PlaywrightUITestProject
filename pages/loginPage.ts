import { Page, Locator } from "@playwright/test";

export class LoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator(".error-message-container");
  }

  // async goto() {
  //   const baseURL = process.env.baseURL; // Use environment variable or default URL
  //   await this.page.goto(baseURL);
  // }
  async goto() {
    console.log("baseURL environment variable:", process.env.BASE_URL);
    const baseUrl = process.env.BASE_URL ?? "https://default.url";
    await this.page.goto(baseUrl);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.textContent();
  }
}
