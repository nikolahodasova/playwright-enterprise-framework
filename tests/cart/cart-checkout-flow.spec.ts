import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Checkout Flow Test', () => {
    test.describe.configure({ mode: 'parallel' });

    test('User can successfully complete checkout', async ({ loginPage, page, user }) => {
        await loginPage.navigate('/');
        await loginPage.login(user.username, user.password);

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        
        await page.locator('[data-test="checkout"]').click();

        await page.locator('[data-test="firstName"]').fill('Nikol');
        await page.locator('[data-test="lastName"]').fill('Testovacia');
        await page.locator('[data-test="postalCode"]').fill('81101');
        await page.locator('[data-test="continue"]').click();

        await expect(page).toHaveURL(/.*checkout-step-two/);
        await page.locator('[data-test="finish"]').click();

        const completeHeader = page.locator('[data-test="complete-header"]');
        await expect(completeHeader).toBeVisible();
        await expect(completeHeader).toHaveText('Thank you for your order!');
    });
});  