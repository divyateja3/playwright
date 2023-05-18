import { test, expect } from '@playwright/test';
import { devices } from 'playwright-core';

test.use(devices['Desktop Chrome'])

const redirectTests = [
    {
        name: 'securities_redirect',
        menuButton: 'Funds',
        locatorTag: 'a[href="http://test.radientanalytics.com/analysis/"]',
        expectedUrl: /analysis/
    },
    {
        name: 'screener_redirect',
        menuButton: 'Funds',
        locatorTag: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
        expectedUrl: /fund-explorer/
    },
    {
        name: 'portfolios_redirect',
        menuButton: 'Funds',
        locatorTag: 'a[href="http://test.radientanalytics.com/portfolios-public/"]',
        expectedUrl: 'http://test.radientanalytics.com/portfolios-public'
    },
    {
        name: 'SEC Filings explorer_redirect',
        menuButton: 'Filings',
        locatorTag: 'a[href="http://test.radientanalytics.com/regexplorer/landing/"]',
        expectedUrl: 'http://test.radientanalytics.com/regexplorer/landing'
    },
    {
        name: 'Advisers_redirect',
        menuButton: 'Filings',
        locatorTag: 'a[href="http://test.radientanalytics.com/form-adv/"]',
        expectedUrl: /form-adv/
    },
    {
        name: '13F Holdings_redirect',
        menuButton: 'Filings',
        locatorTag: 'a[href="http://test.radientanalytics.com/form13fhome/"]',
        expectedUrl: /form13fhome/
    },
    {
        name: 'Pricing_redirect',
        menuButton: 'Pricing',
        locatorTag: 'a[href = "http://test.radientanalytics.com/web//plans"]',
        expectedUrl: 'http://test.radientanalytics.com/web/plans'
    }
];
const learnORreadmoreTests = [
    {
        name: 'learn more 1',
        clickLocator: 'a[data-test-id="trending-learn-more-1"]',
        expectedUrl: /fund-explorer/
    },
    {
        name: 'learn more 2',
        clickLocator: 'a[data-test-id="trending-learn-more-2"]',
        expectedUrl: /fund-explorer/
    },
    {
        name: 'learn more 3',
        clickLocator: 'a[data-test-id="trending-learn-more-3"]',
        expectedUrl: /form-adv/
    },
    {
        name: 'learn more 4',
        clickLocator: 'a[data-test-id="feature-cta-fund-360}"]',
        expectedUrl: /fund-explorer/
    },
    {
        name: 'learn more 5',
        clickLocator: 'a[data-test-id="feature-cta-regulatory-filings}"]',
        expectedUrl: /form-adv/
    },
    {
        name: 'learn more 6',
        clickLocator: 'a[data-test-id="feature-cta-integrate-data}"]',
        expectedUrl: /analysis/
    },
    {
        name: 'learn more 7',
        clickLocator: 'a[data-test-id="feature-cta-radient-partners}"]',
        expectedUrl: 'http://test.radientanalytics.com/web/about/'
    },
    {
        name: 'read more 1',
        clickLocator: 'a[data-test-id="blog-read-more-1"]',
        expectedUrl: 'https://info.radientanalytics.com/blog/radient-hfr-webinar'
    },
    {
        name: 'read more 2',
        clickLocator: 'a[data-test-id="blog-read-more-2"]',
        expectedUrl: 'https://info.radientanalytics.com/blog/types-of-esg-funds-you-can-invest-in-2023'
    },
    {
        name: 'read more 3',
        clickLocator: 'a[data-test-id="blog-read-more-3"]',
        expectedUrl: 'https://info.radientanalytics.com/blog/sub-adviser-due-diligence-with-radient'
    }
];

test.beforeEach(async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
});

for (const { name, clickLocator, expectedUrl } of learnORreadmoreTests) {
    test(name, async ({ page }) => {
        await page.goto('http://test.radientanalytics.com/');
        const locator = page.locator(clickLocator);
        await locator.click();
        await expect(page).toHaveURL(expectedUrl);
    })
}

redirectTests.forEach(({ name, menuButton, locatorTag, expectedUrl }) => {
    test(name, async ({ page }) => {
        // await page.getByRole('button', { name: menuButton }).hover()
        await page.locator('[data-test-id="funds-menu-button"]').hover()
        await page.click(locatorTag);
        await page.getByRole('link', { name: 'Login' }).click();
        await page.locator('[data-test-id="login-username"]').click();
        await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
        await page.locator('[data-test-id="login-password"]').click();
        await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
        await page.locator('[data-test-id="login-button"]').click();
        await expect(page).toHaveURL(expectedUrl);
      });
  });
    

test('logout', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-password"]').press('Enter');
    await page.locator('[id="User\\ Profile-menu-button"]').hover();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    const loginButton = page.getByRole('link', { name: 'Login' });
    await expect(loginButton).toBeVisible();
});
