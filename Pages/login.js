export class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.openLoginButton = page.getByRole('button', { name: 'Log In' });
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.clickOnCattleFinanceButton = page.locator('button:has-text("CATTLE FINANCE")');
    }

    async gotoLoginPage() {
        await this.page.goto('https://aztest.feedlotmgr.com/');
    }

    async clickLoginButton() {
        await this.openLoginButton.click();
    }

    async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    }  
    async clickCattleFinance() {
        await this.clickOnCattleFinanceButton.click();
    }
}




