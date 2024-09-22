import { expect, test } from "@playwright/test";

test("API Routeへリクエストが飛ぶかテスト", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // ボタンの取得チェック
  const button = await page.locator("button");
  await expect(button).toBeVisible();

  // ボタンのテキストチェック
  await expect(button).toHaveText("API Routeにリクエストするボタン");

  // ボタンをクリック
  await button.click();

  // コンソールログの出力内容をチェック
  const consoleMessage = await page.waitForEvent("console");
  if (consoleMessage.type() === "log") {
    const messageText = consoleMessage.text();

    // 実際に取得されるデータ
    expect(messageText).toContain("est rerum tempore");
  }
});
