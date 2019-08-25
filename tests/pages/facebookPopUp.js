import { Selector } from 'testcafe';

export default class FacebookPopUp {
    constructor(t) {

        // TestController
        this.testController = t;

        // Elements
        this.url              = 'https://www.facebook.com/';
        this.email            = '#email';
        this.pass             = '#pass';
        this.loginButton      = '#u_0_0';
        this.confirmAccessFb  = 'button[name="__CONFIRM__"]';
        this.errorMessage     = '.pam.login_error_box.uiBoxRed';
    }

    async inputEmail(email) {
      await this.testController.typeText(this.email, email);
    }

    async inputPass(pass) {
      await this.testController.typeText(this.pass, pass);
    }

    async clickLoginButton() {
      await this.testController.click(this.loginButton);
    }

    async clickConfirm() {
      await this.testController.click(this.confirmAccessFb);
    }

    async verifyErrorMessageDisplay() {
      await this.testController.expect(Selector(this.errorMessage).exists).ok();
    }

}