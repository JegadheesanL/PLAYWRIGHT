//DropDwon 
   //await singledd.selectOption({index:0})
   // await singledd.selectOption({value:"1"})
   // await singledd.selectOption({label:"Banana"})

import {test}from '@playwright/test'
test ('Dropdown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
//single dropdown
    const singledd= await page.locator('//select[@id="fruits"]')
    await singledd.selectOption({index:1})
    const text=await singledd.locator('option:checked').textContent()
    console.log(text)


//Multiple dropdown
      // await page.goto('https://letcode.in/dropdowns')
   const mdd=  await page.locator('//select[@id="superheros"]')
   await mdd.selectOption([{ index:1 },{ value: "ff" },{ label: "Guardians of the Galaxy" }])
   const names=await mdd.locator('Option:checked').allTextContents()
   console.log(names)

//Select the last programming language and print all the options

const lan=await page.locator('//select[@id="lang"]')
await lan.selectOption({label:"C#"})
const lan1=await lan.locator('option:checked').textContent()
console.log(lan1)

//Select India using value & print the selected value
const country=await page.locator('//select[@id="country"]')
 await country. selectOption({value:"India"})
const country1=await country.locator('option:checked').textContent()
console.log(country1)


// const sp=await page.locator('//select[@id="lang"]//option').allTextContents()
// console.log(sp)



})