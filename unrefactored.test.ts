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


