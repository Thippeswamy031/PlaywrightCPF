import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/login.js';

test('Login to Cattle Finance', async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await expect(page).toHaveTitle('NextGen AgTech');
  await login.clickLoginButton();
  await login.login('user@superadmin.com', 'Welcome@HPAdmin');
  await login.clickCattleFinance();
  await expect(page).toHaveURL('https://aztest.feedlotmgr.com/lots');
  await page.waitForTimeout(5000);
});

