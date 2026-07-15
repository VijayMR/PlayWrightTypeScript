import { test, expect, Browser, Locator, BrowserContext, Page } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('Non-incognito browser Launch',async()=>{

    const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'});
    const pages=await browser.pages();
    const page:Page=pages[0];

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    //It runs only in the first tab.
})

test('Non-incognito browser Launch with default behaviour',async()=>{

    const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'});
    const pages:Page=await browser.newPage();
    await pages.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    //First tab would be the empty tab.
})
