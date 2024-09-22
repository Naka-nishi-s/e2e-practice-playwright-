import { expect, test } from "@playwright/test";

test("APIボタンのテスト", async ({ page }) => {
  // ページに移動
  await page.goto("http://localhost:3000/");

  // ボタンが配置されているか確認
  const button = await page.locator("button");
  await expect(button).toBeVisible();

  // ボタンのテキストが正しいか確認
  await expect(button).toHaveText("API Routeにリクエストするボタン");

  // APIリクエストのモックを設定
  await page.route("http://localhost:3000/api/getJsonData", (route) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({ message: "Success" }),
    });
  });

  // ボタンをクリック
  await button.click();

  // コンソールにAPIリクエストの結果が出力されるか確認
  page.on("console", (msg) => {
    if (msg.type() === "log") {
      expect(msg.text()).toContain("Success");
    }
  });
});
