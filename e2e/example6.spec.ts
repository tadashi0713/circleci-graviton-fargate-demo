import { test, expect } from '@playwright/test';

test('Example 6', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const button = page.locator('data-testid=Button');
  const text = page.locator('data-testid=Text');

  await button.click();

  await page.waitForTimeout(6000)

  await expect(text).toBeVisible();
});
