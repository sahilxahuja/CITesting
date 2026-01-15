const {test, expect} = require('@playwright/test')

test('ProductNames', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator("//input[@id='userEmail']").fill('RF@gmail.com');
    await page.locator("//input[@id='userPassword']").fill('Qwerty@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForSelector(".card b");

    const productNames = await page.$$(".card b");

    for (const product of productNames) {
        const text = await product.textContent();
        console.log(text.toLowerCase());
    }
})

test('Fetching products form DemoBlaze', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')

    await page.waitForSelector('h4 a')
    const products = page.locator('h4 a');
    const count = await products.count();
    console.log(count)
    const pname = ['Sony', 'Samsung', 'Iphone']

    for (let i=0 ; i<count; i++){
        const plocator = await products.nth(i);
        const product = await products.nth(i).textContent();
        //console.log(product)
        for(let p of pname){
            if(product.includes(p)){
                console.log(product)
            }

        }
        // if (product.contains(pname)){
            
        //    console.log(pname);

       

    }   
});


