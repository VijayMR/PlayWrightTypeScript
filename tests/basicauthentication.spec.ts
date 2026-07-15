import { test, expect, Browser, Locator, BrowserContext, Page } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('Basic Authentication', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browsercontext: BrowserContext = await browser.newContext();
    const page: Page = await browsercontext.newPage();

    const username = "admin";
    const password = "admin";

    // const authentication = "Basic " + btoa(username + ":" + password);
    // console.log(authentication);
    page.setExtraHTTPHeaders({ Authorization: createdAuthentication(username,password) });

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
})

function createdAuthentication(username:string,password:string):string{
    return "Basic " + btoa(username + ":" + password);
}