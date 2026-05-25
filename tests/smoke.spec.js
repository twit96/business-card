import { test, expect } from '@playwright/test';

test('page loads and shows name', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByText('Tyler Wittig')).toBeVisible();
});

test('email link exists', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const emailLink = page.locator('a[href^="mailto"]');
  await expect(emailLink).toBeVisible();
});

test('intro param pre-fills mailto correctly', async ({ page }) => {
  await page.goto('http://localhost:5173?intro=tcc2026');
  const emailLink = page.locator('a[href^="mailto"]');
  const href = await emailLink.getAttribute('href');
  await expect(href).toContain('TCC%202026');
});

test('copy button exists on email row', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByRole('button', { name: /copy/i })).toBeVisible();
});
