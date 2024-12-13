import {Page} from '@playwright/test';

export class loginPage{
    private readonly usernameInputSelector = `#username`;
    private readonly passwordInputSelector = `#password`;
    private readonly loginButtonSelector = `#Login`;

    constructor(private page:Page){

    }

    async navigatetologinpage(){
        await this.page.goto("/");
    }

    async fillusername(username:string):Promise<void>{
        console.log(`username is: ${username}`);
        await this.page.locator(this.usernameInputSelector).fill(username);
    }

    async fillpassword(password:string):Promise<void>{
        console.log(`password is: ${password}`);
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginButton():Promise<void>{
        console.log(`clicking on login button`);
        await this.page.locator(this.loginButtonSelector).click().catch((error) =>{
            console.error(`Error clicking login button: ${error}`);
            throw error;
        }) 
    }






}