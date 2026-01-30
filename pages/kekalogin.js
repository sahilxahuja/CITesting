const { chromium } = require('@playwright/test');

    (async () => {

        const browser = await chromium.launch({headless:false});
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://telemerge.keka.com/')


        await page.getByRole('button', { name: 'Continue with Mobile' }).click();
        await page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
        await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('8439294635');
        await page.getByRole('button', { name: 'Send OTP' }).click();
        console.log('Waiting for OTP to be entered manually...');
        await page.getByRole('link', { name: 'Dashboard' }).waitFor({ timeout: 120000 });
        
        // await page.getByRole('link', { name: 'Dashboard' }).click();
        // 
        // await page.getByText('Web Clock-In').click();
        //await page.getByRole('button', { name: 'Web Clock-out' }).click();
        // await page.getByRole('button', { name: 'Clock-out' }).click();

        await context.storageState({ path: 'auth.json' });

        await browser.close();




    })();
