import { test, expect, Browser, Page, BrowserContext, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Mouse Hover', async () => {
    const browser: Browser = await firefox.launch({ headless: false })
    const browsercontext: BrowserContext = await browser.newContext();
    const page: Page = await browsercontext.newPage();

    await page.goto("https://www.bigbasket.com/");

    await page.locator("xpath=(//span[contains(text(),'Shop by')])[2]").click();
    await page.locator("xpath=(//ul//li//a[text()='Electronics'])[2]").hover();
    await page.waitForTimeout(1000);
    await page.locator("xpath=(//ul//li//a[text()='Home Appliances'])[2]").hover();
    await page.waitForTimeout(1000);
    await page.locator("xpath=(//ul//li//a[text()='Dishwasher'])[1]").click();
    console.log('Clicked on the dishwasher tab......')

    //await new Promise(()=>{})
})

test('Mouse Related Operations in firefox normal window', async () => {
    const browser: BrowserContext = await firefox.launchPersistentContext('', { headless: false })
    const page: Page = await browser.pages()[0];

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    const btndoubleClick: Locator = await page.getByText("Double-Click Me To See Alert");
    await btndoubleClick.dblclick();//--> Double click
    console.log("Double Click is done!!!...")

    const btnRightclick = await page.getByText("right click me");
    await btnRightclick.click({ button: 'right' }); //---> Right Click
    console.log("Right Click is done!!!....")

    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText("Example 1: Menu Element").click({ modifiers: ['Shift'] });//-->shift +click
    await page.waitForTimeout(5000)


    //await new Promise(()=>{})
})

test('Mouse Related Operations in chrome Incognito window', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' })
    const page: Page = await browser.newPage();

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    const btndoubleClick: Locator = await page.getByText("Double-Click Me To See Alert");
    await btndoubleClick.dblclick();//--> Double click
    console.log("Double Click is done!!!...")

    const btnRightclick = await page.getByText("right click me");
    await btnRightclick.click({ button: 'right' }); //---> Right Click
    console.log("Right Click is done!!!....")

    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText("Example 1: Menu Element").click({ modifiers: ['Shift'] });//-->shift +click

    console.log("Drag and Drop......")
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.locator("id=column-a").dragTo(await page.locator("id=column-b"))

    console.log("Drag and Drop using mouse action......")
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.locator("id=column-a").hover();
    await page.mouse.down();
    await page.locator("id=column-b").hover();
    await page.mouse.up();


    await page.waitForTimeout(5000)


    //await new Promise(()=>{})
})