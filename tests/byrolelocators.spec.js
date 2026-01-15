const{test, expect} = require ('@playwright/test')

test('locators Demo', async({page})=>{

    await page.goto('https://www.iplt20.com/matches/points-table');
    const captext = await page.getByRole('heading', { name: 'ABOUT' }).innerText();
    console.log(captext)
    

})