import { Page } from '@playwright/test';
import { env } from '../config/env';
export class LoginPage {
    constructor(private page: Page) { }
    async navigate() { await this.page.goto(env.baseUrl); }
    async login() {
        await this.page.locator('input[name="username"]').fill(env.username);
        await this.page.locator('input[name="password"]').fill(env.password);
        await this.page.locator('input[value="Log In"]').click();
    }
}