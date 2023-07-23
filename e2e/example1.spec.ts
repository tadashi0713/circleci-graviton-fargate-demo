import { test, expect } from '@playwright/test';

test('Example 1', async ({ page }) => {
  await page.goto('/');

  const button = page.locator('data-testid=Button');
  const text = page.locator('data-testid=Text');

  await button.click();

  await page.waitForTimeout(1000)

  if(Math.random() < 0.5) {
    await expect(text).toBeVisible();
  } else {
    await !expect(text).toBeVisible();
  }
});
