import { test, expect, devices } from '@playwright/test';
test.use(devices['Desktop Chrome'])

async function hoverAndWait1(page, selector) {
    await page.hover(selector);
    await page.waitForTimeout(5000); // Wait for 5 seconds
    await page.hover(selector);

    }
    async function waitForMenuVisible(page, menuSelector) {
    await page.waitForSelector(menuSelector, { state: 'visible' });

    }

    test.beforeEach(async ({ page }) => {
    await page.goto('https://radientanalytics.com');
    });

    const simpleTests = [
    {
        name: 'Pricing',
        selector: 'a[href="https://radientanalytics.com/web/plans"]',
        expectedUrl: 'https://radientanalytics.com/web/plans',

    },
    {
        name: 'Sign Up for Free',
        selector: 'a[href="https://radientanalytics.com/web/plans"]',
        expectedUrl: 'https://radientanalytics.com/web/plans',

    },
    {
        name: 'Click Request a Demo button',
        selector: 'a[href="https://radientanalytics.com/web/register-for-demo?p=enterprise"]',
        expectedUrl: 'https://radientanalytics.com/web/register-for-demo?p=enterprise',

    },
    {
        name: 'Click Radient Twitter',
        selector: 'a[href="https://twitter.com/RADiENTinv"]',
        expectedUrl: 'https://twitter.com/RADiENTinv',

    },
    {
        name: 'Click Radient LinkedIn',
        selector: 'a[href="https://www.linkedin.com/company/radient-analytics/"]',
        expectedUrl: 'https://www.linkedin.com/company/radient-analytics/',

    },
    {
        name: 'Click Radient YouTube',
        selector: 'a[href="https://www.youtube.com/channel/UCSOLadbPXfNDJNhNmiCdYSw"]',
        expectedUrl: 'https://www.youtube.com/channel/UCSOLadbPXfNDJNhNmiCdYSw',

    },
    {
        name: 'Click Radient Resources',
        selector: 'a[href="https://info.radientanalytics.com/resources"]',
        expectedUrl: 'https://info.radientanalytics.com/resources',

    },
    {
        name: 'Click SEC Filings',
        selector: 'a[href="https://info.radientanalytics.com/sec-filings"]',
        expectedUrl: 'https://info.radientanalytics.com/sec-filings',

    },

    ];

    simpleTests.forEach(({ name, selector, expectedUrl }) => {
    test(name, async ({ page }) => {
        test.setTimeout(45000); 
        await page.click(selector);
        //await page.waitForLoadState(); 
        try {
        await expect(page).toHaveURL(expectedUrl);
        //console.log("URL is as expected:", expectedUrl);
        } catch (error) {
        const currentUrl = await page.url();
        if (currentUrl.includes("https://www.linkedin.com/authwall?")) {
            console.log("Partial URL match:", currentUrl);
        } else {
            console.error("Unexpected URL:", currentUrl);
        }
        }
    });
    });



    const hoverTests = [
    {
        name: 'Hover Funds and Click Screener',
        hoverSelector: '#funds-menu-button',
        clickSelector: 'a[href="https://radientanalytics.com/fund-explorer/"]',
        expectedUrl: 'https://radientanalytics.com/fund-explorer/'

    },
    {
        name: 'Hover Funds and Click Securities',
        hoverSelector: '#funds-menu-button',
        clickSelector: 'a[href="https://radientanalytics.com/analysis/"]',
        expectedUrl: 'https://radientanalytics.com/analysis/'

    },
    {
        name: 'Hover Funds and Click Portfolios',
        hoverSelector: '#funds-menu-button',
        clickSelector: 'a[href="https://radientanalytics.com/portfolios-public/"]',
        expectedUrl: 'https://radientanalytics.com/portfolios-public/'

    },
    {
        name: 'Hover Filings and Click SEC Filings Explorer',
        hoverSelector: '#filings-menu-button',
        clickSelector: 'a[href="https://radientanalytics.com/regexplorer/landing/"]',
        expectedUrl: 'https://radientanalytics.com/regexplorer/landing/'

    },
    {
        name: 'Hover Filings and Click Advisers',
        hoverSelector: '#filings-menu-button',
        clickSelector: 'a[href="https://radientanalytics.com/form-adv/"]',
        expectedUrl: 'https://radientanalytics.com/form-adv/'

    },
    {
        name: 'Hover Filings and Click 13F Holdings',
        hoverSelector: '#filings-menu-button',
        clickSelector: 'a[href="https://radientanalytics.com/form13fhome/"]',
        expectedUrl: 'https://radientanalytics.com/form13fhome/'

    },

    ];

    hoverTests.forEach(({ name, hoverSelector, clickSelector, expectedUrl }) => {
    test(name, async ({ page }) => {

        test.setTimeout(60000);
        await hoverAndWait1(page, hoverSelector);
        await waitForMenuVisible(page, clickSelector);
        await page.click(clickSelector);
        await expect(page).toHaveURL(expectedUrl);

    });
    });

    const Sitemaptests = [
    {
        name: 'Check if Funds sitemap link works',
        selector: 'a[href="/sitemap_funds.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_funds.xml',

    },
    {
        name: 'Check if Equities sitemap link works',
        selector: 'a[href="/sitemap_equities.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_equities.xml',

    },
    {
        name: 'Check if Form ADV State sitemap link works',
        selector: 'a[href="/sitemap_form_adv_state.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_form_adv_state.xml',

    },
    {
        name: 'Check if Form ADV SEC sitemap link works',
        selector: 'a[href="/sitemap_form_adv_sec.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_form_adv_sec.xml',

    },
    {
        name: 'Check if Form 13F Firms sitemap link works',
        selector: 'a[href="/sitemap_form_13f_firm.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_form_13f_firm.xml',

    },
    {
        name: 'Check if Form 13F Securities sitemap link works',
        selector: 'a[href="/sitemap_form_13f_security.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_form_13f_security.xml',

    },
    {
        name: 'Check if Form NPORT sitemap link works',
        selector: 'a[href="/sitemap_nport.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_nport.xml',

    },
    {
        name: 'Check if Form NCEN sitemap link works',
        selector: 'a[href="/sitemap_ncen.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_ncen.xml',

    },
    {
        name: 'Check if Website sitemap link works',
        selector: 'a[href="/sitemap_radient_web.xml"]',
        expectedUrl: 'https://radientanalytics.com/sitemap_radient_web.xml',

    },
    {
        name: 'Click Blog',
        selector: 'a[href="https://info.radientanalytics.com/blog"]',
        expectedUrl: 'https://info.radientanalytics.com/blog',

    },
    {
        name: 'Click About',
        selector: 'a[href="https://radientanalytics.com/web/about"]',
        expectedUrl: 'https://radientanalytics.com/web/about',

    },
    {
        name: 'Click Meet the team',
        selector: 'a[href="https://radientanalytics.com/web/team"]',
        expectedUrl: 'https://radientanalytics.com/web/team',

    },
    {
        name: 'Click Help',
        selector: 'a[href="https://radientanalytics.com/web/help"]',
        expectedUrl: 'https://radientanalytics.com/web/help',

    },
    {
        name: 'Click Terms of Use',
        selector: 'a[href="https://radientanalytics.com/web/terms-of-use"]',
        expectedUrl: 'https://radientanalytics.com/web/terms-of-use',

    },
    {
        name: 'Privacy Policy',
        selector: 'a[href="https://radientanalytics.com/web/privacy-policy"]',
        expectedUrl: 'https://radientanalytics.com/web/privacy-policy',

    },

    ];

    for (const testInfo of Sitemaptests) {
    test(testInfo.name, async ({ page }) => {
        
        const [response] = await Promise.all([
        page.waitForResponse(testInfo.expectedUrl),
        page.click(testInfo.selector),
        ]);
        
        expect(response.url()).toBe(testInfo.expectedUrl);
    });
    }

    test('Login', async ({ page }) => {

    await page.click('a[href="https://radientanalytics.com/login"]');
    await page.waitForLoadState(); 
    await page.fill('[data-test-id="login-username"]', 'vaibhav.shelar@radientanalytics.com');
    await page.fill('[data-test-id="login-password"]', '123RiskAdv');
    await page.click('[data-test-id="login-button"]');
    await expect(page).toHaveURL('https://radientanalytics.com/');

    });

    test('Check user "Profile" upon Login', async ({ page }) => {

    await page.click('a[href="https://radientanalytics.com/login"]');
    await page.waitForLoadState();
    await page.fill('[data-test-id="login-username"]', 'vaibhav.shelar@radientanalytics.com');
    await page.fill('[data-test-id="login-password"]', '123RiskAdv');
    await page.click('[data-test-id="login-button"]');
    await expect(page).toHaveURL('https://radientanalytics.com/');
    await page.click('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.rad-styles-t3vqwo[aria-haspopup="true"]');
    await page.click('a[href="https://radientanalytics.com/web/user"]');
    await expect(page).toHaveURL('https://radientanalytics.com/web/user');

    });

    test('Hover Filings and Click SEC Filings Explorer & check Form N-Port', async ({ page }) => {

    test.setTimeout(60000);
    await hoverAndWait1(page, '#filings-menu-button');
    await page.waitForLoadState();
    await waitForMenuVisible(page, 'a[href="https://radientanalytics.com/regexplorer/landing/"]');
    await page.click('a[href="https://radientanalytics.com/regexplorer/landing/"]');
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/landing');
    await page.click('a[href="https://radientanalytics.com/regexplorer/?formName=NPORT-P"]');
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/?formName=NPORT-P');

    });

    test('Hover Filings and Click SEC Filings Explorer & check Form N-CEN', async ({ page }) => {

    test.setTimeout(60000);
    //await page.goto('https://radientanalytics.com/');
    await hoverAndWait1(page, '#filings-menu-button');
    await page.waitForLoadState();
    await waitForMenuVisible(page, 'a[href="https://radientanalytics.com/regexplorer/landing/"]');
    await page.click('a[href="https://radientanalytics.com/regexplorer/landing/"]');
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/landing');
    await page.click('a[href="https://radientanalytics.com/regexplorer/?formName=N-CEN_filers"]');
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/?formName=N-CEN_filers');

});
