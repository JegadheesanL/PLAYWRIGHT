export class SearchHotel{
    constructor(page)
    {
        this.location=page.locator('//select[@id="location"]')
        this.hotel=page.locator('//select[@id="hotels"]')
        this.roomtype=page.locator('//select[@id="room_type"]')
        this.noofroom=page.locator('//select[@id="room_nos"]')
        this.adultroom=page.locator('//select[@id="adult_room"]')
        this.childroom=page.locator('//select[@id="child_room"]')
        this.search=page.locator('//input[@id="Submit"]')
    }

    async selectLocation()
    {
        await this.location.selectOption({index:1})
    }
    async selectHotel()
    {
        await this.hotel.selectOption({value:"Hotel Sunshine"})
    }
    async SelectRoomtype()
    {
        await this.roomtype.selectOption({label:"Super Deluxe"})
    }
    async selectNoofroom()
    {
        await this.noofroom.selectOption({index:10})
    }
    async selectAdultroom()
    {
        await this.adultroom.selectOption({value:"2"})
    }
    async selectChildroom()
    {
        await this.childroom.selectOption({label:"2 - Two"})
    }
    async click()
    {
        await this.search.click()
    }
}