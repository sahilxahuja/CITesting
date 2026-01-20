const { test, expect } = require('@playwright/test')

test('writing table elements', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator("//table[@name ='BookTable']")
    const cols = await table.locator('tbody tr th')

    console.log(await cols.count());
    const rows = await table.locator("tbody tr")
    const colcount = await cols.count();
    console.log(await rows.count());
    const rcount = await rows.count();

    for (let i = 0; i < rcount; i++) {
        const curr_row = rows.nth(i);
        const curr_cell = curr_row.locator('td');

        for (let j = 0; j < await curr_cell.count(); j++) {

            const tdata = await curr_cell.nth(j).textContent();
            console.log(tdata)
        }
    }
});