import { Page,test, expect,ViewportSize } from '@playwright/test';

test('full page snapshots', async ({ page }) => {
    const resolutions: ViewportSize[] = [
        { width: 1920, height: 1080 }, // Desktop 1
        { width: 1536, height: 864 }, // Desktop 2
        { width: 1366, height: 768 }, // Desktop 3
        { width: 834, height: 1194 }, // Tablet iPad Pro 11
        { width: 768, height: 1024 }, // Tablet ipad Mini
        { width: 712, height: 1138 }, // Tablet Galaxy Tab S4
        { width: 428, height: 926 }, // Mobile iPhone Pro Max 13
        { width: 365, height: 640 }, // Mobile Moto G4
        { width: 320, height: 658 } // Mobile Galaxy S9+      
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
    for (const resolution of resolutions) {

        // await page.waitForTimeout(1000)
        // await page.goto('https://radientanalytics.com/')
        await page.goto('http://test.radientanalytics.com/')
        await page.waitForTimeout(3000)
        await page.locator('body > div > div.MuiContainer-root.rad-styles-5p4z2l > div > div.MuiContainer-root.MuiContainer-disableGutters.rad-styles-1p0xdo8 > div > h1').click()    
        await page.setViewportSize(resolution)

        const alertCloseSelector = "#leadinModal-5064129 > div.leadinModal-content > button";
        // const footerSelector = 'body > div > div.MuiContainer-root.rad-styles-1pt2v4q > div.MuiContainer-root.MuiContainer-maxWidthXxl.rad-styles-uvs6pd > div.MuiBox-root.rad-styles-6k9k56 > div > img';
        const footerSelector = 'a[href="/sitemap_form_adv_sec.xml"]';

    
        // Close pop-up alert
        let alertVisible = await page.locator(alertCloseSelector).isVisible();
        if (alertVisible) {
            await page.locator(alertCloseSelector).click()
            await page.waitForTimeout(3000)
        }    
        let footerLocated = false;
        let footerViewCount = 0;
        let sectionIndex = 0;
    
        // Scroll down to end and take screenshots
        do {
          // Close pop-up alert
        let alertVisible = await page.locator(alertCloseSelector).isVisible();
            if (alertVisible) {
                await page.waitForSelector(alertCloseSelector); // Wait for the selector to appear on the page
                while (await page.locator(alertCloseSelector).isVisible()) {
                    await page.locator(alertCloseSelector).click(); // Click on the element if it's visible
                    await page.waitForTimeout(1000); // Wait for some time before checking again
                }
            }
        
    
        // Expect screenshot to specific resolution
        const filename = `${resolution.width}x${resolution.height}_${sectionIndex}.png`
        expect(await page.screenshot()).toMatchSnapshot(filename);
        // const filename = `screenshots/${resolution.width}x${resolution.height}/${sectionIndex}.png`;
        // expect(await page.screenshot({path: filename})).toMatchSnapshot(filename);
    
          // Scroll to next page block
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1500);
    
          // Check if reached footer element
        const footerElementVisible = await isInViewport(page, footerSelector, resolution);
        if (footerElementVisible)
            footerViewCount++;
        if (footerViewCount > 1)
            footerLocated = true;
    
          // Increment the section count
            sectionIndex++;
    
        } while (!footerLocated)
    
        await page.keyboard.down('Meta');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.up('Meta');

        // await page.goto('https://playwright.dev/');
        // await page.waitForTimeout(500);
        }
});