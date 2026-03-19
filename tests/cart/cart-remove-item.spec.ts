import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Cart Remove Item Test', () => {
    test.describe.configure({ mode: 'parallel' });

    test('User can remove an item from the cart', async ({ loginPage, page, user }) => {
        await loginPage.navigate('/');
        await loginPage.login(
            user.username,
            user.password
        );

        const addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        await addToCartButton.click();
        
        const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        await expect(cartBadge).toHaveText('1');

        const removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        await removeButton.click();

        await expect(cartBadge).not.toBeVisible();
    });
});
