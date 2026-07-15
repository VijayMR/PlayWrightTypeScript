/* Browser-Context
A Browser Context in Playwright is an isolated browser session within a browser instance. Each context has its own
 cookies, cache, and storage, allowing multiple independent users to be simulated in a single browser. It's similar
  to an Incognito window in Chrome and is used for test isolation and multi-user testing.

  It always launches the browser context in the incognito mode only.
  */

import {test,expect,Locator,Page,Browser, BrowserContext} from '@playwright/test'
import {webkit,chromium,firefox} from 'playwright'

test('Browser Context',async()=>{
    //Browser
    const browser:Browser=await chromium.launch({headless: false,channel:'chrome'}); //--->lauch browser

    //Browser context 1
   const browsercontext_1:BrowserContext= await browser.newContext(); //--> creation of multiple browsers
   const page1:Page=await browsercontext_1.newPage(); //--> accessing the page
   await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    //Browser context 2
   const browsercontext_2:BrowserContext= await browser.newContext();
   const page2:Page=await browsercontext_2.newPage();
   await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    const email1: Locator = await page1.locator("//input[@name='email']");
    const password1: Locator = await page1.locator("//input[@name='password']");
    const btnLogin1: Locator = await page1.locator("//input[@type='submit']");

    await email1.fill("pwtest@opencart.com");
    await password1.fill("playwright@123");
    await btnLogin1.click();

    const email2: Locator = await page2.locator("//input[@name='email']");
    const password2: Locator = await page2.locator("//input[@name='password']");
    const btnLogin2: Locator = await page2.locator("//input[@type='submit']");

    await email2.fill("pwtest@opencart.com");
    await password2.fill("playwright@123");
    await btnLogin2.click();

    await browsercontext_1.close(); //--> closing the browser context
    await browsercontext_2.close();

    await browser.close(); //--> closing the browser.

})