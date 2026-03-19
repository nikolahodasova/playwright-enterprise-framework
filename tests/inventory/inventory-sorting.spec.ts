import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Inventory Sorting', () => {
    test.describe.configure({ mode: 'parallel' });

    test('User can sort products by price from low to high', async ({ loginPage, page, user }) => {
        await loginPage.navigate('/');
        await loginPage.login(user.username, user.password);

        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

        const priceLocators = page.locator('.inventory_item_price');
        
        const allPricesText = await priceLocators.allInnerTexts();
        const prices = allPricesText.map(price => parseFloat(price.replace('$', '')));

        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
        }
    });
});