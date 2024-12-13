import {test} from '@playwright/test';
import {loginPage} from '../pages/loginPage';
import {homePage} from '../pages/homePage';

test('test', async({page})=>{
    const loginpage = new loginPage(page);

    await loginpage.navigatetologinpage();
    await loginpage.fillusername("jigar.damani07@gmail.com");
    await loginpage.fillpassword("Summer@1");
    await loginpage.clickLoginButton();

    const homepage = new homePage(page);
    await homepage.ValidateHomePage("Service Setup");
}




)