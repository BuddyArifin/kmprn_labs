import { Selector } from 'testcafe';

export default class GooglePopUp {
    constructor(t) {

      // TestController
      this.testController = t;

      // Elements
      this.url              = 'https://www.facebook.com/';
      this.email            = 'input[aria-label="Email atau ponsel"]';
      this.nextButton       = 'div[jsname="Njthtb"]';
      this.pass             = 'input[aria-label="Masukkan sandi Anda"]';
      this.errorMessage     = 'span.TQGan'
    }

    async inputEmail(email) {
      await this.testController.click(this.email);
      await this.testController.typeText(this.email, email);
    }

    async inputPass(pass) {
      await this.testController.typeText(this.pass, pass);
    }

    async clickNextButton() {
      await this.testController.click(this.nextButton);
    }

    async verifyErrorMessage() {
      await this.testController.expect(Selector(this.errorMessage).exists).ok();
    }
}