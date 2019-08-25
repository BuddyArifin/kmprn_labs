import HomePage from './pages/homePage';
import Commons from './utils/common';

const { user } = require('./testData/userData');
const testsuites = require('./testData/test_cases');

fixture `Kumparan`.
  beforeEach(async t => {
    Commons.clearCookies();
  });

test.skip( testsuites[0].scenario[2], async t => {
  const homepage = new HomePage(t);

  await homepage.navigatePage();
  const facebookPage = await homepage.clickLoginFBButton(t);
  
  await facebookPage.inputEmail(" ");
  await facebookPage.inputPass(" ");
  await facebookPage.clickLoginButton();
  await facebookPage.verifyErrorMessageDisplay();
});

test.skip( testsuites[0].scenario[3], async t => {
  const homepage = new HomePage(t);

  await homepage.navigatePage();
  const googlePage = await homepage.clickLoginGoogleButton(t);

  await googlePage.inputEmail(" ");
  await googlePage.clickNextButton();
  await googlePage.verifyErrorMessage();
});

test.skip( testsuites[0].scenario[4], async t => {
  const homepage = new HomePage(t);

  await homepage.navigatePage();
  const facebookPage = await homepage.clickLoginFBButton(t);
  
  await facebookPage.inputEmail(user.facebook.email);
  await facebookPage.inputPass(user.facebook.pass);
  await facebookPage.clickLoginButton();

  await homepage.navigatePage();
  await homepage.verifyHomepage();
});

test.skip( testsuites[0].scenario[5], async t => {
  const homepage = new HomePage(t);

  await homepage.navigatePage();
  const googlePage = await homepage.clickLoginGoogleButton(t);

  await googlePage.inputEmail(user.google.email);
  await googlePage.clickNextButton();
  await googlePage.inputPass(user.google.pass);
  await googlePage.clickNextButton();

  await homepage.navigatePage();
  await homepage.verifyHomepage();
});

