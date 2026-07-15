import {test,Browser,Locator,BrowserContext, Page} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'

test('Dropdown Using li',async()=>{
   const browser: BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
   const page:Page=await browser.pages()[0]

    await page.goto("https://www.bigbasket.com/");
    
    await page.screenshot({path:"Dropdown.png"}); //---> screenshot
    await page.screenshot({path:"Dropdown1.png", fullPage: true}); //--> full page screenshot

})