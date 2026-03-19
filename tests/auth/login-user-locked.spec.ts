import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Login with Locked User Test', () => {
    test.describe.configure({ mode: 'parallel' });

    test('Login with locked_out_user displays specific error message', async ({ loginPage, page }) => {
        await loginPage.navigate('/');

        await loginPage.login('locked_out_user', 'secret_sauce');
        
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Sorry, this user has been locked out');
    });
});
