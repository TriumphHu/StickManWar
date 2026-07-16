const FACTIONS = {
  red: {
    name: "赤焰军",
    shortName: "赤焰",
    sigil: "焰",
    color: "#f04f3d",
    machine: "熔炉出兵机",
    resource: "战意火种",
    base: "赤焰要塞",
    ultimate: "天火审判",
    fortressUltimate: "炼狱天坠",
    commanderSkill: { name: "炎军号令", cooldown: 10, text: "点燃战旗，使附近盟军获得 5 秒急速。" },
    defense: { name: "熔火炮", damage: 46, cooldown: 1.65, className: "forge-shot", mount: "forge-mortar", color: "#ff8d3a", duration: .62, arc: 19 },
    trait: "持续作战会提高伤害，擅长正面突破。",
    units: [
      { name: "突击兵", role: "近战", hp: 80, damage: 13, speed: 5.2, range: 3, text: "短刀快攻，持续交战升温。" },
      { name: "长枪兵", role: "破城", hp: 140, damage: 24, speed: 4.1, range: 5, text: "长枪压线，对要塞伤害提高。" },
      { name: "狂战士", role: "爆发", hp: 225, damage: 40, speed: 4.5, range: 3, text: "重斧突进，残血时攻速提升。" },
      { name: "炎刃统领", role: "核心", hp: 420, damage: 67, speed: 3.5, range: 5, text: "巨刃统帅，强化赤焰攻势。" }
    ]
  },
  blue: {
    name: "霜蓝卫",
    shortName: "霜蓝",
    sigil: "霜",
    color: "#55a9f5",
    machine: "冰晶出兵机",
    resource: "寒霜晶核",
    base: "霜蓝要塞",
    ultimate: "绝对零度",
    fortressUltimate: "永冻纪元",
    commanderSkill: { name: "冰脉壁垒", cooldown: 11, text: "为附近盟军施加护盾，并冻结最接近的敌人。" },
    defense: { name: "冰晶弩", damage: 32, cooldown: 1.15, className: "ice-shot", mount: "ice-ballista", color: "#7ad8ff", duration: .42, arc: 5 },
    trait: "高生命与减速控制，擅长稳守反推。",
    units: [
      { name: "盾卫", role: "承伤", hp: 115, damage: 9, speed: 3.8, range: 3, text: "圆盾护身，承受前线伤害。" },
      { name: "冰弓手", role: "远程", hp: 105, damage: 21, speed: 4, range: 10, text: "远程冰箭，命中后降低移速。" },
      { name: "重甲守军", role: "壁垒", hp: 310, damage: 31, speed: 2.8, range: 3, text: "塔盾重甲，停步时获得减伤。" },
      { name: "寒霜巨像", role: "控制", hp: 590, damage: 59, speed: 2.5, range: 5, text: "冰锤重击，对邻近目标溅射。" }
    ]
  },
  green: {
    name: "翠核同盟",
    shortName: "翠核",
    sigil: "翠",
    color: "#5bc873",
    machine: "根脉培育炉",
    resource: "生命孢子",
    base: "世界树堡垒",
    ultimate: "森罗生长",
    fortressUltimate: "万木归宗",
    commanderSkill: { name: "森灵复苏", cooldown: 12, text: "治疗附近盟军，并修复少量要塞生命。" },
    defense: { name: "荆棘弩", damage: 34, cooldown: 1.3, className: "thorn-shot", mount: "thorn-launcher", color: "#82e88b", duration: .5, arc: 10 },
    trait: "阵线越密集，恢复与反伤越强，擅长持久消耗。",
    units: [
      { name: "藤刃斥候", role: "标记", hp: 95, damage: 12, speed: 5.4, range: 3, text: "双叶短刃标记猎物，盟军集火时增伤。" },
      { name: "孢子投手", role: "毒云", hp: 115, damage: 19, speed: 3.7, range: 9, text: "种荚炮播撒毒孢子，持续侵蚀目标。" },
      { name: "荆棘卫士", role: "反伤", hp: 280, damage: 28, speed: 2.8, range: 3, text: "棘盾承伤，近战攻击者会受到反噬。" },
      { name: "古树泰坦", role: "光环", hp: 520, damage: 50, speed: 2.6, range: 5, text: "根锤震地，为附近盟军提供再生光环。" }
    ]
  },
  yellow: {
    name: "鎏金王庭",
    shortName: "鎏金",
    sigil: "曜",
    color: "#f0c940",
    machine: "日轮增幅塔",
    resource: "日冕电荷",
    base: "太阳王冠要塞",
    ultimate: "日冕超载",
    fortressUltimate: "恒星耀斑",
    commanderSkill: { name: "日轮裁决", cooldown: 10.5, text: "轰击附近敌军，并使附近盟军进入急速。" },
    defense: { name: "棱光炮", damage: 38, cooldown: 1.22, className: "solar-shot", mount: "solar-caster", color: "#ffe66d", duration: .38, arc: 3 },
    trait: "快速累积过载，攻击在目标间跳跃，擅长瞬间压制。",
    units: [
      { name: "电弧侍从", role: "跳电", hp: 85, damage: 15, speed: 5.5, range: 3, text: "弧刃命中后向邻近敌人跳电。" },
      { name: "逐光弩手", role: "穿透", hp: 100, damage: 22, speed: 4.3, range: 11, text: "棱镜弩贯穿前排，折射攻击第二目标。" },
      { name: "雷铠先锋", role: "冲锋", hp: 230, damage: 38, speed: 4.8, range: 4, text: "磁暴枪蓄积动能，长距离冲锋强化首击。" },
      { name: "曜日执政官", role: "核心", hp: 430, damage: 62, speed: 3.8, range: 6, text: "日轮戟释放连锁雷光，维持超载光环。" }
    ]
  }
};

const TIER_COLORS = ["#d9d5c9", "#5bc873", "#55a9f5", "#f0c940"];
const TIER_LABELS = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ"];
const UNIT_COSTS = [3, 6, 10, 16];
const ULTIMATE_COST = 30;
const MAX_BASE_HP = 1600;
const FORTRESS_ULTIMATE_THRESHOLD = MAX_BASE_HP / 3;
const MAX_MARBLE_SPEED = 10.5;
const { Engine, Bodies, Body, Composite } = Matter;
let physicsStages = {};

const state = {
  playerHp: MAX_BASE_HP,
  enemyHp: MAX_BASE_HP,
  elapsed: 0,
  units: [],
  pendingShots: [],
  leftPools: [0, 0, 0, 0],
  rightPools: [0, 0, 0, 0],
  leftBoost: 0,
  rightBoost: 0,
  leftRouteCounts: { troop: 0, split: 0, boost: 0 },
  rightRouteCounts: { troop: 0, split: 0, boost: 0 },
  leftSpawnCount: 0,
  rightSpawnCount: 0,
  running: false,
  speed: 1,
  ended: false,
  lastFrame: performance.now(),
  leftMarbleAccumulator: 0,
  rightMarbleAccumulator: 0,
  playerDefenseCooldown: 0,
  enemyDefenseCooldown: 0,
  playerFortressUltimateUsed: false,
  enemyFortressUltimateUsed: false,
  defenseProjectiles: [],
  unitProjectiles: [],
  commanderEffects: [],
  audioMuted: true,
  unitId: 0,
  ultimateEffects: [],
  leftFaction: "red",
  rightFaction: "blue",
  started: false,
  drawing: false
};

const ui = {
  battleTime: document.querySelector("#battle-time"),
  playerHealth: document.querySelector("#player-health"),
  enemyHealth: document.querySelector("#enemy-health"),
  playerHealthBar: document.querySelector("#player-health-bar"),
  enemyHealthBar: document.querySelector("#enemy-health-bar"),
  playerFortressStatus: document.querySelector("#player-fortress-status"),
  enemyFortressStatus: document.querySelector("#enemy-fortress-status"),
  playerFortressThreshold: document.querySelector("#player-fortress-threshold"),
  enemyFortressThreshold: document.querySelector("#enemy-fortress-threshold"),
  leftAlive: document.querySelector("#left-alive"),
  rightAlive: document.querySelector("#right-alive"),
  leftSpawnCount: document.querySelector("#left-spawn-count"),
  rightSpawnCount: document.querySelector("#right-spawn-count"),
  battlefield: document.querySelector("#battlefield"),
  drawScreen: document.querySelector("#draw-screen"),
  drawArena: document.querySelector("#draw-arena"),
  drawStatus: document.querySelector("#draw-status"),
  drawStart: document.querySelector("#draw-start"),
  drawLeftName: document.querySelector("#draw-left-name"),
  drawLeftSigil: document.querySelector("#draw-left-sigil"),
  drawRightName: document.querySelector("#draw-right-name"),
  drawRightSigil: document.querySelector("#draw-right-sigil"),
  drawTokens: [...document.querySelectorAll("[data-draw-faction]")],
  leftScoreName: document.querySelector("#left-score-name"),
  rightScoreName: document.querySelector("#right-score-name"),
  leftScoreDot: document.querySelector("#left-score-dot"),
  rightScoreDot: document.querySelector("#right-score-dot"),
  liveStateText: document.querySelector("#live-state-text"),
  leftMachinePanel: document.querySelector(".left-machine"),
  rightMachinePanel: document.querySelector(".right-machine"),
  leftMachineMark: document.querySelector("#left-machine-mark"),
  rightMachineMark: document.querySelector("#right-machine-mark"),
  leftMachineName: document.querySelector("#left-machine-name"),
  rightMachineName: document.querySelector("#right-machine-name"),
  leftBoostName: document.querySelector("#left-boost-name"),
  rightBoostName: document.querySelector("#right-boost-name"),
  leftUnitNames: [0, 1, 2, 3].map((tier) => document.querySelector(`#left-unit-name-${tier}`)),
  rightUnitNames: [0, 1, 2, 3].map((tier) => document.querySelector(`#right-unit-name-${tier}`)),
  playerStatusDot: document.querySelector("#player-status-dot"),
  enemyStatusDot: document.querySelector("#enemy-status-dot"),
  playerBaseName: document.querySelector("#player-base-name"),
  enemyBaseName: document.querySelector("#enemy-base-name"),
  playerBase: document.querySelector("#player-base"),
  enemyBase: document.querySelector("#enemy-base"),
  machines: {
    left: {
      upperStage: document.querySelector("#left-upper-stage"),
      lowerStage: document.querySelector("#left-lower-stage"),
      transfer: document.querySelector("#left-transfer"),
      upperCannon: document.querySelector("#left-upper-cannon"),
      lowerCannon: document.querySelector("#left-lower-cannon"),
      upperPools: document.querySelector("#left-upper-pools"),
      unitPools: document.querySelector("#left-unit-pools"),
      lowerQueue: document.querySelector("#left-lower-queue"),
      routeTotals: {
        troop: document.querySelector("#left-troop-total"),
        split: document.querySelector("#left-split-total"),
        boost: document.querySelector("#left-boost-total")
      },
      poolValues: [0, 1, 2, 3].map((tier) => document.querySelector(`#left-pool-${tier}`)),
      ultimateBar: document.querySelector("#left-ultimate-bar")
    },
    right: {
      upperStage: document.querySelector("#right-upper-stage"),
      lowerStage: document.querySelector("#right-lower-stage"),
      transfer: document.querySelector("#right-transfer"),
      upperCannon: document.querySelector("#right-upper-cannon"),
      lowerCannon: document.querySelector("#right-lower-cannon"),
      upperPools: document.querySelector("#right-upper-pools"),
      unitPools: document.querySelector("#right-unit-pools"),
      lowerQueue: document.querySelector("#right-lower-queue"),
      routeTotals: {
        troop: document.querySelector("#right-troop-total"),
        split: document.querySelector("#right-split-total"),
        boost: document.querySelector("#right-boost-total")
      },
      poolValues: [0, 1, 2, 3].map((tier) => document.querySelector(`#right-pool-${tier}`)),
      ultimateBar: document.querySelector("#right-ultimate-bar")
    }
  },
  unitLayer: document.querySelector("#unit-layer"),
  codexFactions: document.querySelector("#codex-factions"),
  battleLog: document.querySelector("#battle-log-text"),
  callout: document.querySelector("#battle-callout"),
  audio: document.querySelector("#battle-bgm"),
  audioButton: document.querySelector("#audio-button"),
  pause: document.querySelector("#pause-button"),
  speed: document.querySelector("#speed-button"),
  resultModal: document.querySelector("#result-modal"),
  resultTitle: document.querySelector("#result-title"),
  resultCopy: document.querySelector("#result-copy")
};

function commanderFigureMarkup(factionKey) {
  const figures = {
    red: `
      <svg class="commander-art" viewBox="0 0 120 160" aria-hidden="true">
        <ellipse class="commander-aura" cx="60" cy="145" rx="43" ry="9"></ellipse>
        <path class="commander-cape" d="M46 57Q24 91 30 137L60 120L69 65Z"></path>
        <path class="commander-limb leg-left" d="M51 91L43 126L34 145"></path><path class="commander-limb leg-right" d="M69 91L77 126L87 145"></path>
        <path class="commander-limb arm-left" d="M49 67L31 86L25 105"></path><path class="commander-limb arm-right" d="M72 67L88 83L96 101"></path>
        <path class="commander-armor" d="M43 52L60 42L79 53L74 95L46 95Z"></path>
        <path class="commander-pauldron" d="M43 58L25 68L31 86L49 76ZM79 58L97 68L91 87L73 76Z"></path>
        <circle class="commander-head" cx="60" cy="34" r="14"></circle><path class="commander-crown" d="M43 31L49 14L58 23L68 11L79 31Z"></path>
        <path class="commander-face" d="M51 35L59 39L69 32"></path>
        <g class="commander-weapon"><path class="weapon-handle" d="M94 101L102 144"></path><path class="weapon-blade" d="M93 105Q106 66 97 29Q113 57 108 93L101 109Z"></path></g>
      </svg>`,
    blue: `
      <svg class="commander-art" viewBox="0 0 120 160" aria-hidden="true">
        <ellipse class="commander-aura" cx="60" cy="145" rx="45" ry="9"></ellipse>
        <path class="commander-back" d="M20 119L31 33L48 58L60 13L75 58L98 31L105 119Z"></path>
        <path class="commander-limb leg-left" d="M52 92L45 126L36 146"></path><path class="commander-limb leg-right" d="M69 92L76 127L86 146"></path>
        <path class="commander-limb arm-left" d="M48 68L29 85L23 106"></path><path class="commander-limb arm-right" d="M73 68L91 84L99 105"></path>
        <path class="commander-armor" d="M40 52L60 41L82 53L77 99L44 99Z"></path>
        <path class="commander-pauldron" d="M40 58L19 70L26 91L47 77ZM83 58L103 70L96 92L76 77Z"></path>
        <circle class="commander-head" cx="60" cy="33" r="16"></circle><path class="commander-crown" d="M40 32L48 9L59 21L71 7L81 32L71 25L60 32L49 24Z"></path>
        <path class="commander-face" d="M49 35H72"></path>
        <g class="commander-weapon shield"><path class="weapon-handle" d="M25 87L31 138"></path><path class="weapon-blade" d="M15 51L34 43L47 62L36 108L16 98L22 76Z"></path><path class="weapon-detail" d="M20 60L37 51M18 78L39 66M17 95L36 83"></path></g>
      </svg>`,
    green: `
      <svg class="commander-art" viewBox="0 0 120 160" aria-hidden="true">
        <ellipse class="commander-aura" cx="60" cy="145" rx="46" ry="9"></ellipse>
        <path class="commander-back" d="M15 119Q38 103 29 70Q50 87 60 18Q72 87 96 67Q86 105 108 119"></path>
        <path class="commander-limb leg-left" d="M51 94L44 127L31 147"></path><path class="commander-limb leg-right" d="M70 94L77 127L91 147"></path>
        <path class="commander-limb arm-left" d="M47 69L26 85L17 106"></path><path class="commander-limb arm-right" d="M74 69L94 85L104 106"></path>
        <path class="commander-armor" d="M39 52L59 40L82 53L78 101L43 101Z"></path>
        <path class="commander-pauldron" d="M40 58L19 67L25 92L47 77ZM82 58L103 67L98 92L76 77Z"></path>
        <circle class="commander-head" cx="60" cy="32" r="16"></circle><path class="commander-crown" d="M43 30Q38 13 50 18Q54 2 61 20Q72 3 71 21Q86 12 77 33Z"></path>
        <path class="commander-face" d="M49 34L59 39L71 31"></path>
        <g class="commander-weapon"><path class="weapon-handle" d="M101 60L94 145"></path><path class="weapon-blade" d="M101 49Q114 51 111 65Q100 74 89 63Q90 51 101 49ZM101 49Q95 33 107 26Q112 39 105 51M108 55Q119 45 118 60Q113 68 107 64"></path></g>
      </svg>`,
    yellow: `
      <svg class="commander-art" viewBox="0 0 120 160" aria-hidden="true">
        <ellipse class="commander-aura" cx="60" cy="145" rx="44" ry="9"></ellipse><circle class="commander-halo" cx="60" cy="31" r="25"></circle>
        <path class="commander-cape" d="M47 55Q30 87 31 137L60 120L72 61Z"></path>
        <path class="commander-limb leg-left" d="M52 91L44 126L36 146"></path><path class="commander-limb leg-right" d="M69 91L77 126L86 146"></path>
        <path class="commander-limb arm-left" d="M49 67L31 85L25 105"></path><path class="commander-limb arm-right" d="M72 67L90 84L97 104"></path>
        <path class="commander-armor" d="M43 51L60 40L80 52L75 97L46 97Z"></path>
        <path class="commander-pauldron" d="M43 58L25 69L31 88L49 77ZM80 58L98 68L92 89L74 77Z"></path>
        <circle class="commander-head" cx="60" cy="32" r="14"></circle><path class="commander-crown" d="M43 30L47 14L57 21L61 7L68 21L78 13L80 31L69 24L60 30L50 24Z"></path>
        <path class="commander-face" d="M50 34H71"></path>
        <g class="commander-weapon"><path class="weapon-handle" d="M101 42L101 146"></path><path class="weapon-blade" d="M101 20L114 39L101 57L88 39ZM86 68L101 58L116 68L101 77Z"></path><path class="weapon-detail" d="M101 23V55M91 39H111"></path></g>
      </svg>`
  };
  return figures[factionKey];
}

function unitFigureMarkup(factionKey = "", tier = -1) {
  if (tier === 3) return commanderFigureMarkup(factionKey);
  return `
    <span class="head"></span><span class="body"></span>
    <i class="arm left"></i><i class="arm right"></i>
    <i class="leg left"></i><i class="leg right"></i>
    <b class="weapon"></b><b class="gear"></b><b class="crest"></b><em class="impact"></em>
  `;
}

function factionKeyForSide(side) {
  return side === "left" ? state.leftFaction : state.rightFaction;
}

function factionForSide(side) {
  return FACTIONS[factionKeyForSide(side)];
}

function teamForSide(side) {
  return side === "left" ? "player" : "enemy";
}

function enemyTeamForSide(side) {
  return side === "left" ? "enemy" : "player";
}

function ownHpKey(side) {
  return side === "left" ? "playerHp" : "enemyHp";
}

function enemyHpKey(side) {
  return side === "left" ? "enemyHp" : "playerHp";
}

function baseMarkup(key) {
  if (key === "red") return `
    <div class="forge-chimney"><i></i><i></i></div><div class="forge-roof"></div>
    <div class="forge-body"><span class="forge-door"></span><span class="forge-core"></span></div><div class="forge-flame"></div>
    <div class="fortress-defense forge-mortar" aria-hidden="true"><i class="defense-base"></i><i class="defense-barrel"></i><i class="defense-sight"></i></div>`;
  if (key === "blue") return `
    <div class="ice-spires"><i></i><i></i><i></i></div><div class="ice-crown"></div>
    <div class="ice-body"><span class="ice-door"></span><span class="ice-core"></span></div><div class="ice-wings"></div>
    <div class="fortress-defense ice-ballista" aria-hidden="true"><i class="defense-base"></i><i class="defense-barrel"></i><i class="defense-sight"></i></div>`;
  if (key === "green") return `
    <div class="worldtree-crown"><i></i><i></i><i></i></div><div class="worldtree-trunk"><span></span></div>
    <div class="worldtree-roots"><i></i><i></i><i></i></div><div class="worldtree-core"></div>
    <div class="fortress-defense thorn-launcher" aria-hidden="true"><i class="defense-base"></i><i class="defense-barrel"></i><i class="defense-sight"></i></div>`;
  return `
    <div class="solar-rays"><i></i><i></i><i></i></div><div class="solar-crown"></div>
    <div class="solar-body"><span class="solar-door"></span><span class="solar-core"></span></div><div class="solar-wings"></div>
    <div class="fortress-defense solar-caster" aria-hidden="true"><i class="defense-base"></i><i class="defense-barrel"></i><i class="defense-sight"></i></div>`;
}

function configureMatchUI(leftKey, rightKey) {
  const sides = [
    { side: "left", key: leftKey, panel: ui.leftMachinePanel, mark: ui.leftMachineMark, scoreDot: ui.leftScoreDot, scoreName: ui.leftScoreName, machineName: ui.leftMachineName, boostName: ui.leftBoostName, unitNames: ui.leftUnitNames, statusDot: ui.playerStatusDot, baseName: ui.playerBaseName, base: ui.playerBase, fortressStatus: ui.playerFortressStatus, fortressThreshold: ui.playerFortressThreshold },
    { side: "right", key: rightKey, panel: ui.rightMachinePanel, mark: ui.rightMachineMark, scoreDot: ui.rightScoreDot, scoreName: ui.rightScoreName, machineName: ui.rightMachineName, boostName: ui.rightBoostName, unitNames: ui.rightUnitNames, statusDot: ui.enemyStatusDot, baseName: ui.enemyBaseName, base: ui.enemyBase, fortressStatus: ui.enemyFortressStatus, fortressThreshold: ui.enemyFortressThreshold }
  ];
  sides.forEach(({ side, key, panel, mark, scoreDot, scoreName, machineName, boostName, unitNames, statusDot, baseName, base, fortressStatus, fortressThreshold }) => {
    const faction = FACTIONS[key];
    panel.style.setProperty("--machine-color", faction.color);
    panel.setAttribute("aria-label", `${faction.name}自动出兵机`);
    mark.style.background = faction.color;
    scoreDot.style.background = faction.color;
    statusDot.style.background = faction.color;
    fortressStatus.style.setProperty("--fortress-color", faction.color);
    fortressThreshold.style.setProperty("--fortress-color", faction.color);
    scoreName.textContent = faction.name;
    machineName.textContent = faction.machine;
    boostName.textContent = faction.ultimate;
    baseName.textContent = faction.base;
    unitNames.forEach((element, tier) => { element.textContent = faction.units[tier].name; });
    panel.querySelector(".spawn-total strong").style.color = faction.color;
    base.className = `watchtower ${side === "left" ? "player-base" : "enemy-base"} base-${key}`;
    base.style.color = faction.color;
    base.setAttribute("aria-label", faction.base);
    base.innerHTML = `${baseMarkup(key)}<div class="defense-tag">${faction.defense.name} ${faction.defense.damage}</div>`;
  });
  ui.playerHealthBar.style.background = FACTIONS[leftKey].color;
  ui.enemyHealthBar.style.background = FACTIONS[rightKey].color;
  document.querySelector(".player-defense-range").style.setProperty("--range-color", FACTIONS[leftKey].color);
  document.querySelector(".enemy-defense-range").style.setProperty("--range-color", FACTIONS[rightKey].color);
  document.querySelector("#dev-left-label").textContent = `${FACTIONS[leftKey].name} · 左侧`;
  document.querySelector("#dev-right-label").textContent = `${FACTIONS[rightKey].name} · 右侧`;
  document.querySelectorAll("[data-dev-tier]").forEach((button) => {
    const factionKey = button.dataset.devSide === "left" ? leftKey : rightKey;
    const tier = Number(button.dataset.devTier);
    button.title = `测试召唤 ${FACTIONS[factionKey].units[tier].name}`;
    button.setAttribute("aria-label", button.title);
  });
  renderCodex();
}

function renderCodex() {
  ui.codexFactions.innerHTML = [
    { key: state.leftFaction, sideClass: "left-codex", label: "左侧阵营" },
    { key: state.rightFaction, sideClass: "right-codex", label: "右侧阵营" }
  ].map(({ key, sideClass, label }) => {
    const faction = FACTIONS[key];
    return `
      <section class="codex-side ${sideClass}" style="--faction-color:${faction.color}">
        <div class="codex-side-heading"><span class="codex-side-label">${label}</span><strong>${faction.name}</strong><span class="codex-side-trait">${faction.trait}</span></div>
        <div class="codex-units">
          ${faction.units.map((unit, tier) => `
            <article class="codex-card tier-${tier + 1}" style="--faction-color:${faction.color};--card-scale:${[.76, .96, 1.22, 1.52][tier]}">
              <div class="codex-figure" aria-hidden="true"><div class="unit-figure unit-${key} unit-${tier + 1} ${tier === 3 ? "has-commander-art" : ""}">${unitFigureMarkup(key, tier)}</div></div>
              <div class="codex-info">
                <span class="codex-tier">等级 ${TIER_LABELS[tier]} · ${unit.role}</span>
                <h3>${unit.name}</h3><p>${unit.text}</p>
                ${tier === 3 ? `<div class="commander-skill"><b>${faction.commanderSkill.name}</b><span>${faction.commanderSkill.text}</span></div>` : ""}
                <div class="stat-line"><span>生命 <b>${unit.hp}</b></span><span>攻击 <b>${unit.damage}</b></span><span>射程 <b>${unit.range}</b></span></div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function createPhysicsStage(side, level) {
  const machine = ui.machines[side];
  const element = level === "upper" ? machine.upperStage : machine.lowerStage;
  const width = element.clientWidth;
  const height = element.clientHeight;
  const engine = Engine.create({ positionIterations: 8, velocityIterations: 6 });
  engine.gravity.y = 1;
  engine.gravity.scale = .00125;

  const obstacleElements = [...element.querySelectorAll(".belt-loop i")];
  const obstacles = obstacleElements.map(() => Bodies.rectangle(0, 64, 12, 12, {
    isStatic: true,
    restitution: .72,
    friction: 0,
    frictionStatic: 0,
    chamfer: { radius: 2 },
    label: "conveyor-block"
  }));
  const walls = [
    Bodies.rectangle(-6, height / 2, 12, height * 2, { isStatic: true, restitution: .7 }),
    Bodies.rectangle(width + 6, height / 2, 12, height * 2, { isStatic: true, restitution: .7 }),
    Bodies.rectangle(width / 2, -6, width, 12, { isStatic: true, restitution: .7 }),
    Bodies.rectangle(side === "left" ? width * .09 : width * .91, height - 10, width * .22, 7, {
      isStatic: true,
      angle: side === "left" ? .34 : -.34,
      restitution: .35,
      friction: .04,
      label: "pool-guide"
    })
  ];
  Composite.add(engine.world, [...obstacles, ...walls]);

  return {
    side,
    level,
    element,
    width,
    height,
    engine,
    obstacles,
    obstacleElements,
    trackLeft: side === "left" ? 76 : 8,
    trackWidth: width - 84,
    conveyorDirection: side === "left" ? 1 : -1,
    shots: new Set()
  };
}

function positionConveyorBodies(world) {
  const spacing = world.trackWidth / 6;
  world.obstacles.forEach((obstacle, index) => {
    const loopIndex = Math.floor(index / 6);
    const positionInLoop = index % 6;
    const loopOffset = (loopIndex + (world.conveyorDirection > 0 ? -1 : 0)) * world.trackWidth;
    Body.setPosition(obstacle, {
      x: world.trackLeft + loopOffset + (positionInLoop + .5) * spacing,
      y: 64
    });
  });
  renderConveyorBodies(world);
}

function advanceConveyorBodies(world, step) {
  const speed = world.conveyorDirection * world.trackWidth / 3;
  const spacing = world.trackWidth / 6;
  world.obstacles.forEach((obstacle) => {
    let x = obstacle.position.x + speed * step;
    const minX = world.trackLeft - spacing / 2;
    const maxX = world.trackLeft + world.trackWidth + spacing / 2;
    if (world.conveyorDirection < 0 && x < minX) x += world.trackWidth * 2;
    if (world.conveyorDirection > 0 && x > maxX) x -= world.trackWidth * 2;
    Body.setPosition(obstacle, { x, y: 64 });
    Body.setVelocity(obstacle, { x: 0, y: 0 });
  });
}

function renderConveyorBodies(world) {
  world.obstacles.forEach((obstacle, index) => {
    const x = obstacle.position.x - world.trackLeft - 6;
    const y = obstacle.position.y - 54 - 6;
    world.obstacleElements[index].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

function initPhysicsStages() {
  physicsStages = {};
  ["left", "right"].forEach((side) => {
    ["upper", "lower"].forEach((level) => {
      const key = `${side}-${level}`;
      physicsStages[key] = createPhysicsStage(side, level);
      positionConveyorBodies(physicsStages[key]);
    });
  });
}

function updatePhysicsWorlds(dt) {
  Object.values(physicsStages).forEach((world) => {
    let remaining = dt;
    while (remaining > 0) {
      const step = Math.min(remaining, 1 / 60);
      advanceConveyorBodies(world, step);
      Engine.update(world.engine, step * 1000);
      world.shots.forEach((shot) => {
        const velocity = shot.body.velocity;
        const speed = Math.hypot(velocity.x, velocity.y);
        if (speed > MAX_MARBLE_SPEED) {
          const scale = MAX_MARBLE_SPEED / speed;
          Body.setVelocity(shot.body, { x: velocity.x * scale, y: velocity.y * scale });
        }
      });
      remaining -= step;
    }

    renderConveyorBodies(world);

    world.shots.forEach((shot) => {
      const { x, y } = shot.body.position;
      const { x: velocityX, y: velocityY } = shot.body.velocity;
      const speed = Math.hypot(velocityX, velocityY);
      const angle = Math.atan2(velocityY, velocityX) * 180 / Math.PI;
      shot.element.style.transform = `translate3d(${x - 6.5}px, ${y - 6.5}px, 0)`;
      shot.element.style.setProperty("--tail-angle", `${angle}deg`);
      shot.element.style.setProperty("--tail-length", `${Math.max(10, Math.min(30, speed * 3.1))}px`);
      shot.element.dataset.speed = speed.toFixed(3);
      shot.age += dt;
    });
  });
}

function launchStageShot(side, level, color) {
  const machine = ui.machines[side];
  const stage = level === "upper" ? machine.upperStage : machine.lowerStage;
  const cannon = level === "upper" ? machine.upperCannon : machine.lowerCannon;
  const world = physicsStages[`${side}-${level}`];
  const cannonAngleMagnitude = 20 + Math.random() * 60;
  const launchSpeed = 6.8 + Math.random() * 3.4;
  const radians = cannonAngleMagnitude * Math.PI / 180;
  const direction = side === "left" ? 1 : -1;
  const horizontalVelocity = Math.cos(radians) * launchSpeed * direction;
  const verticalVelocity = -Math.sin(radians) * launchSpeed;
  const cannonAngle = -cannonAngleMagnitude;
  const shot = document.createElement("span");
  shot.className = "stage-marble";
  shot.style.setProperty("--marble-color", color);
  cannon.style.setProperty("--cannon-angle", `${cannonAngle}deg`);
  cannon.dataset.angle = cannonAngleMagnitude.toFixed(1);
  cannon.classList.remove("firing");
  void cannon.offsetWidth;
  cannon.classList.add("firing");
  stage.appendChild(shot);
  const barrelPivotX = side === "left" ? 26 : world.width - 26;
  const barrelPivotY = world.height - 30;
  const barrelLength = 42;
  const launchX = barrelPivotX + Math.cos(radians) * barrelLength * direction;
  const launchY = barrelPivotY - Math.sin(radians) * barrelLength;
  const body = Bodies.circle(launchX, launchY, 6, {
    restitution: .74,
    friction: 0,
    frictionStatic: 0,
    frictionAir: .0025,
    density: .0012,
    label: "marble"
  });
  shot.style.transform = `translate3d(${launchX - 6.5}px, ${launchY - 6.5}px, 0)`;
  shot.dataset.launchSpeed = launchSpeed.toFixed(2);
  Body.setVelocity(body, { x: horizontalVelocity, y: verticalVelocity });
  Composite.add(world.engine.world, body);
  const physicsShot = { side, level, element: shot, body, world, age: 0 };
  world.shots.add(physicsShot);
  state.pendingShots.push(physicsShot);
}

function createUpperShot(side) {
  launchStageShot(side, "upper", "#eee9dc");
}

function createLowerShot(side) {
  launchStageShot(side, "lower", "#eee9dc");
  updateMachineHud(side);
}

function createTransferShot(side) {
  const machine = ui.machines[side];
  const width = machine.transfer.clientWidth;
  const startX = width * (side === "left" ? .795 : .205);
  const targetX = side === "left" ? 24 : width - 24;
  const duration = 1.65;
  const ball = document.createElement("span");
  ball.className = "transfer-ball";
  ball.style.setProperty("--transfer-start", `${side === "left" ? 79.5 : 20.5}%`);
  ball.style.setProperty("--transfer-x", `${targetX - startX}px`);
  ball.style.animationDuration = `${duration / state.speed}s`;
  machine.transfer.appendChild(ball);
  state.pendingShots.push({ side, level: "transfer", element: ball, remaining: duration });
  updateMachineHud(side);
}

function createSplitReturnShot(side, branch) {
  const machine = ui.machines[side];
  const machineBody = machine.upperStage.closest(".two-stage-machine");
  const duration = branch === 0 ? 1.22 : 1.3;
  const ball = document.createElement("span");
  ball.className = `return-ball return-branch-${branch}`;
  ball.style.left = `calc(50% + ${branch === 0 ? -5 : 5}px)`;
  ball.style.setProperty("--return-right", `${side === "left" ? machineBody.clientWidth / 2 - 13 : 13 - machineBody.clientWidth / 2}px`);
  ball.style.setProperty("--return-left", `${side === "left" ? 34 - machineBody.clientWidth / 2 : machineBody.clientWidth / 2 - 34}px`);
  ball.style.setProperty("--return-top", "-162px");
  ball.style.setProperty("--return-cannon", "-82px");
  ball.style.animationDuration = `${duration / state.speed}s`;
  machineBody.appendChild(ball);
  state.pendingShots.push({ side, level: "return", element: ball, remaining: duration });
}

function flashSlot(slot, className = "flash") {
  slot.classList.remove("flash");
  slot.classList.remove("ready");
  void slot.offsetWidth;
  slot.classList.add(className);
}

function landingDatasetValue(shot, container, selector, key) {
  const stageRect = shot.world.element.getBoundingClientRect();
  const landingX = stageRect.left + Math.max(0, Math.min(stageRect.width, shot.body.position.x));
  const slots = [...container.querySelectorAll(selector)];
  const landedSlot = slots.find((slot) => {
    const rect = slot.getBoundingClientRect();
    return landingX >= rect.left && landingX <= rect.right;
  }) || slots.reduce((nearest, slot) => {
    const rect = slot.getBoundingClientRect();
    const distance = Math.abs(landingX - (rect.left + rect.width / 2));
    return !nearest || distance < nearest.distance ? { slot, distance } : nearest;
  }, null).slot;
  return landedSlot.dataset[key];
}

function resolveUpperShot(shot) {
  const { side } = shot;
  const machine = ui.machines[side];
  const result = landingDatasetValue(shot, machine.upperPools, ".function-pool", "result");
  const routeCounts = side === "left" ? state.leftRouteCounts : state.rightRouteCounts;
  routeCounts[result] += 1;
  flashSlot(machine.upperPools.querySelector(`[data-result="${result}"]`));

  if (result === "troop") {
    createTransferShot(side);
  } else if (result === "split") {
    createSplitReturnShot(side, 0);
    createSplitReturnShot(side, 1);
  } else {
    const boostKey = side === "left" ? "leftBoost" : "rightBoost";
    state[boostKey] += 1;
    if (state[boostKey] >= ULTIMATE_COST) castUltimate(side);
  }
  updateMachineHud(side);
}

function resolveLowerShot(shot) {
  const { side } = shot;
  const isLeft = side === "left";
  const pools = isLeft ? state.leftPools : state.rightPools;
  const machine = ui.machines[side];
  const tier = Number(landingDatasetValue(shot, machine.unitPools, ".unit-pool", "tier"));
  const slot = machine.unitPools.querySelector(`[data-tier="${tier}"]`);
  pools[tier] += 1;
  flashSlot(slot);

  if (pools[tier] >= UNIT_COSTS[tier]) {
    pools[tier] -= UNIT_COSTS[tier];
    flashSlot(slot, "ready");
    const factionKey = factionKeyForSide(side);
    const team = teamForSide(side);
    spawnUnit(team, factionKey, tier);
    if (isLeft) state.leftSpawnCount += 1;
    else state.rightSpawnCount += 1;
    log(`${FACTIONS[factionKey].name}${TIER_LABELS[tier]}级储珠已满，自动部署${FACTIONS[factionKey].units[tier].name}。`);
  }
  updateMachineHud(side);
}

function updateShots(dt) {
  state.pendingShots.forEach((shot) => {
    if (shot.level === "transfer" || shot.level === "return") shot.remaining -= dt;
  });
  const resolved = state.pendingShots.filter((shot) => {
    if (shot.level === "transfer" || shot.level === "return") return shot.remaining <= 0;
    const position = shot.body.position;
    return position.y > shot.world.height + 10 || shot.age > 5;
  });
  state.pendingShots = state.pendingShots.filter((shot) => !resolved.includes(shot));
  resolved.forEach((shot) => {
    shot.element.remove();
    if (shot.world) {
      shot.world.shots.delete(shot);
      Composite.remove(shot.world.engine.world, shot.body);
    }
    if (shot.level === "upper") resolveUpperShot(shot);
    else if (shot.level === "transfer") createLowerShot(shot.side);
    else if (shot.level === "return") createUpperShot(shot.side);
    else resolveLowerShot(shot);
  });
}

function castUltimate(side, source = "charge") {
  const factionKey = factionKeyForSide(side);
  const faction = FACTIONS[factionKey];
  const ownTeam = teamForSide(side);
  const enemyTeam = enemyTeamForSide(side);
  const isFortressUltimate = source === "fortress";
  const boostKey = side === "left" ? "leftBoost" : "rightBoost";
  if (!isFortressUltimate) state[boostKey] = 0;
  const effectElement = document.createElement("div");
  const effectClass = { red: "meteor-storm", blue: "frost-wave", green: "growth-surge", yellow: "solar-overload" }[factionKey];
  effectElement.className = `ultimate-effect ${effectClass} side-${side} ${isFortressUltimate ? "fortress-ultimate" : ""}`;
  effectElement.style.setProperty("--fortress-color", faction.color);
  const visualSpeed = state.speed;
  const visualTimes = {
    "--shake-duration": .18, "--shake-delay": .2, "--meteor-duration": .48,
    "--impact-duration": .55, "--impact-offset": .42, "--burn-duration": 3.4,
    "--burn-delay": 1.35, "--frost-duration": 2.8, "--sweep-duration": 1.2,
    "--crack-duration": 2.5, "--crack-delay": .35, "--ground-delay": .3,
    "--fortress-duration": isFortressUltimate ? 5.8 : 2.8
  };
  Object.entries(visualTimes).forEach(([name, seconds]) => effectElement.style.setProperty(name, `${seconds / visualSpeed}s`));
  const leftCenters = isFortressUltimate ? [38, 48, 58, 69, 80, 90] : [48, 62, 76, 88];
  const strikeCenters = side === "left" ? leftCenters : leftCenters.map((center) => 100 - center);
  const strikeInterval = isFortressUltimate ? .22 : .32;
  if (factionKey === "red") effectElement.innerHTML = `${strikeCenters.map((center, index) => `<i style="--strike-x:${center}%;--delay:${index * strikeInterval / visualSpeed}s"></i>`).join("")}<b></b>`;
  if (factionKey === "blue") effectElement.innerHTML = `<i></i><b></b><span></span>`;
  if (factionKey === "green") effectElement.innerHTML = `<i></i><i></i><i></i><b></b><span></span>`;
  if (factionKey === "yellow") effectElement.innerHTML = `<i></i><i></i><i></i><i></i><b></b>`;
  ui.battlefield.appendChild(effectElement);

  if (factionKey === "red") {
    state.ultimateEffects.push({
      type: "red",
      side,
      enemyTeam,
      age: 0,
      nextStrike: 0,
      burnTick: 0,
      duration: isFortressUltimate ? 6.8 : 4.8,
      strikeCenters,
      strikeTimes: strikeCenters.map((_, index) => .25 + index * (isFortressUltimate ? .28 : .37)),
      burnStart: isFortressUltimate ? 1.65 : 1.35,
      burnEnd: isFortressUltimate ? 6.35 : 4.35,
      burnDamage: isFortressUltimate ? 20 : 12,
      baseDamage: isFortressUltimate ? 240 : 120,
      empowered: isFortressUltimate,
      element: effectElement
    });
  } else if (factionKey === "blue") {
    const unitDamageRatio = isFortressUltimate ? .25 : .14;
    const minimumUnitDamage = isFortressUltimate ? 70 : 38;
    const freezeDuration = isFortressUltimate ? 4.2 : 2.6;
    const shieldDuration = isFortressUltimate ? 7 : 4.5;
    state.units.filter((unit) => unit.team === enemyTeam).forEach((unit) => {
      applyDamage(unit, Math.max(minimumUnitDamage, unit.maxHp * unitDamageRatio));
      unit.freezeTimer = Math.max(unit.freezeTimer, freezeDuration);
    });
    state.units.filter((unit) => unit.team === ownTeam).forEach((unit) => {
      unit.shieldTimer = Math.max(unit.shieldTimer, shieldDuration);
      unit.shieldHp = Math.max(unit.shieldHp, isFortressUltimate ? 150 + unit.tier * 45 : 60 + unit.tier * 25);
    });
    state[enemyHpKey(side)] = Math.max(0, state[enemyHpKey(side)] - (isFortressUltimate ? 160 : 70));
    state.ultimateEffects.push({ type: "blue", side, age: 0, duration: isFortressUltimate ? 4.2 : 2.8, element: effectElement });
  } else if (factionKey === "green") {
    const rootDuration = isFortressUltimate ? 4.2 : 2.5;
    state.units.filter((unit) => unit.team === enemyTeam).forEach((unit) => {
      unit.freezeTimer = Math.max(unit.freezeTimer, rootDuration);
      applyDamage(unit, isFortressUltimate ? Math.max(58, unit.maxHp * .16) : Math.max(24, unit.maxHp * .08));
    });
    state.units.filter((unit) => unit.team === ownTeam).forEach((unit) => {
      unit.shieldTimer = Math.max(unit.shieldTimer, isFortressUltimate ? 8 : 5);
      unit.shieldHp = Math.max(unit.shieldHp, isFortressUltimate ? 190 + unit.tier * 42 : 80 + unit.tier * 24);
    });
    state.ultimateEffects.push({ type: "green", side, ownTeam, age: 0, healTick: 0, duration: isFortressUltimate ? 7 : 4.5, heal: isFortressUltimate ? 28 : 16, baseHeal: isFortressUltimate ? 24 : 12, element: effectElement });
  } else {
    const enemies = state.units.filter((unit) => unit.team === enemyTeam).sort((a, b) => side === "left" ? a.x - b.x : b.x - a.x);
    const hops = isFortressUltimate ? 7 : 4;
    enemies.slice(0, hops).forEach((unit, index) => applyDamage(unit, (isFortressUltimate ? 90 : 58) * Math.pow(.82, index)));
    state.units.filter((unit) => unit.team === ownTeam).forEach((unit) => { unit.hasteTimer = Math.max(unit.hasteTimer, isFortressUltimate ? 7 : 4); });
    state[enemyHpKey(side)] = Math.max(0, state[enemyHpKey(side)] - (isFortressUltimate ? 190 : 85));
    const extraMarbles = isFortressUltimate ? 7 : 4;
    for (let index = 0; index < extraMarbles; index += 1) setTimeout(() => {
      if (state.started && !state.ended) createTransferShot(side);
    }, index * 150 / state.speed);
    state.ultimateEffects.push({ type: "yellow", side, age: 0, duration: isFortressUltimate ? 4.5 : 2.8, element: effectElement });
  }
  showCallout(`${faction.name}${isFortressUltimate ? "要塞危急技" : "终极技能"} · ${isFortressUltimate ? faction.fortressUltimate : faction.ultimate}`);
  log(`${faction.name}释放${isFortressUltimate ? faction.fortressUltimate : faction.ultimate}，战局效果已生效。`);
  updateMachineHud(side);
}

function updateUltimateEffects(dt) {
  state.ultimateEffects.forEach((effect) => {
    effect.age += dt;
    if (effect.type === "green") {
      effect.healTick += dt;
      while (effect.healTick >= .5) {
        state.units.filter((unit) => unit.team === effect.ownTeam).forEach((unit) => { unit.hp = Math.min(unit.maxHp, unit.hp + effect.heal); });
        const hpKey = ownHpKey(effect.side);
        state[hpKey] = Math.min(MAX_BASE_HP, state[hpKey] + effect.baseHeal);
        effect.healTick -= .5;
      }
      return;
    }
    if (effect.type !== "red") return;
    while (effect.nextStrike < effect.strikeTimes.length && effect.age >= effect.strikeTimes[effect.nextStrike]) {
      const index = effect.nextStrike;
      const center = effect.strikeCenters[index];
      const isFinalStrike = index === effect.strikeTimes.length - 1;
      state.units.filter((unit) => unit.team === effect.enemyTeam && Math.abs(unit.x - center) <= 15).forEach((unit) => {
        const damage = effect.empowered
          ? (isFinalStrike ? Math.max(120, unit.maxHp * .3) : Math.max(68, unit.maxHp * .18))
          : (isFinalStrike ? Math.max(75, unit.maxHp * .2) : Math.max(48, unit.maxHp * .12));
        applyDamage(unit, damage);
        const push = isFinalStrike ? (effect.empowered ? 10 : 7) : (effect.empowered ? 6 : 4);
        unit.x = effect.side === "left" ? Math.min(91, unit.x + push) : Math.max(9, unit.x - push);
      });
      if (isFinalStrike) state[enemyHpKey(effect.side)] = Math.max(0, state[enemyHpKey(effect.side)] - effect.baseDamage);
      effect.nextStrike += 1;
    }
    if (effect.age >= effect.burnStart && effect.age <= effect.burnEnd) {
      effect.burnTick += dt;
      while (effect.burnTick >= .5) {
        state.units.filter((unit) => unit.team === effect.enemyTeam && (effect.side === "left" ? unit.x >= 52 : unit.x <= 48)).forEach((unit) => applyDamage(unit, effect.burnDamage));
        effect.burnTick -= .5;
      }
    }
  });
  const expired = state.ultimateEffects.filter((effect) => effect.age >= effect.duration);
  expired.forEach((effect) => effect.element.remove());
  state.ultimateEffects = state.ultimateEffects.filter((effect) => effect.age < effect.duration);
}

function checkFortressUltimates() {
  if (!state.playerFortressUltimateUsed && state.playerHp > 0 && state.playerHp <= FORTRESS_ULTIMATE_THRESHOLD) {
    state.playerFortressUltimateUsed = true;
    castUltimate("left", "fortress");
  }
  if (!state.enemyFortressUltimateUsed && state.enemyHp > 0 && state.enemyHp <= FORTRESS_ULTIMATE_THRESHOLD) {
    state.enemyFortressUltimateUsed = true;
    castUltimate("right", "fortress");
  }
}

function spawnUnit(team, factionKey, tier) {
  const source = FACTIONS[factionKey].units[tier];
  const unit = {
    id: ++state.unitId,
    team,
    factionKey,
    tier,
    x: team === "player" ? 11 : 89,
    lane: [-3, 0, 3][state.unitId % 3],
    hp: source.hp,
    maxHp: source.hp,
    damage: source.damage,
    speed: source.speed,
    range: source.range,
    cooldown: 0,
    slowTimer: 0,
    freezeTimer: 0,
    shieldTimer: 0,
    shieldHp: 0,
    hasteTimer: 0,
    markTimer: 0,
    poisonTimer: 0,
    poisonDamage: 0,
    poisonTick: 0,
    commanderCooldown: tier === 3 ? 3.5 + Math.random() * 1.5 : Infinity,
    commanderCastTimer: 0,
    movedDistance: 0,
    hitTimer: 0,
    attacking: false,
    moving: true
  };
  state.units.push(unit);
  return unit;
}

function castCommanderSkill(unit) {
  const faction = FACTIONS[unit.factionKey];
  const side = unit.team === "player" ? "left" : "right";
  const allies = state.units.filter((ally) => ally.team === unit.team && ally.hp > 0 && Math.abs(ally.x - unit.x) <= 14);
  const enemies = state.units
    .filter((enemy) => enemy.team !== unit.team && enemy.hp > 0 && Math.abs(enemy.x - unit.x) <= 16)
    .sort((a, b) => Math.abs(a.x - unit.x) - Math.abs(b.x - unit.x));

  if (unit.factionKey === "red") {
    allies.forEach((ally) => { ally.hasteTimer = Math.max(ally.hasteTimer, 5); });
  } else if (unit.factionKey === "blue") {
    allies.forEach((ally) => {
      ally.shieldTimer = Math.max(ally.shieldTimer, 5);
      ally.shieldHp = Math.max(ally.shieldHp, 75 + ally.tier * 20);
    });
    enemies.forEach((enemy, index) => {
      enemy.slowTimer = Math.max(enemy.slowTimer, 4);
      if (index === 0) enemy.freezeTimer = Math.max(enemy.freezeTimer, 1.35);
    });
  } else if (unit.factionKey === "green") {
    allies.forEach((ally) => { ally.hp = Math.min(ally.maxHp, ally.hp + 70 + ally.tier * 12); });
    const hpKey = ownHpKey(side);
    state[hpKey] = Math.min(MAX_BASE_HP, state[hpKey] + 45);
  } else {
    enemies.slice(0, 4).forEach((enemy, index) => applyDamage(enemy, 54 * Math.pow(.82, index), unit));
    allies.forEach((ally) => { ally.hasteTimer = Math.max(ally.hasteTimer, 3.8); });
  }

  const element = document.createElement("div");
  element.className = `commander-effect commander-${unit.factionKey}`;
  element.style.left = `${unit.x}%`;
  element.style.bottom = `calc(9% + ${unit.lane}px)`;
  element.style.setProperty("--commander-color", faction.color);
  element.style.setProperty("--commander-wave-duration", `${1.15 / state.speed}s`);
  element.style.setProperty("--commander-label-duration", `${1.35 / state.speed}s`);
  element.innerHTML = `<i></i><b>${faction.commanderSkill.name}</b>`;
  ui.battlefield.appendChild(element);
  state.commanderEffects.push({ element, unitId: unit.id, age: 0, duration: 1.6 });
  unit.commanderCooldown = faction.commanderSkill.cooldown;
  unit.commanderCastTimer = .85;
  showCallout(`${faction.name}统领技能 · ${faction.commanderSkill.name}`);
  log(`${faction.units[3].name}释放${faction.commanderSkill.name}。`);
}

function updateCommanderEffects(dt) {
  state.commanderEffects.forEach((effect) => {
    effect.age += dt;
    const unit = state.units.find((candidate) => candidate.id === effect.unitId && candidate.hp > 0);
    if (unit) {
      effect.element.style.left = `${unit.x}%`;
      effect.element.style.bottom = `calc(9% + ${unit.lane}px)`;
    }
  });
  const expired = state.commanderEffects.filter((effect) => effect.age >= effect.duration);
  expired.forEach((effect) => effect.element.remove());
  state.commanderEffects = state.commanderEffects.filter((effect) => effect.age < effect.duration);
}

function applyDamage(target, amount, source = null) {
  const blueGuarded = target.factionKey === "blue" && target.tier === 2 && !target.moving;
  const greenGuarded = target.factionKey === "green" && target.tier === 2;
  let damage = amount * (blueGuarded ? .72 : greenGuarded ? .82 : 1);
  if (target.markTimer > 0) damage *= 1.12;
  if (target.shieldTimer > 0 && target.shieldHp > 0) {
    const absorbed = Math.min(target.shieldHp, damage);
    target.shieldHp -= absorbed;
    damage -= absorbed;
  }
  target.hp -= damage;
  target.hitTimer = .2;
  if (greenGuarded && source && source.hp > 0 && Math.abs(source.x - target.x) <= 5) {
    source.hp -= damage * .18;
    source.hitTimer = .2;
  }
}

function applyUnitHit(source, target, damage) {
  applyDamage(target, damage, source);
  if (source.factionKey === "blue" && source.tier === 1) target.slowTimer = 1.4;
  if (source.factionKey === "blue" && source.tier === 3) {
    state.units
      .filter((other) => other.team !== source.team && other.id !== target.id && Math.abs(other.x - target.x) <= 5)
      .forEach((other) => applyDamage(other, damage * .35, source));
  }
  if (source.factionKey === "green" && source.tier === 0) target.markTimer = Math.max(target.markTimer, 3.5);
  if (source.factionKey === "green" && source.tier === 1) {
    target.poisonTimer = Math.max(target.poisonTimer, 3);
    target.poisonDamage = Math.max(target.poisonDamage, 5);
  }
  if (source.factionKey === "yellow" && (source.tier === 0 || source.tier === 3)) {
    const chainCount = source.tier === 3 ? 3 : 1;
    state.units
      .filter((other) => other.team !== source.team && other.id !== target.id && Math.abs(other.x - target.x) <= 7)
      .sort((a, b) => Math.abs(a.x - target.x) - Math.abs(b.x - target.x))
      .slice(0, chainCount)
      .forEach((other, index) => applyDamage(other, damage * (.48 - index * .09), source));
  }
  if (source.factionKey === "yellow" && source.tier === 1) {
    const secondTarget = state.units
      .filter((other) => other.team !== source.team && other.id !== target.id && Math.abs(other.x - target.x) <= 6)
      .sort((a, b) => Math.abs(a.x - target.x) - Math.abs(b.x - target.x))[0];
    if (secondTarget) applyDamage(secondTarget, damage * .58, source);
  }
}

function projectileMountFor(source) {
  const direction = source.team === "player" ? 1 : -1;
  const mounts = {
    blue: { offset: 2.2, height: 43 },
    green: { offset: 1.8, height: 39 },
    yellow: { offset: 2.4, height: 45 }
  };
  const mount = mounts[source.factionKey] || { offset: 2, height: 42 };
  return { x: source.x + direction * mount.offset, height: mount.height };
}

function launchUnitProjectile(source, target, damage, baseTarget = false) {
  const mount = projectileMountFor(source);
  const endX = target ? target.x : source.team === "player" ? 91 : 9;
  const distance = Math.abs(endX - source.x);
  const element = document.createElement("span");
  element.className = `unit-projectile projectile-${source.factionKey}`;
  element.style.setProperty("--projectile-color", FACTIONS[source.factionKey].color);
  ui.battlefield.appendChild(element);
  state.unitProjectiles.push({
    source,
    team: source.team,
    factionKey: source.factionKey,
    targetId: target?.id ?? null,
    baseTarget,
    damage,
    element,
    age: 0,
    duration: .24 + Math.min(.42, distance * .025),
    startX: mount.x,
    endX,
    startLane: source.lane,
    endLane: target?.lane ?? 0,
    startHeight: mount.height,
    endHeight: baseTarget ? 26 : 31,
    arcHeight: source.factionKey === "green" ? 16 : source.factionKey === "blue" ? 6 : source.factionKey === "yellow" ? 2 : 8,
    impacted: false,
    done: false
  });
}

function updateUnitProjectiles(dt) {
  const width = ui.battlefield.clientWidth;
  const height = ui.battlefield.clientHeight;
  state.unitProjectiles.forEach((projectile) => {
    projectile.age += dt;
    if (projectile.impacted) {
      if (projectile.age >= .18) {
        projectile.element.remove();
        projectile.done = true;
      }
      return;
    }

    const target = projectile.targetId === null ? null : state.units.find((unit) => unit.id === projectile.targetId && unit.hp > 0);
    if (target) {
      projectile.endX = target.x;
      projectile.endLane = target.lane;
    }
    const progress = Math.min(1, projectile.age / projectile.duration);
    const x = projectile.startX + (projectile.endX - projectile.startX) * progress;
    const lane = projectile.startLane + (projectile.endLane - projectile.startLane) * progress;
    const heightOffset = projectile.startHeight + (projectile.endHeight - projectile.startHeight) * progress;
    const arc = Math.sin(Math.PI * progress) * projectile.arcHeight;
    const horizontalVelocity = (projectile.endX - projectile.startX) * width / 100;
    const verticalVelocity = (projectile.endLane - projectile.startLane) + (projectile.endHeight - projectile.startHeight) + Math.PI * projectile.arcHeight * Math.cos(Math.PI * progress);
    projectile.element.style.left = `${x}%`;
    projectile.element.style.bottom = `calc(9% + ${lane + heightOffset + arc}px)`;
    projectile.element.style.rotate = `${Math.atan2(-verticalVelocity, horizontalVelocity || height) * 180 / Math.PI}deg`;

    if (progress < 1) return;
    if (projectile.baseTarget) {
      const hpKey = projectile.team === "player" ? "enemyHp" : "playerHp";
      state[hpKey] = Math.max(0, state[hpKey] - projectile.damage);
    } else if (target) {
      applyUnitHit(projectile.source, target, projectile.damage);
    }
    projectile.impacted = true;
    projectile.age = 0;
    projectile.element.classList.add("impact");
  });
  state.unitProjectiles = state.unitProjectiles.filter((projectile) => !projectile.done);
}

function updateUnits(dt) {
  const redRamp = Math.min(.3, state.elapsed / 90 * .3);

  state.units.forEach((unit) => {
    unit.cooldown -= dt;
    unit.commanderCooldown -= dt;
    unit.commanderCastTimer = Math.max(0, unit.commanderCastTimer - dt);
    unit.slowTimer = Math.max(0, unit.slowTimer - dt);
    unit.freezeTimer = Math.max(0, unit.freezeTimer - dt);
    unit.shieldTimer = Math.max(0, unit.shieldTimer - dt);
    unit.hasteTimer = Math.max(0, unit.hasteTimer - dt);
    unit.markTimer = Math.max(0, unit.markTimer - dt);
    unit.poisonTimer = Math.max(0, unit.poisonTimer - dt);
    unit.poisonTick += unit.poisonTimer > 0 ? dt : 0;
    while (unit.poisonTimer > 0 && unit.poisonTick >= .5) {
      unit.hp -= unit.poisonDamage;
      unit.poisonTick -= .5;
    }
    if (unit.shieldTimer === 0) unit.shieldHp = 0;
    if (unit.factionKey === "green") unit.hp = Math.min(unit.maxHp, unit.hp + (1.2 + unit.tier * .7) * dt);
    if (unit.factionKey === "green" && unit.tier === 3) {
      state.units.filter((ally) => ally.team === unit.team && ally.id !== unit.id && Math.abs(ally.x - unit.x) <= 9).forEach((ally) => {
        ally.hp = Math.min(ally.maxHp, ally.hp + 2.4 * dt);
      });
    }
    unit.hitTimer = Math.max(0, unit.hitTimer - dt);
    unit.attacking = false;
    unit.moving = false;

    if (unit.hp <= 0) return;
    if (unit.freezeTimer > 0) return;

    const target = state.units
      .filter((other) => other.team !== unit.team && other.hp > 0)
      .sort((a, b) => Math.abs(a.x - unit.x) - Math.abs(b.x - unit.x))[0];
    const distance = target ? Math.abs(target.x - unit.x) : Infinity;

    if (unit.tier === 3 && unit.commanderCooldown <= 0 && target && distance <= 18) {
      castCommanderSkill(unit);
    }

    if (target && distance <= unit.range) {
      unit.attacking = true;
      if (unit.cooldown <= 0) {
        let attackSpeed = 1;
        let damage = unit.damage;
        if (unit.factionKey === "red") damage *= 1 + redRamp;
        if (unit.factionKey === "red" && unit.tier === 2) attackSpeed += (1 - unit.hp / unit.maxHp) * .65;
        if (unit.hasteTimer > 0) attackSpeed *= 1.65;
        if (unit.factionKey === "yellow" && unit.tier === 2 && unit.movedDistance >= 12) damage *= 1.7;
        if (unit.range >= 7) launchUnitProjectile(unit, target, damage);
        else applyUnitHit(unit, target, damage);
        unit.movedDistance = 0;
        unit.cooldown = 1 / attackSpeed;
      }
    } else {
      const baseDistance = unit.team === "player" ? 91 - unit.x : unit.x - 9;
      if (baseDistance <= unit.range) {
        unit.attacking = true;
        if (unit.cooldown <= 0) {
          let baseDamage = Math.max(2, unit.damage - 4);
          if (unit.factionKey === "red" && unit.tier === 1) baseDamage *= 1.35;
          if (unit.hasteTimer > 0) baseDamage *= 1.2;
          if (unit.range >= 7) launchUnitProjectile(unit, null, baseDamage, true);
          else if (unit.team === "player") state.enemyHp -= baseDamage;
          else state.playerHp -= baseDamage;
          unit.cooldown = unit.hasteTimer > 0 ? .62 : 1;
        }
      } else {
        const direction = unit.team === "player" ? 1 : -1;
        const slowFactor = unit.slowTimer > 0 ? .58 : 1;
        const hasteFactor = unit.hasteTimer > 0 ? 1.55 : 1;
        const movement = direction * unit.speed * slowFactor * hasteFactor * dt;
        unit.x += movement;
        unit.movedDistance += Math.abs(movement);
        unit.moving = true;
      }
    }
  });

  state.units = state.units.filter((unit) => unit.hp > 0);
  state.playerHp = Math.max(0, state.playerHp);
  state.enemyHp = Math.max(0, state.enemyHp);
}

function launchDefenseProjectile(side, target) {
  const isLeft = side === "left";
  const factionKey = factionKeyForSide(side);
  const faction = FACTIONS[factionKey];
  const defenseConfig = faction.defense;
  const element = document.createElement("span");
  element.className = `defense-projectile ${defenseConfig.className}`;
  element.style.setProperty("--projectile-color", defenseConfig.color);
  element.style.setProperty("--trail-length", `${factionKey === "red" ? 30 : 38}px`);
  ui.battlefield.appendChild(element);
  const base = isLeft ? ui.playerBase : ui.enemyBase;
  const defense = base.querySelector(`.${defenseConfig.mount}`);
  defense.classList.remove("firing");
  void defense.offsetWidth;
  defense.classList.add("firing");
  state.defenseProjectiles.push({
    side,
    factionKey,
    targetId: target.id,
    impactX: target.x,
    element,
    defense,
    age: 0,
    duration: defenseConfig.duration,
    startX: isLeft ? 11 : 89,
    startBottom: 35,
    endBottom: 17,
    arcHeight: defenseConfig.arc,
    impacted: false,
    done: false
  });
}

function updateDefenseProjectiles(dt) {
  const width = ui.battlefield.clientWidth;
  const height = ui.battlefield.clientHeight;
  state.defenseProjectiles.forEach((projectile) => {
    projectile.age += dt;
    if (projectile.impacted) {
      if (projectile.age >= .28) {
        projectile.element.remove();
        projectile.done = true;
      }
      return;
    }

    const progress = Math.min(1, projectile.age / projectile.duration);
    const horizontal = projectile.startX + (projectile.impactX - projectile.startX) * progress;
    const baseBottom = projectile.startBottom + (projectile.endBottom - projectile.startBottom) * progress;
    const bottom = baseBottom + Math.sin(Math.PI * progress) * projectile.arcHeight;
    const horizontalVelocity = (projectile.impactX - projectile.startX) * width / 100;
    const bottomVelocity = ((projectile.endBottom - projectile.startBottom) + Math.PI * projectile.arcHeight * Math.cos(Math.PI * progress)) * height / 100;
    projectile.element.style.left = `${horizontal}%`;
    projectile.element.style.bottom = `${bottom}%`;
    projectile.element.style.rotate = `${Math.atan2(-bottomVelocity, horizontalVelocity) * 180 / Math.PI}deg`;

    if (progress < 1) return;
    const target = state.units.find((unit) => unit.id === projectile.targetId && unit.hp > 0);
    const faction = FACTIONS[projectile.factionKey];
    const enemyTeam = enemyTeamForSide(projectile.side);
    if (projectile.factionKey === "red") {
      const victims = state.units.filter((unit) => unit.team === enemyTeam && unit.hp > 0 && Math.abs(unit.x - projectile.impactX) <= 4);
      victims.forEach((unit) => applyDamage(unit, unit.id === projectile.targetId ? 46 : 18));
    } else if (projectile.factionKey === "blue" && target) {
      applyDamage(target, 32);
      target.slowTimer = Math.max(target.slowTimer, 1.8);
    } else if (projectile.factionKey === "green" && target) {
      applyDamage(target, 34);
      target.poisonTimer = Math.max(target.poisonTimer, 3);
      target.poisonDamage = Math.max(target.poisonDamage, 4);
    } else if (projectile.factionKey === "yellow" && target) {
      applyDamage(target, 38);
      const chained = state.units.filter((unit) => unit.team === enemyTeam && unit.id !== target.id && Math.abs(unit.x - target.x) <= 8)[0];
      if (chained) applyDamage(chained, 20);
    }
    if (target) log(`${faction.name}${faction.defense.name}命中前线，造成 ${faction.defense.damage} 伤害。`);
    projectile.defense.classList.remove("firing");
    projectile.impacted = true;
    projectile.age = 0;
    projectile.element.classList.add("impact");
  });
  state.defenseProjectiles = state.defenseProjectiles.filter((projectile) => !projectile.done);
}

function updateBaseDefense(dt) {
  state.playerDefenseCooldown -= dt;
  state.enemyDefenseCooldown -= dt;
  const leftDefense = factionForSide("left").defense;
  const rightDefense = factionForSide("right").defense;
  const playerTarget = state.units.filter((unit) => unit.team === "enemy" && unit.x <= 38).sort((a, b) => a.x - b.x)[0];
  if (playerTarget && state.playerDefenseCooldown <= 0) {
    launchDefenseProjectile("left", playerTarget);
    state.playerDefenseCooldown = leftDefense.cooldown;
  }
  const enemyTarget = state.units.filter((unit) => unit.team === "player" && unit.x >= 62).sort((a, b) => b.x - a.x)[0];
  if (enemyTarget && state.enemyDefenseCooldown <= 0) {
    launchDefenseProjectile("right", enemyTarget);
    state.enemyDefenseCooldown = rightDefense.cooldown;
  }
}

function renderUnits() {
  const existing = new Map([...ui.unitLayer.children].map((element) => [Number(element.dataset.id), element]));
  state.units.forEach((unit) => {
    let element = existing.get(unit.id);
    if (!element) {
      element = document.createElement("div");
      element.dataset.id = unit.id;
      element.innerHTML = `<div class="unit-health"><span></span></div><div class="rig"><div class="unit-figure">${unitFigureMarkup(unit.factionKey, unit.tier)}</div></div>`;
      ui.unitLayer.appendChild(element);
    }
    const combatStyle = unit.range >= 7 ? "ranged" : "melee";
    element.className = `fighter ${unit.team === "enemy" ? "enemy" : "friendly"} tier-${unit.tier + 1} unit-${unit.factionKey} unit-${unit.tier + 1} ${unit.moving ? "walking" : ""} ${unit.attacking ? "attacking" : ""} ${unit.hitTimer > 0 ? "hit" : ""} ${unit.freezeTimer > 0 ? "frozen" : ""} ${unit.shieldTimer > 0 && unit.shieldHp > 0 ? "shielded" : ""} ${unit.commanderCastTimer > 0 ? "commander-casting" : ""} ${combatStyle}`;
    element.style.left = `${unit.x}%`;
    element.style.bottom = `calc(9% + ${unit.lane}px)`;
    element.style.zIndex = String(5 + unit.lane);
    element.style.setProperty("--unit-color", FACTIONS[unit.factionKey].color);
    element.style.setProperty("--commander-cast-duration", `${.85 / state.speed}s`);
    element.querySelector(".unit-figure").className = `unit-figure unit-${unit.factionKey} unit-${unit.tier + 1} ${unit.tier === 3 ? "has-commander-art" : ""}`;
    element.querySelector(".unit-health span").style.width = `${Math.max(0, unit.hp / unit.maxHp * 100)}%`;
    existing.delete(unit.id);
  });
  existing.forEach((element) => element.remove());
}

function updateMachineHud(side) {
  const machine = ui.machines[side];
  const pools = side === "left" ? state.leftPools : state.rightPools;
  const routeCounts = side === "left" ? state.leftRouteCounts : state.rightRouteCounts;
  const boost = side === "left" ? state.leftBoost : state.rightBoost;
  machine.routeTotals.troop.textContent = `${routeCounts.troop} 次`;
  machine.routeTotals.split.textContent = `${routeCounts.split} 次`;
  machine.routeTotals.boost.textContent = `${boost} / ${ULTIMATE_COST}`;
  machine.poolValues.forEach((element, tier) => {
    element.textContent = `${pools[tier]} / ${UNIT_COSTS[tier]}`;
  });
  const routedShots = state.pendingShots.filter((shot) => shot.side === side && (shot.level === "transfer" || shot.level === "lower")).length;
  machine.lowerQueue.textContent = routedShots ? `${routedShots} 珠流转中` : "等待兵种珠";
  machine.ultimateBar.style.width = `${boost / ULTIMATE_COST * 100}%`;
}

function updateHud() {
  const leftAlive = state.units.filter((unit) => unit.team === "player").length;
  const rightAlive = state.units.filter((unit) => unit.team === "enemy").length;
  ui.leftAlive.textContent = leftAlive;
  ui.rightAlive.textContent = rightAlive;
  ui.leftSpawnCount.textContent = state.leftSpawnCount;
  ui.rightSpawnCount.textContent = state.rightSpawnCount;
  ui.playerHealth.textContent = Math.ceil(state.playerHp);
  ui.enemyHealth.textContent = Math.ceil(state.enemyHp);
  ui.playerHealthBar.style.width = `${state.playerHp / MAX_BASE_HP * 100}%`;
  ui.enemyHealthBar.style.width = `${state.enemyHp / MAX_BASE_HP * 100}%`;
  ui.playerFortressStatus.textContent = state.playerFortressUltimateUsed ? "危急技已释放" : "危急技 533";
  ui.enemyFortressStatus.textContent = state.enemyFortressUltimateUsed ? "危急技已释放" : "危急技 533";
  ui.playerFortressStatus.classList.toggle("used", state.playerFortressUltimateUsed);
  ui.enemyFortressStatus.classList.toggle("used", state.enemyFortressUltimateUsed);
  ui.playerFortressThreshold.classList.toggle("used", state.playerFortressUltimateUsed);
  ui.enemyFortressThreshold.classList.toggle("used", state.enemyFortressUltimateUsed);
  const seconds = Math.floor(state.elapsed);
  ui.battleTime.textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function log(message) { ui.battleLog.textContent = message; }

function ensureBgm() {
  if (state.audioMuted || !ui.audio.paused) return;
  ui.audio.volume = .28;
  ui.audio.play().catch(() => {});
}

function updateAudioButton() {
  ui.audio.muted = state.audioMuted;
  ui.audioButton.classList.toggle("muted", state.audioMuted);
  ui.audioButton.textContent = state.audioMuted ? "x" : "♪";
  ui.audioButton.title = state.audioMuted ? "开启音乐" : "关闭音乐";
  ui.audioButton.setAttribute("aria-label", ui.audioButton.title);
}

function showCallout(message) {
  ui.callout.textContent = message;
  ui.callout.classList.remove("hide");
  setTimeout(() => ui.callout.classList.add("hide"), 2300);
}

function checkResult() {
  if (state.ended || (state.playerHp > 0 && state.enemyHp > 0)) return;
  state.ended = true;
  state.running = false;
  document.body.classList.add("game-paused");
  const winnerSide = state.enemyHp <= 0 ? "left" : "right";
  const loserSide = winnerSide === "left" ? "right" : "left";
  const winner = factionForSide(winnerSide);
  const loser = factionForSide(loserSide);
  ui.resultTitle.textContent = `${winner.name}获胜`;
  ui.resultTitle.style.color = winner.color;
  ui.resultCopy.textContent = `${loser.base}已被${winner.name}攻破。`;
  ui.resultModal.hidden = false;
}

function gameLoop(now) {
  const rawDt = Math.min(.05, (now - state.lastFrame) / 1000);
  state.lastFrame = now;
  if (state.running && !state.ended) {
    const dt = rawDt * state.speed;
    state.elapsed += dt;
    state.leftMarbleAccumulator += dt;
    state.rightMarbleAccumulator += dt;
    if (state.leftMarbleAccumulator >= 1) {
      state.leftMarbleAccumulator -= 1;
      createUpperShot("left");
    }
    if (state.rightMarbleAccumulator >= 1) {
      state.rightMarbleAccumulator -= 1;
      createUpperShot("right");
    }
    updatePhysicsWorlds(dt);
    updateShots(dt);
    updateUltimateEffects(dt);
    updateDefenseProjectiles(dt);
    updateUnitProjectiles(dt);
    updateCommanderEffects(dt);
    updateUnits(dt);
    updateBaseDefense(dt);
    checkFortressUltimates();
    renderUnits();
    updateHud();
    checkResult();
  }
  requestAnimationFrame(gameLoop);
}

function resetGame(startRunning = true) {
  state.pendingShots.forEach((shot) => {
    shot.element.remove();
    if (shot.world) Composite.remove(shot.world.engine.world, shot.body);
  });
  Object.assign(state, {
    playerHp: MAX_BASE_HP,
    enemyHp: MAX_BASE_HP,
    elapsed: 0,
    units: [],
    pendingShots: [],
    leftPools: [0, 0, 0, 0],
    rightPools: [0, 0, 0, 0],
    leftBoost: 0,
    rightBoost: 0,
    leftRouteCounts: { troop: 0, split: 0, boost: 0 },
    rightRouteCounts: { troop: 0, split: 0, boost: 0 },
    leftSpawnCount: 0,
    rightSpawnCount: 0,
    running: startRunning,
    ended: false,
    lastFrame: performance.now(),
    leftMarbleAccumulator: 0,
    rightMarbleAccumulator: 0,
    playerDefenseCooldown: 0,
    enemyDefenseCooldown: 0,
    playerFortressUltimateUsed: false,
    enemyFortressUltimateUsed: false,
    defenseProjectiles: [],
    unitProjectiles: [],
    commanderEffects: [],
    unitId: 0,
    ultimateEffects: []
  });
  ui.unitLayer.innerHTML = "";
  document.querySelectorAll(".ultimate-effect").forEach((effect) => effect.remove());
  document.querySelectorAll(".defense-projectile").forEach((projectile) => projectile.remove());
  document.querySelectorAll(".unit-projectile").forEach((projectile) => projectile.remove());
  document.querySelectorAll(".commander-effect").forEach((effect) => effect.remove());
  document.querySelectorAll(".stage-marble, .transfer-ball, .return-ball").forEach((marble) => marble.remove());
  initPhysicsStages();
  ui.resultModal.hidden = true;
  ui.pause.textContent = "Ⅱ";
  ui.pause.title = "暂停";
  document.body.classList.toggle("game-paused", !startRunning);
  ui.liveStateText.textContent = startRunning ? `${factionForSide("left").name} VS ${factionForSide("right").name}` : "等待阵营抽签";
  log(startRunning ? `${factionForSide("left").name}与${factionForSide("right").name}正在自动部署部队。` : "点击开始抽签后，对战才会启动。");
  if (startRunning) showCallout("双层机器启动，主炮开始自动扫角");
  updateMachineHud("left");
  updateMachineHud("right");
  updateHud();
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function setDrawResult(side, key) {
  const faction = FACTIONS[key];
  const name = side === "left" ? ui.drawLeftName : ui.drawRightName;
  const sigil = side === "left" ? ui.drawLeftSigil : ui.drawRightSigil;
  name.textContent = faction.name;
  sigil.textContent = faction.sigil;
  const result = sigil.closest(".draw-result");
  result.style.setProperty("--draw-color", faction.color);
  result.classList.add("revealed");
}

function beginMatch(leftKey, rightKey) {
  state.leftFaction = leftKey;
  state.rightFaction = rightKey;
  state.started = true;
  configureMatchUI(leftKey, rightKey);
  resetGame(true);
  document.body.classList.remove("draw-open");
  ui.drawScreen.classList.add("leaving");
  setTimeout(() => { ui.drawScreen.hidden = true; }, 520);
  ensureBgm();
}

async function runFactionDraw() {
  if (state.drawing) return;
  state.drawing = true;
  ui.drawStart.disabled = true;
  ui.drawArena.classList.add("drawing");
  ui.drawStatus.textContent = "四方签印轮转中";
  ui.drawTokens.forEach((token) => token.classList.remove("selected", "not-selected", "active"));
  document.querySelectorAll(".draw-result").forEach((result) => result.classList.remove("revealed"));
  ui.drawLeftName.textContent = "待抽取";
  ui.drawRightName.textContent = "待抽取";
  ui.drawLeftSigil.textContent = "?";
  ui.drawRightSigil.textContent = "?";

  const keys = Object.keys(FACTIONS);
  for (let turn = 0; turn < 16; turn += 1) {
    ui.drawTokens.forEach((token) => token.classList.remove("active"));
    ui.drawTokens[turn % ui.drawTokens.length].classList.add("active");
    await wait(65 + turn * 5);
  }
  const shuffled = [...keys].sort(() => Math.random() - .5);
  const [leftKey, rightKey] = shuffled.slice(0, 2);
  ui.drawTokens.forEach((token) => token.classList.remove("active"));
  ui.drawStatus.textContent = "左侧签印揭晓";
  ui.drawTokens.find((token) => token.dataset.drawFaction === leftKey).classList.add("selected");
  setDrawResult("left", leftKey);
  await wait(700);
  ui.drawStatus.textContent = "右侧签印揭晓";
  ui.drawTokens.find((token) => token.dataset.drawFaction === rightKey).classList.add("selected");
  setDrawResult("right", rightKey);
  ui.drawTokens.filter((token) => ![leftKey, rightKey].includes(token.dataset.drawFaction)).forEach((token) => token.classList.add("not-selected"));
  await wait(900);
  ui.drawStatus.textContent = `${FACTIONS[leftKey].name} 对阵 ${FACTIONS[rightKey].name}`;
  await wait(650);
  ui.drawArena.classList.remove("drawing");
  state.drawing = false;
  beginMatch(leftKey, rightKey);
}

function returnToDraw() {
  state.started = false;
  state.drawing = false;
  resetGame(false);
  ui.resultModal.hidden = true;
  ui.drawScreen.hidden = false;
  ui.drawScreen.classList.remove("leaving");
  document.body.classList.add("draw-open");
  ui.drawStart.disabled = false;
  ui.drawStatus.textContent = "签池待命";
  ui.drawTokens.forEach((token) => token.classList.remove("selected", "not-selected", "active"));
  document.querySelectorAll(".draw-result").forEach((result) => result.classList.remove("revealed"));
  ui.drawLeftName.textContent = "待抽取";
  ui.drawRightName.textContent = "待抽取";
  ui.drawLeftSigil.textContent = "?";
  ui.drawRightSigil.textContent = "?";
}

ui.pause.addEventListener("click", () => {
  ensureBgm();
  if (!state.started || state.ended) return;
  state.running = !state.running;
  ui.pause.textContent = state.running ? "Ⅱ" : "▶";
  ui.pause.title = state.running ? "暂停" : "继续";
  document.body.classList.toggle("game-paused", !state.running);
  log(state.running ? "自动对战继续。" : "自动对战已暂停。");
});

ui.speed.addEventListener("click", () => {
  ensureBgm();
  state.speed = state.speed === 1 ? 2 : state.speed === 2 ? 4 : 1;
  ui.speed.textContent = `×${state.speed}`;
});

const devToolsToggle = document.querySelector("#dev-tools-toggle");
const devPanel = document.querySelector("#dev-panel");
devToolsToggle.addEventListener("click", () => {
  const expanded = devToolsToggle.getAttribute("aria-expanded") === "true";
  devToolsToggle.setAttribute("aria-expanded", String(!expanded));
  devPanel.hidden = expanded;
});
devPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-dev-tier]");
  if (!button || !state.started || state.ended) return;
  const side = button.dataset.devSide;
  const tier = Number(button.dataset.devTier);
  const team = side === "left" ? "player" : "enemy";
  const factionKey = side === "left" ? state.leftFaction : state.rightFaction;
  const unit = spawnUnit(team, factionKey, tier);
  unit.x = side === "left" ? 42 : 58;
  if (tier === 3) unit.commanderCooldown = .2;
  log(`测试部署：${FACTIONS[factionKey].units[tier].name}。`);
  renderUnits();
  updateHud();
});

ui.audioButton.addEventListener("click", () => {
  state.audioMuted = !state.audioMuted;
  updateAudioButton();
  if (!state.audioMuted) ensureBgm();
});

document.querySelector("#restart-button").addEventListener("click", () => {
  ensureBgm();
  returnToDraw();
});
document.querySelector("#result-restart").addEventListener("click", () => {
  ensureBgm();
  returnToDraw();
});
ui.drawStart.addEventListener("click", () => {
  ensureBgm();
  runFactionDraw();
});

document.addEventListener("pointerdown", ensureBgm, { once: true });
document.addEventListener("keydown", ensureBgm, { once: true });

configureMatchUI(state.leftFaction, state.rightFaction);
ui.audio.volume = .28;
updateAudioButton();
resetGame(false);
requestAnimationFrame(gameLoop);
