const { test, expect } = require('@playwright/test')

test('Nike Website test', {
    tag: '@smoke',
    timeout: 60000,
    retries: 2,
    annotations: {
        type: 'JIRA',
        description: 'PAY-123'
    }

}, async ({ page }) => {

    await page.goto('https://www.nike.com/in/')
    await page.getByRole('link', { name: 'Men', exact: true }).hover();
    await page.getByRole('menuitem', { name: 'Tops & T-Shirts'}).click();
    await page.getByRole('listitem').filter({ hasText: 'Find a Store' });
    // await page.goto('https://www.google.com')
    // await page.getByRole('button', { name: 'Google Search' })

});



