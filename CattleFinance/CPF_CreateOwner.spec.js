import { test } from '@playwright/test';
import { LoginPage } from '../Pages/login.js';


test('Login to Cattle Finance', async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.clickLoginButton();
  await login.login('user@superadmin.com', 'Welcome@HPAdmin');
  await login.clickCattleFinance();
  await page.getByRole('button', { name: 'Create New' }).click();
  await page.getByText('New Owner').click();
  await page.locator("//input[@name='name']").fill('Jaime');
      function generatePhoneNumber() {
        const startDigit = ['6', '7', '8', '9'];
        const firstDigit = startDigit[Math.floor(Math.random() * startDigit.length)];
        const remainingDigits = Math.floor(Math.random() * 900000000) + 100000000;
        return firstDigit + remainingDigits; // Already a string (no need for String())
      }

      const phone = generatePhoneNumber();
  console.log(phone); // e.g. "9876543210"
  await page.locator("//input[@name='contact']").fill(phone);
});