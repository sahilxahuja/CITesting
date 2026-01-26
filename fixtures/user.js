import { test as base, expect } from '@playwright/test'

export const test = base.extend({

    loginPage: async ({ page }, use) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForSelector("//h6[text()='Dashboard']");
        await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

        await use(page);

    }


})

export {expect};