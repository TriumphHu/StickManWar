# Stickman War

[中文](README.md) | [English](README.en.md)

An automated spectator battle demo. The Red Flame Army and Frost Blue Guard use their own two-stage marble machines to build forces, cast ultimates, and attack the opposing base without manual troop control.

[Live demo](https://stickman-war-demo.pages.dev/)

## Current Gameplay

- Both sides use the same marble-machine rules and automatically fire one base marble per second.
- Upper-stage marbles land in Troop, Split, or Boost pools with width weights of `55:25:20`.
- Troop marbles travel through a visible pipe into the lower cannon. Split marbles return to the upper stage, while 20 Boost hits automatically trigger an ultimate.
- The four lower unit pools use `4:3:2:1` width weights. Unit tiers cost `3 / 6 / 10 / 16` marbles.
- Units automatically march, acquire targets, attack, and destroy the enemy base. Spectator controls are limited to pause, speed, mute, and restart.

Marbles and obstacles are simulated with [Matter.js](https://brm.io/matter-js/). Outcomes are determined by the actual landing position, so the visual landing and game counter use the same geometry.

## Factions and Ultimates

| Faction | Style | Four unit tiers | Ultimate |
| --- | --- | --- | --- |
| Red Flame Army | Offense and damage over time | Raider, Spearman, Berserker, Flameblade Commander | Heavenly Fire Judgment: area damage, knockback, burning, and base damage |
| Frost Blue Guard | Defense and control | Shield Guard, Ice Archer, Heavy Guardian, Frost Colossus | Absolute Zero: freezes enemies, damages the base, and shields allies |

Each tier has a progressively larger silhouette. Helmets, armor, weapons, auras, and distinct walk, attack, and hit reactions make high-tier units easy to identify.

## Run Locally

This is a static site, so you can open `index.html` directly. Alternatively, start a local static server from the project directory:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`.

The battle BGM is `Waterflame - Glorious Morning.mp3`. If autoplay is blocked, playback starts after the first click or key press.

## Remotion Helper Assets

`remotion/` contains a standalone cannon-and-marble composition for video asset production. It is not used for real-time browser physics.

```powershell
npm install
npm run studio
npm run render:cannon
npm run still:cannon
npm run typecheck
```

Rendered files are written to `out/`.

## Project Structure

```text
.
|-- index.html                 # Page structure
|-- styles.css                # UI, unit animation, and ultimate effects
|-- game.js                   # Marble physics, spawning, and combat logic
|-- DESIGN.md                 # Current gameplay and balance specification
|-- vendor/                   # Matter.js and its license
|-- remotion/                 # Cannon-and-marble video composition
|-- package.json              # Remotion and TypeScript commands
`-- Waterflame - Glorious Morning.mp3
```

## Deploy to Cloudflare Pages

The project has no backend and can be deployed as a static site. For a repository deployment, use the repository root as the published content. For Direct Upload, upload the complete static directory containing `index.html`, styles, scripts, audio, and `vendor/`.

Cloudflare Pages provides HTTPS and a `pages.dev` URL. The current deployment is:

```text
https://stickman-war-demo.pages.dev/
```

## Verification

```powershell
node --check game.js
npm run typecheck
git diff --check
```

## Third-Party License and Audio

`vendor/matter.min.js` is distributed under the MIT License. See `vendor/matter-LICENSE.txt` for the license text.

Including the BGM in this repository does not itself grant public-use rights. Before public, commercial, or redistributed use, confirm that you have the required rights for `Waterflame - Glorious Morning.mp3`; replace or remove it if the license scope is unclear.
