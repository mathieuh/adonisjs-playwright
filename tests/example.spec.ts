import test from 'japa'
// import User from 'App/Models/User'
import { chromium } from 'playwright'

test('basic test', async (assert) => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 })
  const page = await browser.newPage()
  await page.goto('http://whatsmyuseragent.org/')
  await page.pause()
  // const input = await page.getAttribute('input', 'value')
  // expect(input).toBe('Virk')
})
