import { test, expect } from '@playwright/test'

test('page loads and shows name', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Tyler Wittig')).toBeVisible()
})

test('work email link exists', async ({ page }) => {
  await page.goto('/')
  const emailLink = page.getByRole('link', { name: 'WittigT@wcjc.edu' })
  await expect(emailLink).toBeVisible()
})

test('copy button exists on work email row', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Copy WittigT@wcjc.edu' })).toBeVisible()
})

test('personal email link exists', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: 'tylerwittig.work@gmail.com' })).toBeVisible()
})

test('copy button exists on personal email row', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Copy tylerwittig.work@gmail.com' })).toBeVisible()
})
