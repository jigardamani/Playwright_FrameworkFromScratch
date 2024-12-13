import {Page, expect} from '@playwright/test';

export class homePage{
    private readonly HomePageTitle = `[title='Service Setup']`;

    constructor(private page:Page){

    }

    async ValidateHomePage(title:string):Promise<void>{
        console.log(`Title of the page is: ${title}`);
        await expect(this.page.locator(this.HomePageTitle)).toBeVisible({timeout: 15000});
    }




}