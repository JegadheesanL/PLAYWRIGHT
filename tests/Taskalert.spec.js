import {test}from '@playwright/test'
test('alert',async({page})=>{
    await page.goto('https://demoqa.com/alerts')

    //ok
        await page.once('dialog',async(dialog)=>{
       
        await dialog.accept()
        console.log("ok :",dialog.message())
    })
 await page.locator('//button[@id="alertButton"]').click()//alert click button

  //ok or cancel

        await page.once('dialog',async(dialog)=>{
            await dialog.dismiss()
            console.log("ok or cancel :",dialog.message())
        })


    await page.locator('//button[@id="confirmButton"]').click()  

   //prompt button

    await page.once('dialog',async(dialog)=>{

        await dialog.accept('HI')
        console.log("prompt box:",dialog.message())
        const pmt=await page.locator('//span[@id="promptResult"]').textContent()
        console.log(pmt)
    })

    await page.locator('//button[@id="promtButton"]').click() 

    //alert will appear after 5 sec

    await page.once('dialog',async(dialog)=>{
       
      await  dialog.accept()
        console.log("wait alert:", dialog.message())
    })

    await page.locator('//button[@id="timerAlertButton"]').click()
      await page.waitForTimeout(5000);

})
    

    
