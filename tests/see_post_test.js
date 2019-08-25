import HomePage from './pages/homePage';
import Commons from './utils/common';

const { post } = require('./testData/userData');
const testsuites = require('./testData/test_cases');

fixture `Kumparan`.
  beforeEach(async t => {
    Commons.clearCookies();
  });

test( testsuites[1].scenario[0], async t => {
  const homePage = new HomePage(t);

  await homePage.navigatePage();
  await homePage.inputSearchField('ecommerce');
  await homePage.verifyResultAfterSearchKeyword(); 
  
  const postPage = await homePage.clickFirstNews(t);
  await postPage.verifyCommentColumnsExists();
})

test( testsuites[1].scenario[1], async t => {
  const homePage = new HomePage(t);

  await homePage.navigatePage();
  await homePage.inputSearchField('ecommerce');
  await homePage.verifyResultAfterSearchKeyword(); 
  
  const postPage = await homePage.clickFirstNews(t);
  await postPage.inputComments(post.comments);
  await postPage.clickSendCommaent();
  await postPage.verifyModulLoginExist();
})

test( testsuites[1].scenario[2], async t => {
  const homePage = new HomePage(t);

  await homePage.navigatePage();
  await homePage.inputSearchField('ecommerce');
  await homePage.verifyResultAfterSearchKeyword(); 
  
  const postPage = await homePage.clickFirstNews(t);
  await postPage.inputComments(post.comments);
  await postPage.clickSendCommaent();
  await postPage.clickLoginFB();
})
