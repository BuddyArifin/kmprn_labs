import { Selector } from 'testcafe';

export default class Post {
  constructor(t) {

    // TestController
    this.testController = t;

    // Elements
    this.url              = 'https://www.kumparan.com/';
    this.commentColumn    = 'div[role="textbox"]';
    this.sendComment      = 'button#track_submit_comment';
    this.modulLogin       = 'div[data-qa-id="modal-login"]';
    this.btnModulLoginFB  = 'div[data-qa-id="modal-login"] button[data-qa-id="btn-login-fb"]'
  }

  async inputComments(keyword) {
    await this.testController
      .typeText(this.commentColumn, keyword);
  }

  async clickSendCommaent() {
    await this.testController.click(Selector(this.sendComment));
  }

  async clickLoginFB() {
    await this.testController.click(Selector(this.btnModulLoginFB));
  }

  async verifyModulLoginExist() {
    await this.testController.expect(Selector(this.modulLogin).exists).ok();
  }

  async verifyCommentsNotEmpty() {
    await this.testController.expect(Selector(this.commentColumn).textContent).notEql('');
  }

  async verifyCommentColumnsExists() {
    await this.testController.expect(Selector(this.commentColumn).exists).ok();
  }
}