import { test, expect } from '@playwright/test'
import User from 'App/Models/User'

test('basic test', async ({ page }) => {
  await page.goto('/');
  const input = await page.getAttribute('input', 'value')
  expect(input).toBe('Virk')
})
