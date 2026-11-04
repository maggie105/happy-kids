# Happy Kids｜歡樂遊戲島（第一階段）

這是第一階段的首頁骨架，使用原生 HTML、CSS、JavaScript，不需要安裝套件或建置工具。

## 目前包含
- 響應式首頁：支援桌面、平板與手機版面
- 五個遊戲世界入口：車車、動物、水果、益智、聲音
- 車車世界為首頁主視覺焦點
- 家長區入口
- 星星數量顯示與 LocalStorage 儲存機制
- 尚未開發的世界會顯示「準備中」提示

## 如何在 GitHub 使用
1. 在 GitHub 建立一個 Repository，例如 `happy-kids`。
2. 將本資料夾內的檔案與資料夾上傳到 Repository 根目錄。
3. 進入 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
6. 等待 GitHub Pages 部署完成，即可取得網站網址。

## 本階段圖片說明
目前首頁卡片使用 CSS 製作的臨時示意插畫，目的是先完成網站架構與操作流程，**不是最終美術素材**。
下一階段會以你指定的「牛的那張」3D 插畫作為統一風格基準，逐張製作車輛、動物、水果、益智與聲音圖片，再替換卡片中的示意圖。
請不要把不同來源、灰土感、泛黃或塑膠玩具感的照片直接混進來。

## 星星功能
遊戲模組可呼叫以下方法增加星星：

```js
window.HappyKids.addStars(1);
```

目前資料存在使用者自己的瀏覽器 LocalStorage；清除瀏覽器網站資料時，星星紀錄也會被清除。
