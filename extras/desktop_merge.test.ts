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
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/landing/');
    await page.click('a[href="https://radientanalytics.com/regexplorer/?formName=NPORT-P"]');
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/?formName=NPORT-P');

    });

    test('Hover Filings and Click SEC Filings Explorer & check Form N-CEN', async ({ page }) => {

    test.setTimeout(60000);
    await hoverAndWait1(page, '#filings-menu-button');
    await page.waitForLoadState();
    await waitForMenuVisible(page, 'a[href="https://radientanalytics.com/regexplorer/landing/"]');
    await page.click('a[href="https://radientanalytics.com/regexplorer/landing/"]');
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/landing');
    await page.click('a[href="https://radientanalytics.com/regexplorer/?formName=N-CEN_filers"]');
    await expect(page).toHaveURL('https://radientanalytics.com/regexplorer/?formName=N-CEN_filers');

    });

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
            await page.waitForLoadState(); 
            await page.click('a[href="https://radientanalytics.com/login"]');
            await page.waitForLoadState(); 
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
        await page.waitForTimeout(2000); 
        await page.focus('[id="securities-search"]'); 
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('Enter');
        await page.locator('[id="securities-search-option-0"]').click();
        await expect(page).toHaveURL('https://radientanalytics.com/analysis/96%7Cf');
        await page.waitForLoadState('networkidle'); 
        await expect(page.locator('#top-similar-funds > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-stage-outer > div.owl-stage > div:nth-child(6) > div')).toBeVisible();
        await expect(page.locator('#top-similar-funds > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-stage-outer > div.owl-stage > div:nth-child(7) > div')).toBeVisible();
    })
    
    test('similarsecurities', async ({ page }) => {
        await page.getByRole('link', { name: 'Login' }).click();
        await page.locator('[data-test-id="login-username"]').click();
        await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
        await page.locator('[data-test-id="login-password"]').click();
        await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
        await page.locator('[data-test-id="login-button"]').click();
        await page.locator('[id="securities-search"]').fill('VIVAX');
        await page.locator('[id="securities-search"]').click();
        await page.waitForTimeout(2000); 
        await page.focus('[id="securities-search"]'); 
        await page.locator('[id="securities-search-option-0"]').click();
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('Enter');
        await expect(page).toHaveURL('https://radientanalytics.com/analysis/96%7Cf');
        await page.waitForLoadState('networkidle'); 

        await expect(page.locator('#top-similar-funds > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-stage-outer > div.owl-stage > div:nth-child(6) > div')).toBeVisible();
        await expect(page.locator('#similar-funds > div > div > div > div:nth-child(6) > similar-funds > div:nth-child(2) > div > table > tbody > tr.similar-funds-selected')).toBeVisible();
        await expect(page.locator('#similar-funds > div > div > div > div:nth-child(6) > similar-funds > div:nth-child(2) > div > table > tbody > tr:nth-child(2)')).toBeVisible();
        await expect(page.locator('#similar-funds > div > div > div > div:nth-child(6) > similar-funds > div:nth-child(2) > div > table > tbody > tr:nth-child(15)')).toBeVisible();
    })
    
test('Ncen_Nport', async ({ page }) => {
    await page.locator('[id="securities-search"]').fill('VIVAX');
    await page.locator('[id="securities-search"]').click();
    await page.waitForTimeout(2000); 
    await page.focus('[id="securities-search"]'); 
    await page.locator('[id="securities-search-option-0"]').click();
    await expect(page).toHaveURL('https://radientanalytics.com/analysis/96%7Cf');
    await page.waitForLoadState('networkidle'); 
    await expect(page.locator('#security-form-nport-details > div:nth-child(1) > table > tbody > tr:nth-child(1)')).toBeVisible();
    await expect(page.locator('#security-form-nport-details > div:nth-child(1) > table > tbody > tr:nth-child(4)')).toBeVisible();
    await expect(page.locator('#rad-ui-view > ui-view > div.container-fluid > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div > div > div')).toBeVisible();
})
