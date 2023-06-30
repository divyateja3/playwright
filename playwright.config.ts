import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Folder for test artifacts such as screenshots, videos, traces, etc.
    testDir: './tests',
    testMatch: '**/*.test.ts',

    outputDir: 'test-results',
    timeout: 50000,
    
});