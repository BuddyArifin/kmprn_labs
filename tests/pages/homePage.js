import { Selector } from 'testcafe';
import FacebookPopUp from './facebookPopUp';
import GooglePopUp from './googlePopUp';
import Post from './post';

export default class HomePage {
    constructor(t) {

        // TestController
        this.testController = t;

        // Elements
        this.url              = 'https://www.kumparan.com/';
        this.searchField      = '#track_search_keyword'
        this.resultSearch     = 'span.Textweb__StyledText-sc-2upo8d-0.gDnrfF'
        this.loginFB          = 'button[data-qa-id="btn-login-fb"]'
        this.loginGoogle      = 'button[data-qa-id="btn-login-google"]'
        this.firstPostNews    = '.Viewweb__StyledView-sc-61094a-0.gTzLPT:nth-child(1)';
    }

    async navigatePage() {
      await this.testController.maximizeWindow();
      await this.testController.navigateTo(this.url);
    }

    async inputSearchField(keyword) {
      await this.testController
        .typeText(this.searchField, keyword)
        .pressKey('enter');
    }

    async inputSearchField(keyword) {
      await this.testController.typeText(this.searchField, keyword);
    }

    async clickLoginFBButton(t) {
      await this.testController.click(this.loginFB);
      return new FacebookPopUp(t);
    }

    async clickLoginGoogleButton(t) {
      await this.testController.click(this.loginGoogle);
      return new GooglePopUp(t);
    }

    async clickFirstNews(t) {
      await this.testController.click(this.firstPostNews);
      return new Post(t);
    }

    async verifyResultAfterSearchKeyword() {
      await this.testController.expect(Selector(this.resultSearch).exists).ok();
    }

    async verifyHomepage() {
      await this.testController.expect(Selector(this.searchField).exists).ok();
    }
}
