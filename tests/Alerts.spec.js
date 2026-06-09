//Alerts
//page.once --we can accept or dismiss the alert(used to handle single alert at a time )
//page.on ---only we can accept(because accept only common in all type of alert)(used to handle multiple alert only for skipping purpose)

import {test}from '@playwright/test'
test('simple alert',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')


    //simple alert
    await page.once('dialog',async(dialog)=>{

    await dialog.accept()
    console.log('simple alert:',dialog.message())
})

    await page.locator(' //button[@class="btn btn-danger"] ').click()


//confirmation alert
    await page.locator ('(//a[@class="analystic"])[2]' ).click()

        await page.once('dialog',async(dialog)=>{
        await dialog.accept()
        //wait dialog.dismiss()
        console.log('confirmation alert:',dialog.message())
    })
        await page.locator('//button[@class="btn btn-primary"]').click()

//prompt box

await page.locator('(//a[@class="analystic"])[3]').click()
await page.once('dialog',async(dialog)=>{
  await  dialog.accept('Trend')
    console.log('Prompt box:',dialog.message())
     
   // console.log('Prompt box:',dialog.message())
})

await page.locator('//button[@class="btn btn-info"]').click()
})