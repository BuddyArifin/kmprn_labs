import HomePage from './pages/homePage';
import { ClientFunction } from 'testcafe';

const { user } = require('./testData/userData');
const testsuites = require('./testData/test_cases');

fixture `Kumparan`.
  beforeEach(async t => {
    ClientFunction(() => {
      const cookies = document.cookie.split(";")
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
      })
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

test( testsuites[0].scenario[4], async t => {
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

});

