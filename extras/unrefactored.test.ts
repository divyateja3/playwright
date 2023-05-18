import { test, expect } from '@playwright/test';

test('securities_redirect', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/')
    await page.getByRole('button', { name: 'Funds' }).hover()
    await page.click('a[href="http://test.radientanalytics.com/analysis/"]');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-button"]').click();
    await expect(page).toHaveURL(/analysis/);
});

test('screener_redirect', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/')
    await page.getByRole('button', { name: 'Funds' }).hover()
    await page.click('a[href="http://test.radientanalytics.com/fund-explorer/"]');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-button"]').click();
    await expect(page).toHaveURL(/fund-explorer/);
});

test('portfolios_redirect', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/')
    await page.getByRole('button', { name: 'Funds' }).hover()
    await page.click('a[href="http://test.radientanalytics.com/portfolios-public/"]');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-button"]').click();
    await expect(page).toHaveURL("http://test.radientanalytics.com/portfolios-public");
});

test('SEC Filings explorer_redirect', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/')
    await page.getByRole('button', { name: 'Filings' }).hover()
    await page.click('a[href="http://test.radientanalytics.com/regexplorer/landing/"]');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-button"]').click();
    await expect(page).toHaveURL("http://test.radientanalytics.com/regexplorer/landing");
});

test('Advisers_redirect', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/')
    await page.getByRole('button', { name: 'Filings' }).hover()
    await page.click('a[href="http://test.radientanalytics.com/form-adv/"]');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-button"]').click();
    await expect(page).toHaveURL(/form-adv/);
});

test('13F Holdings_redirect', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/')
    await page.getByRole('button', { name: 'Filings' }).hover()
    await page.click('a[href="http://test.radientanalytics.com/form13fhome/"]');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.locator('[data-test-id="login-username"]').click();
    await page.locator('[data-test-id="login-username"]').fill('chava.teja@radientanalytics.com');
    await page.locator('[data-test-id="login-password"]').click();
    await page.locator('[data-test-id="login-password"]').fill('123RiskAdv');
    await page.locator('[data-test-id="login-button"]').click();
    await expect(page).toHaveURL(/form13fhome/);
});


test('#primebrokersLM', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
    // await page.locator('.MuiCardActions-root > a').first().click();
    const locator = page.locator('a[href="http://test.radientanalytics.com/form-adv/"]').nth(1);
    await locator.click();
    await expect(page).toHaveURL(/form-adv/);

});

test('#hedgefundsLM', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
    const locator =  page.locator('a[href="http://test.radientanalytics.com/fund-explorer/"]').nth(1);
    await locator.click();
    // await page.locator('div:nth-child(2) > .MuiPaper-root > .MuiCardActions-root > a').first().click();
    await expect(page).toHaveURL(/fund-explorer/);

});

test('#mutualfundsLM', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
    const locator = page.locator('a[href="http://test.radientanalytics.com/fund-explorer/"]').nth(2);
    await locator.click();
    // await page.locator('div:nth-child(3) > .MuiPaper-root > .MuiCardActions-root > a').first().click();
    await expect(page).toHaveURL(/fund-explorer/);
});

test('Fund360LM', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
    const locator = page.locator('a[href="http://test.radientanalytics.com/fund-explorer/"]').nth(3);
    await locator.click();
    // await page.locator('.MuiBox-root > div:nth-child(3) > .MuiButtonBase-root').first().click();
    await expect(page).toHaveURL(/fund-explorer/);

});

test('RegulatoryFilingsLM', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
    const locator = page.locator('a[href="http://test.radientanalytics.com/form-adv/"]').nth(2);
    await locator.click();
    // await page.locator('.MuiPaper-root > div:nth-child(2) > div:nth-child(3) > .MuiButtonBase-root')
    await expect(page).toHaveURL(/form-adv/);

});

test('owndataLM', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
    const locator = page.locator('a[href="http://test.radientanalytics.com/analysis/"]').nth(1);
    await locator.click();
    // await page.locator('.MuiBox-root > div:nth-child(3) > .MuiButtonBase-root').first().click();
    await expect(page).toHaveURL(/analysis/);

});

test('BuildLM', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/');
    const locator = page.locator('a[href="http://test.radientanalytics.com/web/about/"]').nth(0);
    await locator.click();
    // const locator = page.locator('.MuiBox-root > div:nth-child(2) > .MuiButtonBase-root').first();
    // await locator.click()
    
    await expect(page).toHaveURL("http://test.radientanalytics.com/web/about/");

});


test('learn more 1', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id = "trending-learn-more-1"]');
    await expect(page).toHaveURL(/fund-explorer/)
}); 

test('learn more 2', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id = "trending-learn-more-2"]');
    await expect(page).toHaveURL(/fund-explorer/)
}); 

test('learn more 3', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id = "trending-learn-more-3"]');
    await expect(page).toHaveURL(/form-adv/)
}); 

test('learn more 4', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id = "feature-cta-fund-360}"]');
    await expect(page).toHaveURL(/fund-explorer/)
}); 

test('learn more 5', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id = "feature-cta-regulatory-filings}"]');
    await expect(page).toHaveURL(/form-adv/)
}); 

test('learn more 6', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id = "feature-cta-integrate-data}"]');
    await expect(page).toHaveURL(/analysis/)
}); 

test('learn more 7', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id="feature-cta-radient-partners}"]');
    await expect(page).toHaveURL("http://test.radientanalytics.com/web/about/")
}); 

test('read more 1', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id="blog-read-more-1"]');
    await expect(page).toHaveURL("https://info.radientanalytics.com/blog/radient-hfr-webinar")
}); 

test('read more 2', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id="blog-read-more-2"]');
    await expect(page).toHaveURL("https://info.radientanalytics.com/blog/types-of-esg-funds-you-can-invest-in-2023")
}); 

test('read more 3', async ({ page }) => {
    await page.goto('http://test.radientanalytics.com/', { waitUntil: 'networkidle' });
    await page.click('a[data-test-id="blog-read-more-3"]');
    await expect(page).toHaveURL("https://info.radientanalytics.com/blog/sub-adviser-due-diligence-with-radient")
}); 


//refactored_old

const learnORreadmoreTests = [
    {
        name: 'learn more 1',
        clickLocator: 'a[href="http://test.radientanalytics.com/form-adv/"]',
        val: 1,
        expectedUrl: /form-adv/
    },
    {
        name: 'learn more 2',
        clickLocator: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
        val: 1,
        expectedUrl: /fund-explorer/
    },
    {
        name: 'learn more 3',
        clickLocator: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
        val: 2,
        expectedUrl: /fund-explorer/
    },
    {
        name: 'learn more 4',
        clickLocator: 'a[href="http://test.radientanalytics.com/fund-explorer/"]',
        val: 3,
        expectedUrl: /fund-explorer/
    },
    {
        name: 'learn more 5',
        clickLocator: 'a[href="http://test.radientanalytics.com/form-adv/"]',
        val: 2,
        expectedUrl: /form-adv/
    },
    {
        name: 'learn more 6',
        clickLocator: 'a[href="http://test.radientanalytics.com/analysis/"]',
        val: 1,
        expectedUrl: /analysis/
    },
    {
        name: 'learn more 7',
        clickLocator: 'a[href="http://test.radientanalytics.com/web/about/"]',
        val: 0,
        expectedUrl: 'http://test.radientanalytics.com/web/about/'
    },
    {
        name: 'read more 8',
        clickLocator: 'a[href="https://info.radientanalytics.com/blog/radient-hfr-webinar"]',
        val: 0,
        expectedUrl: 'https://info.radientanalytics.com/blog/radient-hfr-webinar'
    },
    {
        name: 'read more 9',
        clickLocator: 'a[href="https://info.radientanalytics.com/blog/types-of-esg-funds-you-can-invest-in-2023"]',
        val: 0,
        expectedUrl: 'https://info.radientanalytics.com/blog/types-of-esg-funds-you-can-invest-in-2023'
    },
    {
        name: 'read more 10',
        clickLocator: 'a[href="https://info.radientanalytics.com/blog/sub-adviser-due-diligence-with-radient"]',
        val: 0,
        expectedUrl: 'https://info.radientanalytics.com/blog/sub-adviser-due-diligence-with-radient'
    }
];

learnORreadmoreTests.forEach(({ name, clickLocator, expectedUrl, val }) => {
    test(name, async ({ page }) => {
        const locator = page.locator(clickLocator).nth(val);
        await locator.click();
        await expect(page).toHaveURL(expectedUrl);
        });
    });


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

redirectTests.forEach(({ name, menuButton, locatortag, expectedUrl }) => {
    test(name, async ({ page }) => {
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
        