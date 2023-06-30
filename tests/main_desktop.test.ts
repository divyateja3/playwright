import { test, expect } from '@playwright/test';
import { devices } from 'playwright-core';

test.use(devices['Desktop Chrome'])

const redirectTests = [
    {
        name: 'securities_redirect',
        menuButton: 'Funds',
        locatorTag: 'a[href="https://radientanalytics.com/analysis/"]',
        expectedUrl: /analysis/
    },
    {
        name: 'screener_redirect',
        menuButton: 'Funds',
        locatorTag: 'a[href="https://radientanalytics.com/fund-explorer/"]',
        expectedUrl: /fund-explorer/
    },
    {
        name: 'portfolios_redirect',
        menuButton: 'Funds',
        locatorTag: 'a[href="https://radientanalytics.com/portfolios-public/"]',
        expectedUrl: 'https://radientanalytics.com/portfolios-public'
    },
    {
        name: 'SEC Filings explorer_redirect',
        menuButton: 'Filings',
        locatorTag: 'a[href="https://radientanalytics.com/regexplorer/landing/"]',
        expectedUrl: 'https://radientanalytics.com/regexplorer/landing'
    },
    {
        name: 'Advisers_redirect',
        menuButton: 'Filings',
        locatorTag: 'a[href="https://radientanalytics.com/form-adv/"]',
        expectedUrl: /form-adv/
    },
    {
        name: '13F Holdings_redirect',
        menuButton: 'Filings',
        locatorTag: 'a[href="https://radientanalytics.com/form13fhome/"]',
        expectedUrl: /form13fhome/
    },
    {
        name: 'Pricing_redirect',
        menuButton: 'Pricing',
        locatorTag: 'a[href = "https://radientanalytics.com/web/plans"]',
        expectedUrl: 'https://radientanalytics.com/web/plans'
    }
];
const learnORreadmoreTests = [
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
        expectedUrl: 'https://radientanalytics.com/web/about/'
    },
    {
        name: 'read more 1',
        clickLocator: 'a[data-testid="blog-read-more-1"]',
        expectedUrl: 'https://info.radientanalytics.com/blog/radient-hfr-webinar'
    },
    {
        name: 'read more 2',
        clickLocator: 'a[data-testid="blog-read-more-2"]',
        expectedUrl: 'https://info.radientanalytics.com/blog/types-of-esg-funds-you-can-invest-in-2023'
    },
    {
        name: 'read more 3',
        clickLocator: 'a[data-testid="blog-read-more-3"]',
        expectedUrl: 'https://info.radientanalytics.com/blog/sub-adviser-due-diligence-with-radient'
    }
];

const TrendingOnRADiENT = [
    {
        name: 'learn more 1',
        clickLocator: 'a[data-test-id="trending-learn-more-1"]',
    },
    {
        name: 'learn more 2',
        clickLocator: 'a[data-test-id="trending-learn-more-2"]',
    },
    {
        name: 'learn more 3',
        clickLocator: 'a[data-test-id="trending-learn-more-3"]',
    },

]

test.beforeEach(async ({ page }) => {
    await page.goto('https://radientanalytics.com');
});  

for (const { name, clickLocator } of TrendingOnRADiENT) {
    test(name, async ({ page }) => {
        test.setTimeout(45000);
        const locator = page.locator(clickLocator);
        await locator.click();
    })
}

for (const { name, clickLocator, expectedUrl } of learnORreadmoreTests) {
    test(name, async ({ page }) => {
        test.setTimeout(45000);
        const locator = page.locator(clickLocator);
        await locator.click();
        await expect(page).toHaveURL(expectedUrl);
    })
}

redirectTests.forEach(({ name, menuButton, locatorTag, expectedUrl }) => {
    test(name, async ({ page }) => {
        test.setTimeout(45000);
        await page.getByRole('button', { name: menuButton }).hover()
        await page.click(locatorTag);
        await page.waitForLoadState('load'); 
        await page.click('a[href="https://radientanalytics.com/login"]');
        await page.waitForTimeout(3000); 
        await page.locator('[data-test-id="login-username"]').click();
        await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
        await page.locator('[data-test-id="login-password"]').click();
        await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
        await page.locator('[data-test-id="login-button"]').click();
        await expect(page).toHaveURL(expectedUrl);
        });
    });


test('logout', async ({ page }) => {
    await page.click('a[href="https://radientanalytics.com/login"]');
    await page.waitForLoadState(); 
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.waitForLoadState(); 
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    //await page.locator('[data-test-id="login-password"]').press('Enter');
    await page.locator('[data-test-id="login-button"]').click();
    await page.locator('[id="User Profile-menu-button"]').hover();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    const loginButtonVisible = await page.isVisible('a[href="https://radientanalytics.com/login"]');
    expect(loginButtonVisible).toBe(true);
});

test('youmaylike', async ({ page }) => {
    await page.locator('[id="securities-search"]').fill('VIVAX');
    await page.locator('[id="securities-search"]').click();
    await page.waitForLoadState(); 
    await page.focus('[id="securities-search"]'); 
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    await page.locator('[id="securities-search-option-0"]').click();
    await page.waitForLoadState(); 

    await expect(page).toHaveURL('https://radientanalytics.com/analysis/96%7Cf');
    // await page.waitForTimeout(6000); 

    await page.waitForLoadState('load'); 
    await expect(page.locator('#top-similar-funds > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-stage-outer > div.owl-stage > div:nth-child(6) > div')).toBeVisible();
    await expect(page.locator('#top-similar-funds > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-stage-outer > div.owl-stage > div:nth-child(7) > div')).toBeVisible();

})

test('similarsecurities', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await page.waitForLoadState(); 
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-button"]').click();
    await page.locator('[id="securities-search"]').fill('VIVAX');
    await page.locator('[id="securities-search"]').click();
    await page.waitForLoadState(); 
    await page.focus('[id="securities-search"]'); 
    await page.locator('[id="securities-search-option-0"]').click();
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    await expect(page).toHaveURL('https://radientanalytics.com/analysis/96%7Cf');
    await page.waitForLoadState('networkidle'); 
    await expect(page.locator('#top-similar-funds > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-stage-outer > div.owl-stage > div:nth-child(6) > div')).toBeVisible();
    await expect(page.locator('#similar-funds > div > div > div > div:nth-child(6) > similar-funds > div:nth-child(2) > div > table > tbody > tr.similar-funds-selected')).toBeVisible();
    await expect(page.locator('#similar-funds > div > div > div > div:nth-child(6) > similar-funds > div:nth-child(2) > div > table > tbody > tr:nth-child(2)')).toBeVisible();
    await expect(page.locator('#similar-funds > div > div > div > div:nth-child(6) > similar-funds > div:nth-child(2) > div > table > tbody > tr:nth-child(21)')).toBeVisible();
})


test('Ncen_Nport', async ({ page }) => {
    await page.locator('[id="securities-search"]').fill('VIVAX');
    await page.locator('[id="securities-search"]').click();
    await page.waitForLoadState(); 
    await page.focus('[id="securities-search"]'); 
    await page.locator('[id="securities-search-option-0"]').click();
    await expect(page).toHaveURL('https://radientanalytics.com/analysis/96%7Cf');
    await page.waitForLoadState(); 
    await expect(page.locator('#security-form-nport-details > div:nth-child(1) > table > tbody > tr:nth-child(1)')).toBeVisible();
    await expect(page.locator('#security-form-nport-details > div:nth-child(1) > table > tbody > tr:nth-child(4)')).toBeVisible();
    await expect(page.locator('#rad-ui-view > ui-view > div.container-fluid > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div > div > div')).toBeVisible();
})