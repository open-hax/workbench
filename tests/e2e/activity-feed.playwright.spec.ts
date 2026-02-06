import { test, expect, TestUtils } from './helpers/test-setup';

test.describe('Activity Feed & Default View', () => {
  test.beforeEach(async ({ app }) => {
    await app.waitForAppLoad();
  });

  test('should show activity view by default on launch', async ({ page }) => {
    // Verify activity view is visible in the main area without any interaction
    const mainActivityView = page.locator('.no-buffer [data-testid="activity-view"]');
    await expect(mainActivityView).toBeVisible();
    
    // Verify search input is present
    await expect(mainActivityView.locator('[data-testid="search-input"]')).toBeVisible();
    
    // Verify tabs are present
    await expect(mainActivityView.locator('[data-testid="search-tabs"]')).toBeVisible();

    // Donor-inspired controls should be visible in default main view
    await expect(mainActivityView.locator('[data-testid="view-toggle"]')).toBeVisible();
    await expect(mainActivityView.locator('[data-testid="pagination-controls"]')).toBeVisible();
  });

  test('should display errors first in activity feed', async ({ page }) => {
    const mainActivityView = page.locator('.no-buffer [data-testid="activity-view"]');

    // First page: errors only (page size = 2)
    const items = mainActivityView.locator('.result-item');
    await expect(items).toHaveCount(2);
    await expect(items.nth(0)).toContainText('Failed to connect to server');
    await expect(items.nth(0).locator('.result-icon')).toContainText('🔴');
    await expect(items.nth(1)).toContainText('Compilation failed');
    await expect(items.nth(1).locator('.result-icon')).toContainText('🔴');

    // Next page: info entries
    await mainActivityView.locator('[data-testid="pagination-next"]').click();
    await expect(mainActivityView.locator('[data-testid="pagination-status"]')).toContainText('Page 2 of 2');
    await expect(items.nth(0)).toContainText('Project initialized');
    await expect(items.nth(0).locator('.result-icon')).toContainText('🔵');
    await expect(items.nth(1)).toContainText('Dependencies installed');
    await expect(items.nth(1).locator('.result-icon')).toContainText('🔵');
  });

  test('should filter activity items', async ({ page }) => {
    const mainActivityView = page.locator('.no-buffer [data-testid="activity-view"]');

    // Filter by Error
    await mainActivityView.locator('[data-testid="filter-error"]').click();
    
    const items = mainActivityView.locator('.result-item');
    await expect(items).toHaveCount(2);
    await expect(items.nth(0)).toContainText('Failed to connect to server');
    await expect(items.nth(1)).toContainText('Compilation failed');
    
    // Filter by Info
    await mainActivityView.locator('[data-testid="filter-info"]').click();
    await expect(items).toHaveCount(2);
    await expect(items.nth(0)).toContainText('Project initialized');
    await expect(items.nth(1)).toContainText('Dependencies installed');

    // Filter by All
    await mainActivityView.locator('[data-testid="filter-all"]').click();
    await expect(items).toHaveCount(2);
    await expect(mainActivityView.locator('[data-testid="pagination-controls"]')).toBeVisible();
  });
});
