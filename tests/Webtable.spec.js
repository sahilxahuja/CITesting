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

    for (let i = 1; i < rcount; i++) {
        const curRow = rows.nth(i)
        const cell = curRow.locator('td');

        for (let j = 0; j < await cell.count(); j++) {

            const tdata = await cell.nth(j).textContent();
            console.log(tdata)
        }
        console.log(' ');
    }


})

test('writing  elements', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator("//table[@id ='taskTable']")
    const cols = await table.locator('thead tr th')

    console.log(await cols.count());
    const rows = await table.locator("tbody tr")
    const colcount = await cols.count();
    console.log(await rows.count());
    const rcount = await rows.count();

    for (let i = 0; i < rcount; i++) {
        const curRow = await rows.nth(i);
        const currCell = await curRow.locator('td')

        for (let j = 0; j < await currCell.count(); j++) {

            console.log(await currCell.nth(j).textContent());

        }
        console.log(" ")

    }



})

test('Check rows where CPU usage is above 3%', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#taskTable');
    const headers = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    // 1️⃣ Find CPU column index dynamically
    let cpuColIndex = -1;
    const headerCount = await headers.count();

    for (let i = 0; i < headerCount; i++) {
        const headerText = (await headers.nth(i).textContent())?.trim();
        if (headerText === 'CPU (%)') {
            cpuColIndex = i;
            break;
        }
    }

    expect(cpuColIndex).not.toBe(-1);

    // 2️⃣ Loop through rows and check CPU %
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {

        const cells = rows.nth(i).locator('td');
        const cpuText = (await cells.nth(cpuColIndex).textContent())?.trim();

        // Convert "5%" → 5
        const cpuValue = parseFloat(cpuText.replace('%', ''));

        if (cpuValue > 3) {
            console.log(`Row ${i + 1}   CPU Usage: ${cpuValue}%`);
            console.log(await rows.nth(i).textContent());
            console.log('--------------------------');
        }
    }
});
test('From a table write the prices of products greater than 10$ ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');
    const headers = table.locator('thead tr th');
    const rows = table.locator('tbody tr');
    const rcount = await rows.count();
    const pagloc = await page.locator("//ul[@class='pagination']/li/a");
    const pagCount = await pagloc.count();

    for (let p = 0; p < pagCount; p++) {

        if (p > 0) {
            await pagloc.nth(p).click();
        }

        for (let i = 0; i < rcount; i++) {
            const currRow = await rows.nth(i);
            const cell = await currRow.locator('td').nth(2).textContent();
            const cellVal = await parseFloat(cell.replace('$', ''));
            if (cellVal > 10) {
                const celldata = await currRow.locator('td').nth(1).textContent();
                console.log(`Name is ${celldata}`)
            }
        }
        // for (let i = 0; i < rcount; i++) {
        //     const currRow = await rows.nth(i);
        //     const cell = await currRow.locator('td').nth(1).textContent();


        //     console.log(cell)
        // }


    }
})

test('DemoQA/webtables', async({page})=>{

    await page.goto('https://demoqa.com/webtables')

    const table= await page.locator('.rt-table');
    const rows = await table.locator('.rt-tr-group');
    const cols = await table.locator('.rt-resizable-header-content');
    const rCount = await rows.count();
    const cCount = await cols.count();

    console.log(`Total Rows =${rCount} , Total Coloms = ${cCount}`)
    
    for(let i =0; i< rCount; i++){
        const curRow = rows.nth(i);
        const currCell = await curRow.locator('.rt-td').nth(4).textContent();

        //console.log(currCell);
        if (currCell>2000){
            //Getting name of people having salary more than 2000;
            const empNames = await curRow.locator('.rt-td').nth(0).textContent();
            console.log(empNames);
        }

    }

})

test('Countries/webtables', async({page})=>{

    await page.goto('https://cosmocode.io/automation-practice-webtable/')

    const table= await page.locator('table');
    const rows = await table.locator('tbody tr');
    const cols = await table.locator('tbody tr td h3');
    const rCount = await rows.count();
    const cCount = await cols.count();
    console.log(`Total Rows =${rCount} , Total Coloms = ${cCount}`)
    let count = 1;

    for (let i =1; i<rCount; i++){
        const curRow = await rows.nth(i);
        const curCell = await curRow.locator('td').nth(3).textContent();
  
        if(curCell === 'Euro'){
            
            // Country using Euro as currency
            const countries = await curRow.locator('td').nth(1).textContent();            
            console.log(`Country using Euro as currency is ${countries}`)
            count++;
        }
        

    }
    console.log(`Total Countries ${count}`)

})