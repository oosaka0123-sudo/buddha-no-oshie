# Information Architecture — Current Production

## Core promise

2500年前の問いを、いま自分自身の問いとして読む。

## Primary user journeys

- 初心者: 仏陀とは → 生涯 → 四諦 → 教え全体
- 悩み起点: 不安 / 怒り / 執着 / 死 → 関連教義 → 原典 / 出典
- 学習者: 経典 → 学派 → 歴史 → 用語辞典
- 比較理解: 初期仏教 → 大乗 → 密教 → 日本仏教

## Current URL structure

GitHub Pages上の現行実装は `.html` URLを使用する。

### Core pages

- `/` — HOME
- `/buddha.html`
- `/life.html`
- `/teachings.html`
- `/four-truths.html`
- `/suffering.html`
- `/scriptures.html`
- `/history.html`
- `/schools.html`
- `/dictionary.html`
- `/about.html`
- `/sources.html`

### Articles

- `/articles/` — 記事一覧
- `/articles/<slug>.html` — 個別記事38本

合計 canonical ページ数は **51**。

## Shared article metadata

個別記事では、少なくとも以下を確認する。

- title / description
- canonical
- OGP
- Article JSON-LD
- BreadcrumbList
- dateModified
- 出典・研究の入口
- 関連記事導線
- 画像alt / intrinsic dimensions

## Editorial separation rule

「歴史上の釈迦が説いた可能性が高い内容」「初期経典に確認できる内容」「後世に成立した大乗・密教・日本仏教思想」を同一レベルで混在させない。

## Historical note

初期設計では12コアページを `/buddha/` のようなslash形式で記述していたが、現行GitHub Pages実装では上記の `.html` 形式が正本。
