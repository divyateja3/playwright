import { test, expect } from '@playwright/test';
import { devices } from 'playwright-core';

test.use({ browserName: 'webkit' });
test.describe('Securities Redirect', () => {
    const iPhone = devices['iPhone 12 Pro'];
    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: iPhone.viewport.width, height: iPhone.viewport.height });
    });

    test('should redirect to analysis page after login', async ({ page }) => {
        await page.goto('http://test.radientanalytics.com/');
        await page.locator('_react = button[id = "menu-button"]').click();
        // await page.click('[data-test-id="menu-button"]');
        await page.locator('_react=ti[key = "funds"]').click();
        await page.locator('_react=button[href="http://test.radientanalytics.com/fund-explorer/"]').click();

        // await page.locator('a[href="http://test.radientanalytics.com/analysis/"]').nth(2).click();
        await page.click('a:has-text("Login")');
        await page.fill('[data-test-id="login-username"]', 'chava.teja@radientanalytics.com');
        await page.fill('[data-test-id="login-password"]', '123RiskAdv');
        await page.click('[data-test-id="login-button"]');
        await expect(page).toHaveURL(/analysis/);
    });
});

test.use({ browserName: 'webkit', viewport: devices['iPhone 12 Pro'].viewport });

