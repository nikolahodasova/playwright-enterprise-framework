import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Spúšťam Global Setup: Prihlasujem sa pre auth.json...');

  try {
    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.waitForURL('**/inventory.html');

    await page.context().storageState({ path: 'auth.json' });
    
    console.log('auth.json bol úspešne vygenerovaný!');
  } catch (error) {
    console.error('Global Setup zlyhal:', error);
  } finally {
    await browser.close();
  }
}

export default globalSetup;