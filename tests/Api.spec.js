const {test, expect} = require('@playwright/test') ;

test('Dog Get api', async({request})=>{

   const response=  await request.get('https://dogapi.dog/api/v2/breeds/f9643a80-af1d-422a-9f15-18d466822053')
//    const resBody = await response.json();
//    console.log(resBody)
   await expect(response.status()).toBe(404);

})