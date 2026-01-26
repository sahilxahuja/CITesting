const{test, expect, chromium} = require('@playwright/test')

test('Check GoogleHomePage', async({browser}) => {

  //const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://www.google.com'); 
  await expect(page).toHaveTitle('Google');

})