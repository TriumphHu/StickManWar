# Stickman War

[中文](README.md) | [English](README.en.md)

Stickman War is an automated spectator battle demo inspired by cybernetic cricket fighting. The viewer clicks once to draw two factions from four candidates. The selected sides then use integrated two-stage marble machines to build armies, cast abilities, and attack the opposing fortress.

[Live demo](https://stickman-war-demo.pages.dev/)

## Current Gameplay

- Four factions are available: Red Flame Army, Frost Blue Guard, Verdant Core Alliance, and Gilded Court. Each match draws two factions and assigns left/right positions.
- Both machines fire one marble per second. Upper-stage results are settled from the real physical landing position, with current pool widths of `75% / 10% / 15%` for Troop, Split, and Boost.
- Split turns one marble into two marbles that return around the machine frame to the upper cannon. Troop marbles travel through a visible pipe to the lower cannon at a constant speed.
- The four lower unit pools use `4:3:2:1` width weights and cost `3 / 6 / 10 / 16` marbles to summon tiers I-IV.
- Thirty Boost hits trigger the faction ultimate and reset the charge. When a fortress reaches `533 / 1600` HP, it releases one stronger emergency ability per match.
- Units march, acquire targets, attack, and destroy the opposing fortress automatically. Spectator controls are pause, `×1/×2/×4` speed, mute, and restart.

Marbles, conveyor obstacles, gravity, and rebounds are simulated with [Matter.js](https://brm.io/matter-js/). Marbles spawn from the actual cannon muzzle, sweep between `20°` and `80°`, and use randomized launch force. The final landing position drives both the visual result and the game counter.

## Factions, Units, and Abilities

| Faction | Role | Four unit tiers | Ultimate | Fortress emergency ability |
| --- | --- | --- | --- | --- |
| Red Flame Army | Frontline pressure and ramping damage | Raider, Spearman, Berserker, Flameblade Commander | Heavenly Fire Judgment | Inferno Descent |
| Frost Blue Guard | High health and control | Shield Guard, Ice Archer, Heavy Guardian, Frost Colossus | Absolute Zero | Frozen Era |
| Verdant Core Alliance | Healing, retaliation, and sustain | Vineblade Scout, Spore Lobber, Thorn Warden, Ancient Tree Titan | Verdant Rebirth | Reclaiming Roots |
| Gilded Court | Chain lightning and burst pressure | Arc Acolyte, Dawnbound Crossbow, Storm Vanguard, Solar Archon | Corona Overload | Stellar Flare |

Every tier has a visibly larger silhouette, armor, weapon, aura, and particle treatment. The four commanders also have live combat skills: Flame Command, Frost Bastion, Verdant Revival, and Solar Verdict. These skills change unit health, shields, speed, control, damage, or fortress health in the battle state.

Ranged units launch faction-specific arrows, spores, and prism bolts from their hand-held weapon mounts. Projectiles travel toward chest height and resolve damage on arrival.

## Developer Test Tool

Open the `T` button in the top bar to reveal direct summon controls for tiers I-IV on both sides. Test summons appear at the frontline without consuming marble pools. Tier-IV commanders become ready quickly, making it practical to test unit art, attacks, hits, projectiles, and commander skills without waiting for random production.

## Run Locally

This is a static site with no backend. Open `index.html` directly, or start a local server from the project directory:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`.

The BGM is `Waterflame - Glorious Morning.mp3`. It is muted by default and can be enabled from the music button.

## Project Structure

```text
.
|-- index.html                 # Page structure and draw screen
|-- styles.css                # UI, unit motion, projectiles, and effects
|-- game.js                   # Matter.js marble, spawning, combat, and skills
|-- DESIGN.md                 # Gameplay, balance, and visual specification
|-- unit-art-preview.html     # Standalone unit and commander art preview
|-- vendor/                   # Matter.js and its license
|-- remotion/                 # Cannon-and-marble video composition
|-- package.json              # Remotion and TypeScript commands
`-- Waterflame - Glorious Morning.mp3
```

## Remotion Helper Assets

`remotion/` is used for video and still generation only. It does not calculate the browser's real-time rigid-body simulation.

```powershell
npm install
npm run studio
npm run render:cannon
npm run still:cannon
npm run typecheck
```

## Deploy to Cloudflare Pages

The project has no backend and can be deployed as a static site. Use the repository root as the Cloudflare Pages output directory, or Direct Upload the complete static directory containing `index.html`, styles, scripts, audio, and `vendor/`.

Current deployment:

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
