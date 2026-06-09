import{test,expect}from '@playwright/test'
test('web table',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')

//only  data from table single row
    const rowdata= await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(rowdata)
//assertion means checking the original value and received value
    await expect(rowdata).toEqual([
  'Tiger Nixon',
  'System Architect',
  'Edinburgh',
  '61',
  '2011/04/25',
  '$320,800'
])

//only coloumn data 
   const salColoumn=await page.locator('//table[@id="table02"]//tbody//tr//td[6]').allTextContents()
   console.log(salColoumn)

//specific data from table
   const specific= await page.locator('//table[@id="table02"]//tbody//tr[25]//td[3]').textContent()
   console.log(specific)
   //assertion
   await expect(specific).toEqual('London')


})






























//  for(let i=1;i<=10;i++){
//        const de= await page.locator(`//table[@id="table02"]//tbody//tr[${i}]//td`).allTextContents()
//         console.log(de)
//     }