import {test}from '@playwright/test'
test('single frame',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')

    //single frame

   const sf= await page.frameLocator('//iframe[@id="singleframe"]')
   await  sf.locator('//input[@type="text"]').fill('HI')

   //multi iframe

   await page.locator('(//a[@class="analystic"])[2]').click()
   const of=await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
  const inf=await of.frameLocator('//iframe[@src="SingleFrame.html"]')
  await inf.locator('//input[@type="text"]').fill('Hi')
})