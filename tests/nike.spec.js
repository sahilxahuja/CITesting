const { test, expect } = require('@playwright/test')

test('Nike Website test', {
    tag: '@smoke',
    timeout: 60000,
    retries: 2,
    expectedToFail: true,
    annotation: {
        type: 'JIRA',
        description: 'PAY-123'
    }


}, async ({ page }) => {


})