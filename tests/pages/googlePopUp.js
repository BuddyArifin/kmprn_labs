import { Selector, Role } from 'testcafe';
import { ClientFunction } from 'testcafe';

export default class GooglePopUp {
    constructor(t) {

      // TestController
      this.testController = t;

      // Elements
      this.url              = 'https://www.facebook.com/';
      this.googleUrl        = 'https://accounts.google.com/';
      this.email            = 'input[type="email"]';
      this.nextButton       = 'div[jsname="Njthtb"]';
      this.pass             = 'input[aria-label="Masukkan sandi Anda"]';
      this.errorMessage     = 'span.TQGan'
      this.firstAccount     = 'ul.FPFGmf > li:nth-child(1)';
    }

    async loginGoogle(email, pass) {
      return Role(this.googleUrl, async () => {
        await this.testController
        .typeText(this.email, email, {paste: true})
        .click(this.nextButton)
        .typeText(this.pass, pass)
        .click(this.nextButton);
      });
    }

    async clickFirstAccount() {
      await this.testController.click(Selector(this.firstAccount));
    }

    async inputEmail(email) {
      await this.testController.typeText(this.email, email, {paste: true});
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