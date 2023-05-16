import { test, expect } from '@playwright/test';
import { devices } from 'playwright-core';

// test.use(devices['iPhone 12 Pro'])

// test.use({ browserName: 'webkit' });
// test.describe('Mobile Tests', () => {
//     const iPhone = devices['iPhone 12 Pro'];
//     test.beforeEach(async ({ page }) => {
//         await page.setViewportSize({ width: iPhone.viewport.width, height: iPhone.viewport.height });
//     });
const devicesToTest = [
    devices['iPhone 12 Pro'],
    devices['Desktop Chrome'],
    devices['iPad Pro 11'],
    // Add more devices or workers configurations here
];

const devicenames = ['iPhone 12 Pro','Desktop Chrome','iPad Pro 11']

    
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
    

for (var i = 0; i < devicesToTest.length; i++ ) {
    const device = devicesToTest[i]
    test.describe(`Tests on ${devicenames[i]}`, () => {
        test.use(device);

        for (const { name, clickLocator, expectedUrl } of learnORreadmoreTests) {
        test(name, async ({ page }) => {
            await page.goto('http://test.radientanalytics.com/');
            const locator = page.locator(clickLocator);
            await locator.click();
            await expect(page).toHaveURL(expectedUrl);
        });
        }
    });
}

