import {test,expect,Browser,Page, BrowserContext, Locator} from '@playwright/test'
import { webkit,chromium,firefox } from 'playwright'

test('Dropdown based on select',async()=>{
    const browser:BrowserContext=await firefox.launchPersistentContext('',{headless:false});
    const page:Page=await browser.pages()[0];

    await page.goto("https://the-internet.herokuapp.com/dropdown")

    const value="id=dropdown";
    // await page.selectOption(value,{value:'1'}); //--select by value
    // await page.selectOption(value,{label:'Option 2'}); //--select by label
    await page.selectOption(value,{index:1}); //--select by index

    const alloption=await page.$$(value +'> option');//--->$$ is used to get the list of elements i.e findelements
    console.log(alloption.length);

    for(const value of alloption){
        console.log(value.textContent());
    }

    //await new Promise(()=>{})
})