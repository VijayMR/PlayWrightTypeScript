import { test, expect, Page, Browser, BrowserContext, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

/*
Multiple file also could be selected but in the dom/html we should have the attribute named as multiple
<input id="file-upload" type="file" multiple name="file">
                                    --------
*/

test('singleFile_upload', async () => {
    const browser: Browser = await firefox.launch({ headless: false })
    const browsercontext: BrowserContext = await browser.newContext();
    const page: Page = await browsercontext.newPage();

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("id=file-upload").setInputFiles("scorereport.pdf");
    await page.locator("id=file-submit").click();

    const name: string | null = await page.locator("id=uploaded-files").textContent();

    expect(name).toContain("scorereport.pdf")

    await page.waitForTimeout(5000);


})

test('singleFile_upload And Deselect', async () => {
    const browser: Browser = await firefox.launch({ headless: false })
    const browsercontext: BrowserContext = await browser.newContext();
    const page: Page = await browsercontext.newPage();

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("id=file-upload").setInputFiles("scorereport.pdf");
    await page.locator("id=file-upload").setInputFiles([]);

    await page.waitForTimeout(5000);


})