import {test,Browser,Locator,BrowserContext, Page} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'

test('Dropdown Using li',async()=>{
   const browser: BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
   const page:Page=await browser.pages()[0]

    await page.goto("https://www.bigbasket.com/");
    await page.locator("xpath=(//span[contains(text(),'Shop by')])[2]").click();
    await page.waitForTimeout(3000);

    const dropdownlist:Locator=await page.locator("xpath=(//ul[@role='none'])[1]//li")
    const length=await dropdownlist.count();

    // for(const index in await dropdownlist){
    //    const value = await dropdownlist[index].textContent();
    //    console.log("The dropdown value is :: ",value);
    // }     
    
    
    // for..in should not be used it is used in the iteration of array only..
    

    for(let i=0;i<length;i++){
        const value=await dropdownlist.nth(i).textContent();
        console.log("The dropdown value is :: ",value);
    }
    
})