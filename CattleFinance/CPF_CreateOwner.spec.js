import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/login.js';
import { OwnerPage } from '../Pages/ownerPage.js';
import {generatePhoneNumber, generateRandomEmail, addressGenerator} from '../Pages/utils.js';


test('Login to Cattle Finance', async ({ page }) => {
  const login = new LoginPage(page);
  const ownerPage = new OwnerPage(page);

const userData = {
  phone: generatePhoneNumber(),
  contact: generatePhoneNumber(),
  email: generateRandomEmail(),
  address: addressGenerator()
};

  await login.gotoLoginPage();
  await login.clickLoginButton();
  await login.login('user@superadmin.com', 'Welcome@HPAdmin');
  await login.clickCattleFinance();
  await ownerPage.clickCreateNewButton();
  await ownerPage.clickNewOwner();
  await ownerPage.fillOwnerName('Jaime');
  await ownerPage.fillOwnerContact(userData.contact);
  console.log(userData.phone); // e.g. "9876543210"
  await ownerPage.fillOwnerEmail(userData.email);
  // await expect(page.locator("//input[@name='phone']")).toBeEnabled();
  // await expect(page.locator("//input[@name='phone']")).toBeVisible();
  await ownerPage.fillOwnerPhone(userData.phone);
  await page.pause();
  // await expect(page.locator("//input[@name='phone']")).toHaveAttribute('maxlength', '10');
  await expect(page.locator("//input[@name='phone']")).toHaveValue(userData.phone);
  await ownerPage.fillOwnerAddress(userData.address);
  await ownerPage.fillOwnerCity('Kansas');
  await ownerPage.fillOwnerState('KS');
  await ownerPage.fillOwnerZipCode('66101');
  await ownerPage.clickSubmit();
});