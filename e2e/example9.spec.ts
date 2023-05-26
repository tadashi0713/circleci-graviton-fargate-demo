import { test, expect } from '@playwright/test';

test('Example 9', async ({ page }) => {
  await page.goto('/');

  const button = page.locator('data-testid=Button');
  const text = page.locator('data-testid=Text');

  await button.click();

  await page.waitForTimeout(9000)

  await expect(text).toBeVisible();
});
