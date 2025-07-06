import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')

  // Expect a title containing "My Shifu"
  await expect(page).toHaveTitle(/My Shifu/)

  // Expect main heading to be visible
  await expect(page.getByRole('heading', { name: 'My Shifu' })).toBeVisible()

  // Expect feature cards to be visible
  await expect(page.getByText('Claude API')).toBeVisible()
  await expect(page.getByText('Pinecone')).toBeVisible()
  await expect(page.getByText('LangChain')).toBeVisible()
  await expect(page.getByText('Testing')).toBeVisible()
})