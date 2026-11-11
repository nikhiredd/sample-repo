import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('customer opens banking application', async ({ page }) => {
  await page.goto(
    'https://parabank.parasoft.com/parabank/index.htm'
  );
});

When('customer enters valid credentials', async ({ page }) => {
  await page.locator('input[name="username"]').fill('yourUsername');
  await page.locator('input[name="password"]').fill('yourPassword');
  await page.locator('input[value="Log In"]').click();
});

Then('customer should navigate to dashboard', async ({ page }) => {
  await expect(page).toHaveURL(/overview.htm/);
  
});