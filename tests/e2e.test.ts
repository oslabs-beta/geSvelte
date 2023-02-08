import AxeBuilder from '@axe-core/playwright'; // 1
import { expect, test } from '@playwright/test';

test('Header has all elements, links are working', async ({ page }) => {
	await page.goto('/');
		await expect(page.getByRole('img', { name: 'toolbar-logo-img' })).toBeVisible();
		expect(await page.textContent('nav')).toMatch("Home FAQs Stage Docs");
		await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'FAQs' })).toBeVisible();
		await page.getByRole('banner').getByRole('link', { name: 'Docs' }).click();
		await expect(page).toHaveURL('/docs');
		await page.getByRole('banner').getByRole('link', { name: 'Home' }).click();
		await expect(page).toHaveURL('/');
		await page.getByRole('banner').getByRole('link', { name: 'FAQs' }).click();
		await expect(page).toHaveURL('/faqs');
		await page.getByRole('banner').getByRole('link', { name: 'Stage' }).click();
		await expect(page).toHaveURL('/stage');
	});

// test('Landing page has all elements', async ({ page }) => {
// });
test('Stage page is functional', async ({ page }) => {
	await page.goto('http://localhost:5173/stage');
		await expect(page.getByRole('img', { name: 'toolbar-logo-img' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'New Form' })).toBeVisible();
		// await expect(page.getByText('This is where new fields should populate')).toBeVisible();

	await page.getByRole('button', { name: 'Edit Form' }).click();
		await expect(page.getByRole('button', { name: 'Add Checkbox' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Add Radio' })).toBeVisible();
	
	await page.getByRole('button', { name: 'Add Checkbox' }).click();
		await expect(page.getByText('Check 1 Check 2 Check 3')).toBeVisible();
		await expect(page.getByText('Key 1')).toBeVisible();
	await page.locator('div').filter({ hasText: 'Key 1 Delete' }).getByRole('button', { name: 'Delete' }).click();
		await expect(page.getByText('Key 1')).not.toBeVisible();
	
	await page.getByRole('button', { name: 'Add Radio' }).click();
	await page.getByRole('button', { name: 'Add Radio' }).click();
		await expect(page.getByText('Write your directons here.').first()).toBeVisible();
		await expect(page.getByText('Write your directons here.').nth(1)).toBeVisible();

	await page.getByText('Key 2').click();
		await expect(page.getByRole('heading', { name: 'Field Type: Radio' })).toBeVisible();

	await page.getByRole('heading', { name: 'LEGEND: Field Value' }).getByPlaceholder('Field Value').click();
	await page.getByRole('heading', { name: 'LEGEND: Field Value' }).getByPlaceholder('Field Value').fill('new legend');
	await page.getByRole('button', { name: 'Close' }).click();
		await expect(page.getByRole('heading', { name: 'Field Type: Radio' })).not.toBeVisible();
		await expect(page.getByText('new legend', { exact: true })).toBeVisible();
			
	await page.locator('div').filter({ hasText: 'Key 2' }).getByRole('button', { name: 'Delete' }).click();
	// 	await expect(page.getByText('new legend', { exact: true })).not.toBeVisible();

	

	// await page.getByText('Add Checkbox Add Radio').click();
	// await page.getByText('Check 1 Check 2 Check 3').click();
	// await page.getByRole('button', { name: 'Add Radio' }).click();
	// await page.getByText('Write your directons here.', { exact: true }).click();
	// await page.locator('div').filter({ hasText: 'Key 2 Delete' }).getByRole('button', { name: 'Delete' }).click();
	// await page.getByRole('button', { name: 'Delete' }).click();
	// await page.getByText('X', { exact: true }).click();
  });

// Accessibility testing using AxeBuilder
// test.describe('homepage', () => { // 2
//   test('should not have any automatically detectable accessibility issues', async ({ page }) => {
//     await page.goto('http://localhost:5173/'); // 3

//     const accessibilityScanResults = await new AxeBuilder.default({ page }).analyze(); // 4

//     expect(accessibilityScanResults.violations).toEqual([]); // 5
//   });
// });