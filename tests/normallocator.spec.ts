import { test, Page, Browser, BrowserContext, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Normal Locators', async () => {
    const browser: Browser = await firefox.launch({ headless: false })
    const browsercontext: BrowserContext = await browser.newContext();
    const page: Page = await browsercontext.newPage();
    await page.goto("https://the-internet.herokuapp.com/login")

    //Id locator  - should be id='';
    //class locator  - should be '.classname';
    //text locator - should be text='';
    //css locator - should be css='';
    //xpath locator - should be xpath='//button[@type='submit']'; -->sample
    const username: Locator = await page.locator("id=username");
    const password: Locator = await page.locator("id=password");
    const loginBtn: Locator = await page.locator("//button[@type='submit']");

    await username.fill("tomsmith");
    await username.clear();
    await username.pressSequentially("tomsmith");//-->type sequentially fast
    await password.fill("SuperSecretPassword!");
    await password.clear();
    await password.pressSequentially("SuperSecretPassword!", { delay: 500 });//-->type sequentially manually like user
    if (await loginBtn.isEnabled()) {
        await loginBtn.click();
    }

    await page.locator(" //i[text()=' Logout']").click();
    //await new Promise(()=>{}) //prevent code from exiting
})