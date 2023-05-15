import { test, expect } from '@playwright/test';

    const redirectTests = [
        {
            name: 'securities_redirect',
            menuButton: 'Funds',
            locatortag: 'a[href="http://test.radientanalytics.com/analysis/"]',
            expectedUrl: /analysis/
        },
        {
            name: 'screener_redirect',
            menuButton: 'Funds',
            locatortag: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
            expectedUrl: /fund-explorer/
        },
        {
            name: 'portfolios_redirect',
            menuButton: 'Funds',
            locatortag: 'a[href="http://test.radientanalytics.com/portfolios-public/"]',
            expectedUrl: 'http://test.radientanalytics.com/portfolios-public'
        },
        {
            name: 'SEC Filings explorer_redirect',
            menuButton: 'Filings',
            locatortag: 'a[href="http://test.radientanalytics.com/regexplorer/landing/"]',
            expectedUrl: 'http://test.radientanalytics.com/regexplorer/landing'
        },
        {
            name: 'Advisers_redirect',
            menuButton: 'Filings',
            locatortag: 'a[href="http://test.radientanalytics.com/form-adv/"]',
            expectedUrl: /form-adv/
        },
        {
            name: '13F Holdings_redirect',
            menuButton: 'Filings',
            locatortag: 'a[href="http://test.radientanalytics.com/form13fhome/"]',
            expectedUrl: /form13fhome/
        },
        {
            name: 'Pricing_redirect',
            menuButton: 'Pricing',
            locatortag: 'a[href = "http://test.radientanalytics.com/web//plans"]',
            expectedUrl: 'http://test.radientanalytics.com/web/plans'
        }
    ];
    
redirectTests.forEach(({ name, menuButton, locatortag,expectedUrl }) => {
    test(name, async ({ page }) => {
        // test.setTimeout(70000);
        await page.goto('http://test.radientanalytics.com/');
        await page.getByRole('button', { name: menuButton }).hover()
        await page.click(locatortag);
        await page.getByRole('link', { name: 'Login' }).click();
        await page.locator('[data-test-id="login-username"]').click();
        await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
        await page.locator('[data-test-id="login-password"]').click();
        await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
        await page.locator('[data-test-id="login-button"]').click();
        await expect(page).toHaveURL(expectedUrl);
    });
});    

    const learnORreadmoreTests = [
        {
        name: 'Prime Brokers',
        clickLocator: 'a[href="http://test.radientanalytics.com/form-adv/"]',
        val: 1,
        expectedUrl: /form-adv/
        },
        {
        name: 'Hedge Funds',
        clickLocator: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
        val: 1,
        expectedUrl: /fund-explorer/
        },
        {
        name: 'Mutual Funds',
        clickLocator: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
        val: 2,
        expectedUrl: /fund-explorer/
        },
        {
        name: 'Fund360',
        clickLocator: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
        val: 3,
        expectedUrl: /fund-explorer/
        },
        {
        name: 'Regulatory Filings',
        clickLocator: 'a[href="http://test.radientanalytics.com/form-adv/"]',
        val: 2,
        expectedUrl: /form-adv/
        },
        {
        name: 'Own Data',
        clickLocator: 'a[href="http://test.radientanalytics.com/analysis/"]',
        val: 1,
        expectedUrl: /analysis/
        },
        {
        name: 'BuildLM',
        clickLocator: 'a[href="http://test.radientanalytics.com/web/about/"]',
        val: 0,
        expectedUrl: 'http://test.radientanalytics.com/web/about/'
        },
        {
        name: 'RadientAI+HFR',
        clickLocator: 'a[href="https://info.radientanalytics.com/blog/radient-hfr-webinar"]',
        val: 0,
        expectedUrl: 'https://info.radientanalytics.com/blog/radient-hfr-webinar'
        },
        {
        name: 'ESGFunds',
        clickLocator: 'a[href="https://info.radientanalytics.com/blog/types-of-esg-funds-you-can-invest-in-2023"]',
        val: 0,
        expectedUrl: 'https://info.radientanalytics.com/blog/types-of-esg-funds-you-can-invest-in-2023'
        },
        {
        name: 'Sub-Adviser',
        clickLocator: 'a[href="https://info.radientanalytics.com/blog/sub-adviser-due-diligence-with-radient"]',
        val: 0,
        expectedUrl: 'https://info.radientanalytics.com/blog/sub-adviser-due-diligence-with-radient'
        }
    ];
    
learnORreadmoreTests.forEach(({ name, clickLocator, expectedUrl, val }) => {

    test(name, async ({ page }) => {
        // test.setTimeout(70000);
        await page.goto('http://test.radientanalytics.com/');
        const locator = page.locator(clickLocator).nth(val);
        await locator.click();
        await expect(page).toHaveURL(expectedUrl);
    });
});

test('logout', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
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





