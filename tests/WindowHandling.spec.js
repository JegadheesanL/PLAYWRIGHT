// import {test}from '@playwright/test'
// test('Window Handling',async({browser})=>{
// //const browser=await chromium.launch()
// const context=await browser.newContext()
// const page=await context.newPage()
// await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=808942225170&hvpos=&hvnetw=g&hvrand=7037900777103276966&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9237045&hvtargid=kwd-10573980&hydadcr=14453_2459472&gad_source=1')
// await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
// await page.keyboard.press('Enter')


// const [newPage]=await Promise.all([context.waitForEvent('page'),
//  page.click('//h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro 256 GB: 15.93 cm (6.3″)")]')])

//  await newPage.waitForLoadState()
//  const title1=await newPage.title()
//  console.log(title1)
// })

import{test,chromium}from '@playwright/test'
test('window handle',async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=808942225170&hvpos=&hvnetw=g&hvrand=7037900777103276966&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9237045&hvtargid=kwd-10573980&hydadcr=14453_2459472&gad_source=1')
await page.locator('id=twotabsearchtextbox').fill('iphone 17 pro')
await page.keyboard.press('Enter')

const page1=  context.waitForEvent('page')
await page.locator('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"])[1]').click()
const newPage=await page1
})
