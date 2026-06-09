import {test}from '@playwright/test'
import { LoginPage } from '../PagePom/Loginpage'
import { SearchHotel } from '../PagePom/SearchHotel'
import { SelectHotel } from '../PagePom/SelectHotel'
import { BookHotel } from '../PagePom/BookHotel'
import { BookingConfirmation } from '../PagePom/BookingConfirmation'

test('POM',async({page})=>{
  const login=new LoginPage(page)
  await  login.url()
  await  login.username()
  await  login.password()
  await login.click()
//====================================================================
   const search=new SearchHotel(page)
   await search.selectLocation()
   await search.selectHotel()
   await search.SelectRoomtype()
   await search.selectNoofroom()
   await search.selectAdultroom()
   await search.selectChildroom()
   await search.click()
//===================================================================

const select=new SelectHotel(page)

await select.selectHotel()
await select.clickContinue()

//===================================================================

const book=new BookHotel(page)
await book.fillFirstName()
await book.fillLastName()
await book.fillBillAddress()
await book.fillCreditCardNum()
await book.fillCreditCardType()
await book.fillExpiryMonth()
await book.fillExpiryYear()
await book.fillCvvNum()
await book.clickBookNow()
//===================================================================

const exit=new BookingConfirmation(page)

await exit.clickLogout()
await page.waitForTimeout(10000)
await exit.PrintLogoutMsg()

})
