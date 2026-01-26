import { test, expect } from '../fixtures/user';

test('Verify Login', async ({ loginPage }) => {
  await expect(loginPage.getByText('Time at Work')).toBeVisible();
});