import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const email: Locator = await page.locator("//input[@name='email']");
    const password: Locator = await page.locator("//input[@name='password']");
    const btnLogin: Locator = await page.locator("//input[@type='submit']");

    await email.fill("pwtest@opencart.com");
    await password.fill("playwright@123");
    await btnLogin.click();

    const title:string=await page.title();
    console.log("Title of the page is :: ",title)

    await page.screenshot({path:"LandedPage.png"});
    //expect(title).toEqual("My Account");

    await browser.close;
})