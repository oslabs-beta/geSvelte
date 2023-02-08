import { expect, test } from '@playwright/test';

test('Header has all elements, links are working', async ({ page }) => {
	await page.goto('/');
		await expect(page.getByRole('img', { name: 'toolbar-logo-img' })).toBeVisible();
		expect(await page.textContent('nav')).toMatch("Home FAQs Features Docs");
		await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'FAQs' })).toBeVisible();
		await page.getByRole('banner').getByRole('link', { name: 'Docs' }).click();
		await expect(page).toHaveURL('/docs');
		await page.getByRole('banner').getByRole('link', { name: 'Home' }).click();
		await expect(page).toHaveURL('/');
		await page.getByRole('banner').getByRole('link', { name: 'FAQs' }).click();
		await expect(page).toHaveURL('/faqs');
		await page.getByRole('banner').getByRole('link', { name: 'Features' }).click();
		await expect(page).toHaveURL('/features');
	});

// test('Landing page has all elements', async ({ page }) => {
// });
// test('Stage page has all elements and functions properly', async ({ page }) => {
// });