import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dou.ua/');
  await expect(page.getByRole('link', { name: 'DOU Logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Форум', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Стрічка' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Зарплати', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Робота', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Календар' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Спільноти', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'пошук' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Вхід і реєстрація' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Форум');
  await expect(page.getByRole('banner')).toContainText('Стрічка');
  await expect(page.getByRole('banner')).toContainText('Зарплати');
  await expect(page.getByRole('banner')).toContainText('Робота');
  await expect(page.getByRole('banner')).toContainText('Календар');
  await expect(page.getByRole('banner')).toContainText('Спільноти');
  await expect(page.getByRole('link', { name: 'Топ-50', exact: true })).toBeVisible();
  await expect(page.locator('body')).toContainText('Топ-50');
  await page.goto('https://dou.ua/lenta/articles/top-50-summer-2025/?from=doufp');
  
  
});