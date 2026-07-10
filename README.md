# 火柴人战争

[中文](README.md) | [English](README.en.md)

一个面向观众的自动战争演示。赤焰军与霜蓝卫通过各自的双层弹珠机自动积累兵力、释放终极技能并进攻对方基地，观众无需手动控制出兵。

[在线体验](https://stickman-war-demo.pages.dev/)

## 当前玩法

- 左右双方使用相同规则的弹珠机，每秒自动发射 1 颗基础弹珠。
- 上层弹珠落入“兵种 / 分裂 / 强化”池，池宽权重为 `55:25:20`。
- 进入“兵种”的弹珠沿可见管道转入下层大炮；“分裂”会让额外弹珠回流至上层；“强化”累计 20 次后自动释放终极技能。
- 下层四个兵种池的宽度权重为 `4:3:2:1`，四级兵种分别需要 `3 / 6 / 10 / 16` 颗弹珠。
- 单位自动行军、索敌、攻击并摧毁敌方基地。界面只保留暂停、倍速、静音和重新开始等观战控制。

弹珠与障碍物的运动由 [Matter.js](https://brm.io/matter-js/) 计算。结果由弹珠的实际落点决定，画面落点和游戏计数使用同一份几何数据。

## 阵营与终极技能

| 阵营 | 风格 | 四级兵种 | 终极技能 |
| --- | --- | --- | --- |
| 赤焰军 | 进攻与持续伤害 | 突击兵、长枪兵、狂战士、炎刃统领 | 天火审判：多段范围伤害、击退、灼烧并伤害基地 |
| 霜蓝卫 | 防守与控制 | 盾卫、冰弓手、重甲守军、寒霜巨像 | 绝对零度：冻结敌军、伤害基地并为友军提供护盾 |

四个等级使用逐级增大的体型，并通过头盔、护甲、武器、光环以及走路、攻击、受击动作强化辨识度。

## 本地运行

这是一个静态网页，可以直接打开 `index.html`。也可以在项目目录启动本地静态服务器：

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8765/`。

对局 BGM 为 `Waterflame - Glorious Morning.mp3`。浏览器若拦截自动播放，会在首次点击或按键后开始播放。

## Remotion 辅助素材

`remotion/` 包含大炮弹珠镜头的独立 Remotion 合成，用于制作视频素材，不参与网页中的实时物理计算。

```powershell
npm install
npm run studio
npm run render:cannon
npm run still:cannon
npm run typecheck
```

渲染结果输出到 `out/`。

## 项目结构

```text
.
|-- index.html                 # 页面结构
|-- styles.css                # UI、单位动作与技能特效
|-- game.js                   # 弹珠物理、出兵与战斗逻辑
|-- DESIGN.md                 # 当前玩法与数值设计文档
|-- vendor/                   # Matter.js 及其许可证
|-- remotion/                 # 大炮弹珠视频合成
|-- package.json              # Remotion 与 TypeScript 命令
`-- Waterflame - Glorious Morning.mp3
```

## 部署到 Cloudflare Pages

项目不依赖后端，可作为静态站点直接部署。Cloudflare Pages 使用仓库根目录作为发布目录即可；若选择 Direct Upload，也可以上传包含 `index.html`、样式、脚本、音频和 `vendor/` 的完整静态目录。

部署后，Cloudflare 会提供 HTTPS 和 `pages.dev` 地址。当前演示地址为：

```text
https://stickman-war-demo.pages.dev/
```

## 检查

```powershell
node --check game.js
npm run typecheck
git diff --check
```

## 第三方许可与音频

`vendor/matter.min.js` 使用 MIT 许可证，许可证文本见 `vendor/matter-LICENSE.txt`。

仓库中的 BGM 并不因收录在本项目中而自动获得公开发布授权。在公开传播、商业使用或二次分发前，请确认 `Waterflame - Glorious Morning.mp3` 的使用与分发权；若授权范围不明确，请替换或移除该文件。
