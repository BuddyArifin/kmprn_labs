import HomePage from './pages/homePage';
import FacebookPage from './pages/facebookPopUp';
import Commons from './utils/common';

const { user, post } = require('./testData/userData');
const testsuites = require('./testData/test_cases');

fixture `Kumparan`.
  beforeEach(async t => {
    Commons.clearCookies();
  });

test.skip( testsuites[1].scenario[0], async t => {
  const homePage = new HomePage(t);

  await homePage.navigatePage();
  await homePage.inputSearchField('ecommerce');
  await homePage.verifyResultAfterSearchKeyword(); 
  
  const postPage = await homePage.clickFirstNews(t);
  await postPage.verifyCommentColumnsExists();
})

test.skip( testsuites[1].scenario[1], async t => {
  const homePage = new HomePage(t);

  await homePage.navigatePage();
  await homePage.inputSearchField('ecommerce');
  await homePage.verifyResultAfterSearchKeyword(); 
  
  const postPage = await homePage.clickFirstNews(t);
  await postPage.inputComments(post.comments);
  await postPage.clickSendCommaent();
  await postPage.verifyModulLoginExist();
})

test.skip( testsuites[1].scenario[2], async t => {
  const homePage = new HomePage(t);

  await homePage.navigatePage();
  await homePage.inputSearchField('ecommerce');
  await homePage.verifyResultAfterSearchKeyword(); 
  
  const postPage = await homePage.clickFirstNews(t);
  await postPage.inputComments(post.comments);
  await postPage.clickSendCommaent();
  await postPage.clickLoginFB();

  const facebookPage = new FacebookPage(t);
  await facebookPage.inputEmail(user.facebook.email);
  await facebookPage.inputPass(user.facebook.pass);
  await facebookPage.clickLoginButton();

  //Verify Back to Kumparan
})
