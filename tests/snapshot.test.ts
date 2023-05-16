import { Page, test, expect, devices } from '@playwright/test';

test.describe.parallel('full page snapshots', () => {
    const devicesToTest = [
        devices['iPhone 12 Pro'],
        devices['Desktop Chrome'],
        // devices['Pixel 5'],
        devices['iPad Pro 11'],

    ];

    async function isInViewport(page: Page, locator: string, viewport: { width: number; height: number; }) {
        const element = page.locator(locator);
        const boundingBox = await element.boundingBox();

        // Element not found, or not visible on the page
        if (!boundingBox || !viewport)
        return false;

        // Check if element is within the viewport
        return (
        boundingBox.x >= 0 &&
        boundingBox.y >= 0 &&
        boundingBox.x + boundingBox.width <= viewport.width &&
        boundingBox.y + boundingBox.height <= viewport.height
        );
    }

    for (const device of devicesToTest) {
        test(`snapshot test on ${device.userAgent}`, async ({ page }) => {
        await page.goto('http://test.radientanalytics.com/');
        // click somewhere outside of seacrh bar
        await page.locator('body > div > div.MuiContainer-root.rad-styles-5p4z2l > div > div.MuiContainer-root.MuiContainer-disableGutters.rad-styles-1p0xdo8 > div > h1').click();
        await page.setViewportSize(device.viewport);
        await page.waitForTimeout(1000);
        // const alertCloseSelector = "#leadinModal-5064129 > div.leadinModal-content > button";
        const footerSelector = 'a[href="/sitemap_form_adv_sec.xml"]';

        // let alertVisible = await page.locator(alertCloseSelector).isVisible();
        // if (alertVisible) {
        //     await page.locator(alertCloseSelector).click()
        //     await page.waitForTimeout(3000)
        // }
        let footerLocated = false;
        let footerViewCount = 0;
        let sectionIndex = 0;

        do {
            // Close pop-up alert
            // let alertVisible = await page.locator(alertCloseSelector).isVisible();
            // if (alertVisible) {
            // await page.waitForSelector(alertCloseSelector); // Wait for the selector to appear on the page
            // while (await page.locator(alertCloseSelector).isVisible()) {
            //     await page.locator(alertCloseSelector).click(); // Click on the element if it's visible
            //     await page.waitForTimeout(1000); // Wait for some time before checking again
            // }
            // }

            const filename = `landing_${device.userAgent}_${sectionIndex}.png`
            expect(await page.screenshot()).toMatchSnapshot(filename);

            // Scroll to next page block
            await page.keyboard.press('PageDown');
            await page.waitForTimeout(500);

            // Check if reached footer element
            const footerElementVisible = await isInViewport(page, footerSelector, device.viewport);
            if (footerElementVisible)
            footerViewCount++;
            if (footerViewCount > 1)
            footerLocated = true;

            // Increment the section count
            sectionIndex++;
        } while (!footerLocated)

        // await page.keyboard.down('Meta');
        // await page.keyboard.press('ArrowUp');
        // await page.keyboard.up('Meta');
        });
    }
});
