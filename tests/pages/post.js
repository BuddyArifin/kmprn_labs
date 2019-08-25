import { Selector } from 'testcafe';

export default class Post {
  constructor(t) {

    // TestController
    this.testController = t;

    // Elements
    this.url              = 'https://www.kumparan.com/';
    this.commentColumn    = 'div[data-qa-id="input-comment"]';
  }

  async inputComments(keyword) {
    await this.testController.typeText(this.commentColumn, keyword);
  }
}