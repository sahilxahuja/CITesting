import { test, expect } from '@playwright/test';

test.use({ storageState: 'pages/auth.json' });

test('Web Clock-In', async ({ page }) => {
    await page.goto('https://telemerge.keka.com');
    const notif = page.getByRole('button', { name: 'Not Now' });
    try {
        await notif.waitFor({ state: 'visible', timeout: 5000 });
        await notif.click();
    } catch {
        // Notification did not appear — continue safely
    }

    expect(await page.getByRole('link', { name: ' Me' })).toBeVisible();

    await page.getByRole('link', { name: ' Me' }).click();
    const clockIn = page.getByText('Web Clock-In');
    const clockOut = page.getByRole('button', { name: 'Clock-out' });
    await page.waitForLoadState('networkidle');

    if (await clockIn.isVisible()) {
        await clockIn.click();
        await expect(clockOut).toBeVisible();
    } else if (await clockOut.isVisible()) {
        await clockOut.click();
        await clockOut.click();
        await expect(clockIn).toBeVisible();
    } else {
        throw new Error('Neither Clock-In nor Clock-Out is visible');
    }

});