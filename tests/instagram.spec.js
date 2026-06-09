import {test}from '@playwright/test'
test('instagram login',async({page})=>{
    await page.goto('https://www.instagram.com/')//URL Launch
    await page.locator('//input[@name="email"]').fill('jerry._.jega')//Entering values into username text field
    await page.locator('//input[@type="password"]').fill('Jega@16')//Entering values into password text field
    
    await page.locator('//span[text()="Log in"]').click//login here
    await page.setDefaultTimeout(5000)
})