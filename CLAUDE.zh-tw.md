eeeeeeeeeeeee# CLAUDE.zh-tw.md

本文件為 Claude Code (claude.ai/code) 在本儲存庫作業時的指引。

## 專案概述

這是一個以 Hugo 建立的婚禮邀請網站，採用「hugo-story」主題。這是一個單頁響應式網站，透過橫幅、焦點區塊、相簿和資訊區段展示婚禮細節。

## 開發指令

### 本地開發
- `hugo server` - 啟動本地開發伺服器 (http://localhost:1313/)
- `hugo server -D` - 包含草稿內容
- `hugo server --bind=0.0.0.0` - 綁定所有網路介面

### 建置指令
- `hugo` - 產生正式版網站 (輸出至 `public/`)
- `hugo --minify` - 產生並壓縮網站
- `hugo -e production` - 使用 production 設定建置

### 環境專屬建置
- `hugo -e development` - 使用 development 設定
- `hugo -e production` - 使用 production 設定

## 架構說明

### 網站結構
- **內容**：透過 `/data/` 目錄下的 YAML 檔案管理
  - `banner.yml` - 首頁橫幅區設定
  - `gallery.yml` - 相簿設定與圖片
  - `items.yml` - 資訊區塊/卡片
  - `spotlight1.yml`、`spotlight2.yml`、`spotlight3.yml` - 精選內容區塊

### 版型系統
- **主版型**：`layouts/index.html` 以 Hugo partials 定義頁面結構
- **Partials**：位於 `layouts/partials/`，為各區段的模組元件
  - `banner.html`、`spotlight.html`、`gallery.html`、`items.html` 等
- **基礎模板**：`layouts/_default/baseof.html` 提供 HTML 基礎架構

### 設定檔
- **多環境**：`config/` 目錄下有 development/production 獨立設定
- **主題**：採用 hugo-story 主題，並於根目錄 `layouts/` 客製化
- **資源**：靜態檔案於 `static/`，主題資源於 `themes/hugo-story/`

### 內容管理
- 無傳統 markdown 內容，一切透過 YAML 檔案設定
- 圖片存於 `static/images/`，`gallery/fulls/` 與 `gallery/thumbs/` 分開
- 已包含 favicon 與 web manifest，支援 PWA

### 主題整合
- 可於根目錄 `layouts/` 覆寫主題檔案
- SASS 編譯由 Hugo Pipes 處理（需 Hugo Extended 版）
- FontAwesome 圖示由主題資源引入

## 重要開發備註

- 需 Hugo Extended 版以支援 SASS/SCSS 編譯
- 本地開發預設使用相對路徑
- 產生檔案輸出至 `public/`，並已納入 git 版本控管
- 主題已完整整合（非 git 子模組），方便自訂
