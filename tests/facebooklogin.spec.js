import{test}from '@playwright/test'
test('facebook launch',async({page})=>{
    await page.goto('https://www.facebook.com/?_rdr')//open URL link in chrome browser main
})
test('facebook launch',async({page})=>{
    await page.goto('https://www.instagram.com')//open URL link in safari branch2
})

