import {test}from '@playwright/test'
test('dynamic xpath',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[2]').fill('moto  5g mobiles')
    await page.keyboard.press('Enter')
    await page.locator('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh dLgFEE"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::a[@href="/motorola-edge-60-fusion-5g-pantone-amazonite-128-gb/p/itm0ba5c1f57331a?pid=MOBHHD2KXMH9NCYG&lid=LSTMOBHHD2KXMH9NCYGOY7CC7&marketplace=FLIPKART&q=moto+5g+mobile&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=search-autosuggest&iid=7139986d-febc-49e8-8f62-327be69e314f.MOBHHD2KXMH9NCYG.SEARCH&ppt=sp&ppn=sp&ssid=2jv795vhw00000001780310136101&qH=89369dba0419e2ac&ov_redirect=true"]').click()
})