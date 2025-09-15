import { test, expect } from "@playwright/test";

test("dodaj do koszyka i sprawdź czy cena jest widoczna", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const emptyCart = page.locator("text=Koszyk jest pusty");
  await expect(emptyCart).toBeVisible();

  const addButton = page.locator('button:has-text("Dodaj do koszyka")').first();
  await addButton.click();

  await page.waitForTimeout(1000);

  await expect(emptyCart).not.toBeVisible();

  const totalPrice = page.locator("text=Łączna cena");
  await expect(totalPrice).toBeVisible();
});
