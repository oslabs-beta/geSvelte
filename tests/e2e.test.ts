import { expect, test } from '@playwright/test';

test('Header has all elements, links are working', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	// expect(await page.getByRole('link', { name: 'Home' })).toBeVisible();
	// expect(await page.getByRole('link', { name: 'FAQs' })).toBeVisible();
	
	
	expect(await page.textContent('nav')).toContain('Docs');
	expect(await page.textContent('nav')).toContain('FAQs');
	expect(await page.textContent('nav')).toContain('Features');
	expect(await page.textContent('nav')).toContain('Home');
	// expect(await page.getByRole('img', { name: 'toolbar-logo-img' })).toBeVisible();
		// // expectawait page.getByRole('img', { name: 'toolbar-logo-img' }).click();
		// await page.getByRole('link', { name: 'Home' }).click();
		// await page.getByRole('link', { name: 'FAQs' }).click();
		// await page.getByRole('link', { name: 'Features' }).click();
		// await page.getByRole('banner').getByRole('link', { name: 'Docs' }).click();
		// await page.getByRole('img', { name: 'main-site-logo' }).click();
		// expect(await page.textContent('nav')).toContain('Stage');
	// await page.getByRole('link', { name: 'geSvelte Logo' }).click();
	// 	await expect(page).toHaveURL('/');
	// await page.getByRole('link', { name: 'Docs' }).click();
	// 	await expect(page).toHaveURL('/docs');
	// await page.goto('/');
	// await page.getByRole('link', { name: 'FAQs' }).click();
	// 	await expect(page).toHaveURL('/faqs');
	// await page.goto('/');
	// await page.getByRole('link', { name: 'Stage' }).click();
	// 	await expect(page).toHaveURL('/stage');
});