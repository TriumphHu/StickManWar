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
const MARBLE_OVERDRIVE_TIME = 5 * 60;
const TOURNAMENT_STORAGE_KEY = "stickman-war-tournament-v2";
const { Engine, Bodies, Body, Composite } = Matter;
let physicsStages = {};

function emptyFactionTournamentStats(key) {
  return {
    wins: 0,
    losses: 0,
    titles: 0,
    left: { played: 0, wins: 0 },
    right: { played: 0, wins: 0 },
    opponents: Object.fromEntries(Object.keys(FACTIONS).filter((opponent) => opponent !== key).map((opponent) => [opponent, {
      wins: 0,
      losses: 0,
      leftPlayed: 0,
      leftWins: 0,
      rightPlayed: 0,
      rightWins: 0
    }]))
  };
}

function emptyTournamentStats() {
  return {
    editions: 0,
    factions: Object.fromEntries(Object.keys(FACTIONS).map((key) => [key, emptyFactionTournamentStats(key)])),
    history: []
  };
}

function loadTournamentStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(TOURNAMENT_STORAGE_KEY));
    const fallback = emptyTournamentStats();
    if (!saved || typeof saved !== "object") return fallback;
    Object.keys(FACTIONS).forEach((key) => {
      const target = fallback.factions[key];
      const source = saved.factions?.[key] || {};
      target.wins = Number(source.wins) || 0;
      target.losses = Number(source.losses) || 0;
      target.titles = Number(source.titles) || 0;
      ["left", "right"].forEach((side) => {
        target[side].played = Number(source[side]?.played) || 0;
        target[side].wins = Number(source[side]?.wins) || 0;
      });
      Object.keys(target.opponents).forEach((opponent) => {
        Object.keys(target.opponents[opponent]).forEach((field) => {
          target.opponents[opponent][field] = Number(source.opponents?.[opponent]?.[field]) || 0;
        });
      });
    });
    fallback.editions = Number(saved.editions) || 0;
    fallback.history = Array.isArray(saved.history) ? saved.history.slice(0, 12) : [];
    return fallback;
  } catch {
    return emptyTournamentStats();
  }
}

const tournamentStats = loadTournamentStats();
const tournament = {
  active: false,
  edition: tournamentStats.editions + 1,
  stageIndex: 0,
  bracket: null,
  advanceTimer: null
};

function upperMarbleRate(elapsed) {
  return elapsed >= MARBLE_OVERDRIVE_TIME ? 2 : 1;
}

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
  marbleOverdriveTriggered: false,
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
  leftMarbleRate: document.querySelector("#left-marble-rate"),
  rightMarbleRate: document.querySelector("#right-marble-rate"),
  tournamentToggle: document.querySelector("#tournament-toggle"),
  tournamentPreview: document.querySelector("#tournament-preview"),
  tournamentPreviewStats: document.querySelector("#tournament-preview-stats"),
  tournamentResetStats: document.querySelector("#tournament-reset-stats"),
  tournamentPanel: document.querySelector("#tournament-panel"),
  tournamentEdition: document.querySelector("#tournament-edition"),
  tournamentCurrentStatus: document.querySelector("#tournament-current-status"),
  tournamentBracket: document.querySelector("#tournament-bracket"),
  tournamentStandings: document.querySelector("#tournament-standings"),
  tournamentMatchups: document.querySelector("#tournament-matchups"),
  tournamentMatchHistory: document.querySelector("#tournament-match-history"),
  tournamentHistory: document.querySelector("#tournament-history"),
  matchSeriesLabel: document.querySelector("#match-series-label"),
  roundStatusLabel: document.querySelector("#round-status-label"),
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
  resultEyebrow: document.querySelector("#result-eyebrow"),
  resultTitle: document.querySelector("#result-title"),
  resultCopy: document.querySelector("#result-copy")
};

function unitFigureMarkup(factionKey = "", tier = -1) {
  const crests = {
    red: ["M36 35Q20 24 8 35Q22 42 37 42Z", "M35 35L22 16L42 28L55 17L50 43Z", "M35 36L17 22L25 8L39 24L50 5L56 37Z", "M33 38L13 18L28 20L37 3L47 22L61 10L56 41Z"],
    blue: ["M30 39Q34 18 53 19Q62 26 61 43Z", "M29 39Q28 14 48 12Q66 17 64 43L52 34L43 45Z", "M32 40L18 12L39 26L50 7L59 28L72 13L62 43Z", "M30 41L10 8L39 25L50 1L61 25L85 7L66 43Z"],
    green: ["M34 39Q17 32 15 17Q31 18 41 34Q43 16 59 13Q58 32 49 42Z", "M31 40Q14 25 18 10Q35 17 42 32Q50 11 66 13Q62 31 50 43Z", "M30 41Q11 31 11 13Q31 14 41 31Q47 5 66 8Q66 29 52 43Z", "M29 42Q4 34 8 10Q31 15 40 29Q47 0 70 6Q69 30 52 44Z"],
    yellow: ["M31 38L24 20L37 27L46 12L53 28L66 19L61 41Z", "M29 39L18 15L37 26L47 7L57 27L72 14L64 42Z", "M28 40L14 12L36 25L47 3L59 25L77 10L66 43Z", "M27 41L10 8L35 24L47 0L61 24L82 7L68 44Z"]
  };
  const weapons = {
    red: [
      `<path class="side-weapon-grip" d="M83 88L105 127"></path><path class="side-weapon-metal" d="M82 88Q91 62 83 46Q108 65 103 93L93 102Z"></path>`,
      `<path class="side-weapon-grip" d="M84 91L111 139"></path><path class="side-weapon-metal" d="M79 82L114 21L111 51L89 94Z"></path>`,
      `<path class="side-weapon-grip" d="M84 90L109 143"></path><path class="side-weapon-metal" d="M88 72Q104 50 119 59L110 89L91 94ZM88 72Q78 55 68 65L78 91L91 94Z"></path>`,
      `<path class="side-weapon-grip" d="M83 91L109 148"></path><path class="side-weapon-metal" d="M84 87Q101 37 91 10Q121 42 112 88L98 105Z"></path><path class="side-weapon-core" d="M94 80Q103 54 100 35"></path>`
    ],
    blue: [
      `<path class="side-weapon-grip" d="M82 88L105 126"></path><path class="side-weapon-metal" d="M82 88L105 65L111 75L91 99Z"></path><path class="side-shield" d="M21 77Q37 66 47 80L43 119Q25 119 17 101Z"></path>`,
      `<path class="side-weapon-metal no-fill" d="M78 84Q109 49 111 101Q106 123 83 96M79 84L110 102M96 62L96 112"></path><path class="side-weapon-core" d="M79 84L116 87"></path>`,
      `<path class="side-weapon-grip" d="M84 89L106 139"></path><path class="side-weapon-metal" d="M94 59L115 51L123 70L110 91L91 83Z"></path><path class="side-shield tower" d="M17 61Q38 51 49 69L44 128Q25 131 14 111Z"></path>`,
      `<path class="side-weapon-grip" d="M85 88L108 147"></path><path class="side-weapon-metal" d="M91 45L114 35L127 52L117 75L93 72L82 58Z"></path><path class="side-weapon-core" d="M97 48L114 61M115 44L96 67"></path>`
    ],
    green: [
      `<path class="side-weapon-grip" d="M82 89L105 126"></path><path class="side-weapon-metal leaf" d="M80 86Q83 58 107 52Q108 76 91 94Z"></path>`,
      `<path class="side-weapon-metal launcher" d="M77 78Q99 62 117 78L110 98Q92 101 78 91Z"></path><path class="side-weapon-core" d="M105 79L122 85"></path>`,
      `<path class="side-weapon-grip" d="M84 89L106 142"></path><path class="side-weapon-metal" d="M91 55Q111 44 121 61Q115 82 94 82Q79 69 91 55Z"></path><path class="side-shield thorn" d="M15 68L25 58L34 65L46 58L51 75L45 118L29 128L15 112Z"></path>`,
      `<path class="side-weapon-grip" d="M84 89L104 148"></path><path class="side-weapon-metal" d="M88 46Q107 25 124 45L116 75Q97 85 82 66Z"></path><path class="side-weapon-core" d="M95 49L111 42M104 46L108 67"></path>`
    ],
    yellow: [
      `<path class="side-weapon-grip" d="M82 88L105 127"></path><path class="side-weapon-metal" d="M81 86L103 61L116 73L92 101Z"></path><path class="side-weapon-core" d="M98 70L107 80"></path>`,
      `<path class="side-weapon-metal no-fill" d="M78 78L113 71L116 101L80 96ZM96 74V99M77 87H121"></path><path class="side-weapon-core" d="M77 87L124 87"></path>`,
      `<path class="side-weapon-grip" d="M83 90L110 145"></path><path class="side-weapon-metal" d="M84 82L109 30L118 39L94 94Z"></path><path class="side-weapon-core" d="M105 44L116 53"></path>`,
      `<path class="side-weapon-grip" d="M84 89L107 149"></path><path class="side-weapon-metal" d="M102 20L117 42L103 61L89 41ZM87 70L103 61L119 72L104 84Z"></path><path class="side-weapon-core" d="M103 24V58M94 42H112"></path>`
    ]
  };
  const safeFaction = crests[factionKey] ? factionKey : "red";
  const safeTier = Math.max(0, Math.min(3, tier));
  return `
    <svg class="side-unit-art" viewBox="0 0 130 160" aria-hidden="true">
      <ellipse class="side-aura" cx="54" cy="150" rx="43" ry="7"></ellipse>
      <g class="side-character-root">
        <path class="side-cape" d="M39 59Q17 85 22 132L51 116L67 67Z"></path>
        <g class="side-limb side-back-leg"><path class="side-thigh" d="M48 94L34 121"></path><circle class="side-joint" cx="34" cy="121" r="6"></circle><g class="side-back-shin"><path class="side-shin" d="M34 121L25 146"></path><path class="side-foot" d="M19 141Q32 140 38 147L36 153H17Z"></path></g></g>
        <g class="side-limb side-back-arm"><path class="side-arm-line" d="M42 63L27 84L20 105"></path><circle class="side-joint" cx="27" cy="84" r="5"></circle><path class="side-gauntlet" d="M14 100L25 98L28 110L17 114Z"></path></g>
        <g class="side-torso"><path class="side-waist" d="M39 91H68L65 102H42Z"></path><path class="side-armor" d="M37 54L53 43L72 57L67 96L40 96Z"></path><path class="side-armor-rib" d="M52 51L53 91M41 73H68"></path><path class="side-pauldron" d="M39 57L24 67L30 82L45 70ZM70 58L84 68L79 82L65 71Z"></path><circle class="side-core" cx="54" cy="72" r="5"></circle></g>
        <g class="side-limb side-front-leg"><path class="side-thigh" d="M62 96L75 121"></path><circle class="side-joint" cx="75" cy="121" r="7"></circle><g class="side-front-shin"><path class="side-shin" d="M75 121L84 145"></path><path class="side-foot" d="M79 141Q92 140 101 147L98 153H79Z"></path></g></g>
        <g class="side-profile-head"><path class="side-head" d="M37 35Q38 15 54 13Q70 14 74 31L82 37L74 43Q72 54 58 57Q43 56 38 46Z"></path><path class="side-helmet" d="M36 37Q37 12 55 10Q75 13 75 33L67 29L61 42L52 34L43 43Z"></path><path class="side-crest" d="${crests[safeFaction][safeTier]}"></path><path class="side-face" d="M65 36L73 35M65 46L74 42"></path></g>
        <g class="side-limb side-front-arm"><path class="side-arm-line" d="M70 62L82 78L87 91"></path><circle class="side-joint" cx="82" cy="78" r="6"></circle><path class="side-gauntlet" d="M80 87L91 84L97 96L86 101Z"></path><g class="side-weapon">${weapons[safeFaction][safeTier]}</g></g>
      </g>
      <path class="side-impact" d="M111 70L116 80L128 76L121 88L130 97L117 98L114 111L106 101L94 108L99 95L89 87L103 85Z"></path>
    </svg>
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
  document.querySelector("#dev-left-faction").value = leftKey;
  document.querySelector("#dev-right-faction").value = rightKey;
  document.querySelectorAll("[data-dev-tier]").forEach((button) => {
    const factionKey = button.dataset.devSide === "left" ? leftKey : rightKey;
    const tier = Number(button.dataset.devTier);
    button.title = `测试召唤 ${FACTIONS[factionKey].units[tier].name}`;
    button.setAttribute("aria-label", button.title);
  });
  document.querySelectorAll('[data-dev-action="commander"][data-dev-side]').forEach((button) => {
    const factionKey = button.dataset.devSide === "left" ? leftKey : rightKey;
    button.textContent = `统领 · ${FACTIONS[factionKey].commanderSkill.name}`;
    button.title = `手动释放 ${FACTIONS[factionKey].commanderSkill.name}`;
  });
  document.querySelectorAll('[data-dev-action="ultimate"][data-dev-side]').forEach((button) => {
    const factionKey = button.dataset.devSide === "left" ? leftKey : rightKey;
    button.textContent = `强化 · ${FACTIONS[factionKey].ultimate}`;
    button.title = `手动释放 ${FACTIONS[factionKey].ultimate}`;
  });
  document.querySelectorAll('[data-dev-action="fortress"][data-dev-side]').forEach((button) => {
    const factionKey = button.dataset.devSide === "left" ? leftKey : rightKey;
    button.textContent = `要塞 · ${FACTIONS[factionKey].fortressUltimate}`;
    button.title = `手动释放 ${FACTIONS[factionKey].fortressUltimate}`;
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
            <article class="codex-card tier-${tier + 1}" style="--faction-color:${faction.color};--card-scale:${[.68, .84, 1.02, 1.16][tier]}">
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
  effectElement.className = `ultimate-effect ${effectClass} side-${side} ${isFortressUltimate ? `fortress-ultimate fortress-${factionKey}` : ""}`;
  effectElement.style.setProperty("--fortress-color", faction.color);
  if (isFortressUltimate) effectElement.dataset.fortressName = faction.fortressUltimate;
  const visualSpeed = state.speed;
  const visualTimes = {
    "--shake-duration": .18, "--shake-delay": .2, "--meteor-duration": .48,
    "--impact-duration": .55, "--impact-offset": .42, "--burn-duration": 3.4,
    "--burn-delay": 1.35, "--frost-duration": 2.8, "--sweep-duration": 1.2,
    "--crack-duration": 2.5, "--crack-delay": .35, "--ground-delay": .3,
    "--fortress-duration": isFortressUltimate ? 5.8 : 2.8
  };
  Object.entries(visualTimes).forEach(([name, seconds]) => effectElement.style.setProperty(name, `${seconds / visualSpeed}s`));
  const leftCenters = isFortressUltimate ? [32, 40, 48, 58, 68, 78, 88, 94] : [48, 62, 76, 88];
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
      duration: isFortressUltimate ? 7.8 : 4.8,
      strikeCenters,
      strikeTimes: strikeCenters.map((_, index) => .25 + index * (isFortressUltimate ? .28 : .37)),
      burnStart: isFortressUltimate ? 1.65 : 1.35,
      burnEnd: isFortressUltimate ? 7.35 : 4.35,
      burnDamage: isFortressUltimate ? 26 : 12,
      baseDamage: isFortressUltimate ? 320 : 120,
      empowered: isFortressUltimate,
      element: effectElement
    });
  } else if (factionKey === "blue") {
    const unitDamageRatio = isFortressUltimate ? .32 : .14;
    const minimumUnitDamage = isFortressUltimate ? 95 : 38;
    const freezeDuration = isFortressUltimate ? 5.5 : 2.6;
    const shieldDuration = isFortressUltimate ? 9 : 4.5;
    state.units.filter((unit) => unit.team === enemyTeam).forEach((unit) => {
      applyDamage(unit, Math.max(minimumUnitDamage, unit.maxHp * unitDamageRatio));
      unit.freezeTimer = Math.max(unit.freezeTimer, freezeDuration);
    });
    state.units.filter((unit) => unit.team === ownTeam).forEach((unit) => {
      unit.shieldTimer = Math.max(unit.shieldTimer, shieldDuration);
      unit.shieldHp = Math.max(unit.shieldHp, isFortressUltimate ? 230 + unit.tier * 60 : 60 + unit.tier * 25);
    });
    state[enemyHpKey(side)] = Math.max(0, state[enemyHpKey(side)] - (isFortressUltimate ? 230 : 70));
    state.ultimateEffects.push({ type: "blue", side, age: 0, duration: isFortressUltimate ? 5.5 : 2.8, element: effectElement });
  } else if (factionKey === "green") {
    const rootDuration = isFortressUltimate ? 5.8 : 2.5;
    state.units.filter((unit) => unit.team === enemyTeam).forEach((unit) => {
      unit.freezeTimer = Math.max(unit.freezeTimer, rootDuration);
      applyDamage(unit, isFortressUltimate ? Math.max(85, unit.maxHp * .24) : Math.max(24, unit.maxHp * .08));
    });
    state.units.filter((unit) => unit.team === ownTeam).forEach((unit) => {
      unit.shieldTimer = Math.max(unit.shieldTimer, isFortressUltimate ? 10 : 5);
      unit.shieldHp = Math.max(unit.shieldHp, isFortressUltimate ? 270 + unit.tier * 65 : 80 + unit.tier * 24);
    });
    state.ultimateEffects.push({ type: "green", side, ownTeam, age: 0, healTick: 0, duration: isFortressUltimate ? 9 : 4.5, heal: isFortressUltimate ? 38 : 16, baseHeal: isFortressUltimate ? 36 : 12, element: effectElement });
  } else {
    const enemies = state.units.filter((unit) => unit.team === enemyTeam).sort((a, b) => side === "left" ? a.x - b.x : b.x - a.x);
    const hops = isFortressUltimate ? 9 : 4;
    enemies.slice(0, hops).forEach((unit, index) => applyDamage(unit, (isFortressUltimate ? 118 : 58) * Math.pow(.82, index)));
    state.units.filter((unit) => unit.team === ownTeam).forEach((unit) => { unit.hasteTimer = Math.max(unit.hasteTimer, isFortressUltimate ? 9 : 4); });
    state[enemyHpKey(side)] = Math.max(0, state[enemyHpKey(side)] - (isFortressUltimate ? 270 : 85));
    const extraMarbles = isFortressUltimate ? 10 : 4;
    for (let index = 0; index < extraMarbles; index += 1) setTimeout(() => {
      if (state.started && !state.ended) createTransferShot(side);
    }, index * 150 / state.speed);
    state.ultimateEffects.push({ type: "yellow", side, age: 0, duration: isFortressUltimate ? 5.8 : 2.8, element: effectElement });
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
          ? (isFinalStrike ? Math.max(165, unit.maxHp * .42) : Math.max(92, unit.maxHp * .25))
          : (isFinalStrike ? Math.max(75, unit.maxHp * .2) : Math.max(48, unit.maxHp * .12));
        applyDamage(unit, damage);
        const push = isFinalStrike ? (effect.empowered ? 14 : 7) : (effect.empowered ? 8 : 4);
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
  const marbleRate = upperMarbleRate(state.elapsed);
  ui.leftMarbleRate.textContent = `${marbleRate} 珠 / 秒`;
  ui.rightMarbleRate.textContent = `${marbleRate} 珠 / 秒`;
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

const TOURNAMENT_STAGE_LABELS = ["半决赛 A", "半决赛 B", "总决赛"];

function persistTournamentStats() {
  try {
    localStorage.setItem(TOURNAMENT_STORAGE_KEY, JSON.stringify(tournamentStats));
  } catch {}
}

function shuffledFactionKeys() {
  const keys = Object.keys(FACTIONS);
  for (let index = keys.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [keys[index], keys[target]] = [keys[target], keys[index]];
  }
  return keys;
}

function tournamentPair(stageIndex = tournament.stageIndex) {
  if (!tournament.bracket) return [];
  return stageIndex < 2 ? tournament.bracket.semifinals[stageIndex] : tournament.bracket.finalists;
}

function tournamentResult(stageIndex) {
  return tournament.bracket?.results.find((result) => result.stageIndex === stageIndex);
}

function factionMatchup(pair) {
  if (!pair || pair.length < 2) return "待定 VS 待定";
  return `${FACTIONS[pair[0]].name} VS ${FACTIONS[pair[1]].name}`;
}

function recentTournamentMatches() {
  const matches = [];
  if (tournament.bracket && !tournament.bracket.champion) {
    tournament.bracket.results.slice().reverse().forEach((match) => matches.push({ edition: tournament.edition, ...match }));
  }
  tournamentStats.history.forEach((edition) => {
    (edition.matches || []).slice().reverse().forEach((match) => matches.push({ edition: edition.edition, ...match }));
  });
  return matches.slice(0, 12);
}

function renderTournamentUI() {
  const completedText = tournamentStats.editions
    ? `累计 ${tournamentStats.editions} 届 · ${Object.entries(tournamentStats.factions).filter(([, stats]) => stats.titles > 0).map(([key, stats]) => `${FACTIONS[key].shortName} ${stats.titles} 冠`).join(" · ")}`
    : "尚未产生锦标赛冠军";
  ui.tournamentPreviewStats.textContent = completedText;
  ui.tournamentResetStats.hidden = !tournamentStats.editions && !Object.values(tournamentStats.factions).some((stats) => stats.wins || stats.losses);
  ui.tournamentPreview.hidden = !ui.tournamentToggle.checked;
  ui.tournamentPanel.hidden = !tournament.active;
  ui.tournamentEdition.textContent = `第 ${tournament.edition} 届`;

  if (tournament.bracket) {
    const currentPair = tournamentPair();
    const champion = tournament.bracket.champion;
    ui.tournamentCurrentStatus.textContent = champion
      ? `${FACTIONS[champion].name}获得总冠军`
      : `${TOURNAMENT_STAGE_LABELS[tournament.stageIndex]} · ${factionMatchup(currentPair)}`;
    ui.tournamentBracket.innerHTML = TOURNAMENT_STAGE_LABELS.map((label, stageIndex) => {
      const pair = tournamentPair(stageIndex);
      const result = tournamentResult(stageIndex);
      const classes = ["tournament-match"];
      if (stageIndex === tournament.stageIndex && !champion) classes.push("current");
      if (result) classes.push("complete");
      const winner = result ? FACTIONS[result.winner] : null;
      return `
        <article class="${classes.join(" ")}" style="--match-color:${winner?.color || "#5e5a52"}">
          <span>${label}</span>
          <strong>${factionMatchup(pair)}</strong>
          <small>${result ? `胜者 <b>${winner.name}</b> · ${result.duration}` : stageIndex === tournament.stageIndex ? "正在进行" : "等待晋级结果"}</small>
        </article>`;
    }).join("");
  } else {
    ui.tournamentCurrentStatus.textContent = "等待半决赛签位";
    ui.tournamentBracket.innerHTML = TOURNAMENT_STAGE_LABELS.map((label) => `
      <article class="tournament-match"><span>${label}</span><strong>待抽签</strong><small>等待晋级结果</small></article>`).join("");
  }

  ui.tournamentStandings.innerHTML = Object.entries(FACTIONS).map(([key, faction]) => {
    const stats = tournamentStats.factions[key];
    const leftLosses = stats.left.played - stats.left.wins;
    const rightLosses = stats.right.played - stats.right.wins;
    return `<div class="tournament-standing" style="--standing-color:${faction.color}"><i></i><strong>${faction.name}</strong><span><b>${stats.titles}</b> 冠 · 总 ${stats.wins}胜 ${stats.losses}负<small>左 ${stats.left.wins}胜 ${leftLosses}负 · 右 ${stats.right.wins}胜 ${rightLosses}负</small></span></div>`;
  }).join("");

  const factionKeys = Object.keys(FACTIONS);
  const matchups = [];
  factionKeys.forEach((leftKey, leftIndex) => {
    factionKeys.slice(leftIndex + 1).forEach((rightKey) => matchups.push([leftKey, rightKey]));
  });
  ui.tournamentMatchups.innerHTML = matchups.map(([firstKey, secondKey]) => {
    const first = FACTIONS[firstKey];
    const second = FACTIONS[secondKey];
    const record = tournamentStats.factions[firstKey].opponents[secondKey];
    const played = record.wins + record.losses;
    return `<article class="tournament-matchup-row">
      <div><i style="--matchup-color:${first.color}"></i><strong>${first.shortName}</strong><span>VS</span><strong>${second.shortName}</strong><i style="--matchup-color:${second.color}"></i></div>
      <b>${played ? `${record.wins} - ${record.losses}` : "暂无交锋"}</b>
      <small>${played ? `共 ${played} 场 · ${first.shortName}在左 ${record.leftPlayed} 场 · ${second.shortName}在左 ${record.rightPlayed} 场` : "等待正式锦标赛对局"}</small>
    </article>`;
  }).join("");

  const detailedMatches = recentTournamentMatches();
  ui.tournamentMatchHistory.innerHTML = detailedMatches.length
    ? detailedMatches.map((match) => {
      const stage = TOURNAMENT_STAGE_LABELS[match.stageIndex] || "历史对局";
      if (!match.left || !match.right) {
        return `<article class="tournament-match-detail legacy"><span>第 ${match.edition} 届 · ${stage}</span><strong>历史记录未保存左右站位</strong><small>${FACTIONS[match.winner].name}战胜${FACTIONS[match.loser].name}</small><b>${match.duration || "--:--"}</b></article>`;
      }
      const left = FACTIONS[match.left];
      const right = FACTIONS[match.right];
      const winner = FACTIONS[match.winner];
      return `<article class="tournament-match-detail" style="--winner-color:${winner.color}">
        <span>第 ${match.edition} 届 · ${stage}</span>
        <strong><i>左</i>${left.name}<em>VS</em>${right.name}<i>右</i></strong>
        <small>要塞 ${match.leftHp} : ${match.rightHp} · 出兵 ${match.leftSpawns} : ${match.rightSpawns}</small>
        <b>${winner.name}胜 · ${match.duration}</b>
      </article>`;
    }).join("")
    : `<article class="tournament-match-detail empty"><span>暂无对局明细</span><strong>完成一场锦标赛后开始记录</strong><small>将显示左右站位、血量、出兵与耗时</small></article>`;

  ui.tournamentHistory.innerHTML = tournamentStats.history.length
    ? tournamentStats.history.slice(0, 8).map((edition) => {
      const champion = FACTIONS[edition.champion];
      const matches = (edition.matches || []).map((match) => match.left && match.right
        ? `${FACTIONS[match.left].shortName}(左) VS ${FACTIONS[match.right].shortName}(右)：${FACTIONS[match.winner].shortName}胜`
        : `${FACTIONS[match.winner].shortName}胜${FACTIONS[match.loser].shortName}`).join(" · ");
      return `<li style="--history-color:${champion.color}"><strong>第 ${edition.edition} 届</strong><span>${matches}</span><b>${champion.name}总冠军</b></li>`;
    }).join("")
    : `<li><strong>暂无战报</strong><span>完成首届锦标赛后自动记录三场结果</span><b>统计持续累积</b></li>`;
}

function updateMatchContext() {
  if (tournament.active && tournament.bracket) {
    const stage = TOURNAMENT_STAGE_LABELS[tournament.stageIndex];
    ui.matchSeriesLabel.textContent = `第 ${tournament.edition} 届锦标赛 · ${stage}`;
    ui.roundStatusLabel.textContent = stage;
  } else {
    ui.matchSeriesLabel.textContent = "全自动斗技场 · 单场模式";
    ui.roundStatusLabel.textContent = "无人干预";
  }
  renderTournamentUI();
}

function clearTournamentAdvance() {
  if (tournament.advanceTimer) clearTimeout(tournament.advanceTimer);
  tournament.advanceTimer = null;
}

function stopTournamentRun() {
  clearTournamentAdvance();
  tournament.active = false;
  tournament.stageIndex = 0;
  tournament.bracket = null;
  updateMatchContext();
}

function openTournamentDraw() {
  state.started = false;
  state.drawing = false;
  resetGame(false);
  ui.resultModal.hidden = true;
  ui.drawScreen.hidden = false;
  ui.drawScreen.classList.remove("leaving");
  document.body.classList.add("draw-open");
  ui.drawStart.disabled = true;
  ui.drawTokens.forEach((token) => token.classList.remove("selected", "not-selected", "active"));
  document.querySelectorAll(".draw-result").forEach((result) => result.classList.remove("revealed"));
  ui.drawLeftName.textContent = "待抽取";
  ui.drawRightName.textContent = "待抽取";
  ui.drawLeftSigil.textContent = "?";
  ui.drawRightSigil.textContent = "?";
  ui.drawStatus.textContent = `第 ${tournamentStats.editions + 1} 届锦标赛即将抽签`;
  setTimeout(() => runFactionDraw(), 700);
}

function advanceTournament() {
  clearTournamentAdvance();
  if (!tournament.active || !state.ended) return;
  ui.resultModal.hidden = true;
  if (tournament.stageIndex < 2) {
    tournament.stageIndex += 1;
    const [leftKey, rightKey] = tournamentPair();
    beginMatch(leftKey, rightKey);
    return;
  }
  openTournamentDraw();
}

function scheduleTournamentAdvance(delay) {
  clearTournamentAdvance();
  tournament.advanceTimer = setTimeout(advanceTournament, delay);
}

function recordTournamentResult(winnerSide, loserSide) {
  const leftKey = state.leftFaction;
  const rightKey = state.rightFaction;
  const winnerKey = factionKeyForSide(winnerSide);
  const loserKey = factionKeyForSide(loserSide);
  const result = {
    stageIndex: tournament.stageIndex,
    left: leftKey,
    right: rightKey,
    winner: winnerKey,
    loser: loserKey,
    winnerSide,
    duration: ui.battleTime.textContent,
    durationSeconds: Math.round(state.elapsed),
    leftHp: Math.round(state.playerHp),
    rightHp: Math.round(state.enemyHp),
    leftSpawns: state.leftSpawnCount,
    rightSpawns: state.rightSpawnCount
  };
  tournament.bracket.results.push(result);
  const leftStats = tournamentStats.factions[leftKey];
  const rightStats = tournamentStats.factions[rightKey];
  const winnerStats = tournamentStats.factions[winnerKey];
  const loserStats = tournamentStats.factions[loserKey];
  leftStats.left.played += 1;
  rightStats.right.played += 1;
  leftStats.opponents[rightKey].leftPlayed += 1;
  rightStats.opponents[leftKey].rightPlayed += 1;
  winnerStats.wins += 1;
  loserStats.losses += 1;
  winnerStats.opponents[loserKey].wins += 1;
  loserStats.opponents[winnerKey].losses += 1;
  if (winnerSide === "left") {
    leftStats.left.wins += 1;
    leftStats.opponents[rightKey].leftWins += 1;
  } else {
    rightStats.right.wins += 1;
    rightStats.opponents[leftKey].rightWins += 1;
  }
  if (tournament.stageIndex < 2) {
    tournament.bracket.finalists[tournament.stageIndex] = winnerKey;
  } else {
    tournament.bracket.champion = winnerKey;
    tournamentStats.editions += 1;
    tournamentStats.factions[winnerKey].titles += 1;
    tournamentStats.history.unshift({
      edition: tournament.edition,
      champion: winnerKey,
      matches: tournament.bracket.results.map((match) => ({ ...match }))
    });
    tournamentStats.history = tournamentStats.history.slice(0, 12);
  }
  persistTournamentStats();
  renderTournamentUI();
  return result;
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
  if (tournament.active) {
    recordTournamentResult(winnerSide, loserSide);
    const isFinal = tournament.stageIndex === 2;
    ui.resultEyebrow.textContent = `第 ${tournament.edition} 届 · ${TOURNAMENT_STAGE_LABELS[tournament.stageIndex]}`;
    ui.resultTitle.textContent = isFinal ? `${winner.name}总冠军` : `${winner.name}晋级`;
    ui.resultCopy.textContent = isFinal
      ? `${winner.name}夺得第 ${tournament.edition} 届总冠军，下一届将自动重新抽签。`
      : `${winner.name}击败${loser.name}，下一场将在短暂停留后自动开始。`;
    document.querySelector("#result-restart").textContent = isFinal ? "立即开始下一届" : "立即进入下一场";
    scheduleTournamentAdvance(isFinal ? 5200 : 3600);
  } else {
    ui.resultEyebrow.textContent = "自动对战结束";
    ui.resultTitle.textContent = `${winner.name}获胜`;
    ui.resultCopy.textContent = `${loser.base}已被${winner.name}攻破。`;
    document.querySelector("#result-restart").textContent = "重新抽签";
  }
  ui.resultTitle.style.color = winner.color;
  ui.resultModal.hidden = false;
}

function gameLoop(now) {
  const rawDt = Math.min(.05, (now - state.lastFrame) / 1000);
  state.lastFrame = now;
  if (state.running && !state.ended) {
    const dt = rawDt * state.speed;
    state.elapsed += dt;
    if (!state.marbleOverdriveTriggered && state.elapsed >= MARBLE_OVERDRIVE_TIME) {
      state.marbleOverdriveTriggered = true;
      showCallout("战斗超过五分钟，双方主炮进入火力超频");
      log("火力超频：双方上层主炮提升至每秒 2 颗弹珠。");
    }
    const marbleInterval = 1 / upperMarbleRate(state.elapsed);
    state.leftMarbleAccumulator += dt;
    state.rightMarbleAccumulator += dt;
    if (state.leftMarbleAccumulator >= marbleInterval) {
      state.leftMarbleAccumulator -= marbleInterval;
      createUpperShot("left");
    }
    if (state.rightMarbleAccumulator >= marbleInterval) {
      state.rightMarbleAccumulator -= marbleInterval;
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
    marbleOverdriveTriggered: false,
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
  updateMatchContext();
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

  for (let turn = 0; turn < 16; turn += 1) {
    ui.drawTokens.forEach((token) => token.classList.remove("active"));
    ui.drawTokens[turn % ui.drawTokens.length].classList.add("active");
    await wait(65 + turn * 5);
  }
  const shuffled = shuffledFactionKeys();
  if (ui.tournamentToggle.checked) {
    tournament.active = true;
    tournament.edition = tournamentStats.editions + 1;
    tournament.stageIndex = 0;
    tournament.bracket = {
      semifinals: [[shuffled[0], shuffled[1]], [shuffled[2], shuffled[3]]],
      finalists: [],
      results: [],
      champion: null
    };
    const [leftKey, rightKey] = tournament.bracket.semifinals[0];
    ui.drawTokens.forEach((token) => token.classList.add("selected"));
    ui.drawTokens.forEach((token) => token.classList.remove("active"));
    setDrawResult("left", leftKey);
    setDrawResult("right", rightKey);
    renderTournamentUI();
    ui.drawStatus.textContent = `半决赛 A：${factionMatchup(tournament.bracket.semifinals[0])}`;
    await wait(800);
    ui.drawStatus.textContent = `半决赛 B：${factionMatchup(tournament.bracket.semifinals[1])}`;
    await wait(1100);
    ui.drawStatus.textContent = `第 ${tournament.edition} 届锦标赛开赛`;
    await wait(650);
    ui.drawArena.classList.remove("drawing");
    state.drawing = false;
    beginMatch(leftKey, rightKey);
    return;
  }
  stopTournamentRun();
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
  stopTournamentRun();
  state.started = false;
  state.drawing = false;
  resetGame(false);
  ui.resultModal.hidden = true;
  ui.drawScreen.hidden = false;
  ui.drawScreen.classList.remove("leaving");
  document.body.classList.add("draw-open");
  ui.drawStart.disabled = false;
  ui.drawStatus.textContent = ui.tournamentToggle.checked ? "锦标赛签池待命" : "签池待命";
  ui.drawTokens.forEach((token) => token.classList.remove("selected", "not-selected", "active"));
  document.querySelectorAll(".draw-result").forEach((result) => result.classList.remove("revealed"));
  ui.drawLeftName.textContent = "待抽取";
  ui.drawRightName.textContent = "待抽取";
  ui.drawLeftSigil.textContent = "?";
  ui.drawRightSigil.textContent = "?";
  ui.drawStart.textContent = ui.tournamentToggle.checked ? "开始锦标赛" : "开始抽签";
  renderTournamentUI();
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
const devPanelClose = document.querySelector("#dev-panel-close");

function setDevMode(enabled) {
  document.body.classList.toggle("dev-mode", enabled);
  devToolsToggle.setAttribute("aria-expanded", String(enabled));
  devPanel.hidden = !enabled;
}

function clearBattleUnits() {
  state.units = [];
  [...state.unitProjectiles, ...state.defenseProjectiles, ...state.commanderEffects].forEach((item) => item.element.remove());
  state.unitProjectiles = [];
  state.defenseProjectiles = [];
  state.commanderEffects = [];
  ui.unitLayer.innerHTML = "";
  document.querySelectorAll(".fortress-defense.firing").forEach((defense) => defense.classList.remove("firing"));
  updateHud();
  log("测试清场：全场士兵已清空。");
}

devToolsToggle.addEventListener("click", () => {
  const expanded = devToolsToggle.getAttribute("aria-expanded") === "true";
  devToolsToggle.setAttribute("aria-expanded", String(!expanded));
  devPanel.hidden = expanded;
});
devPanelClose.addEventListener("click", () => setDevMode(false));
devPanel.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.devAction === "match") {
    state.drawing = false;
    ui.drawArena.classList.remove("drawing");
    stopTournamentRun();
    beginMatch(document.querySelector("#dev-left-faction").value, document.querySelector("#dev-right-faction").value);
    return;
  }
  if (button.dataset.devAction === "clear") {
    if (state.started && !state.ended) clearBattleUnits();
    return;
  }
  if (!state.started || state.ended) return;
  const side = button.dataset.devSide;
  if (!side) return;
  const team = side === "left" ? "player" : "enemy";
  const factionKey = side === "left" ? state.leftFaction : state.rightFaction;
  if (button.dataset.devAction === "commander") {
    let commander = state.units.find((unit) => unit.team === team && unit.tier === 3 && unit.hp > 0);
    if (!commander) {
      commander = spawnUnit(team, factionKey, 3);
    }
    castCommanderSkill(commander);
    renderUnits();
    updateHud();
    return;
  }
  if (button.dataset.devAction === "ultimate") {
    castUltimate(side);
    return;
  }
  if (button.dataset.devAction === "fortress") {
    castUltimate(side, "fortress");
    return;
  }
  if (button.dataset.devTier === undefined) return;
  const tier = Number(button.dataset.devTier);
  const unit = spawnUnit(team, factionKey, tier);
  if (tier === 3) unit.commanderCooldown = .2;
  log(`测试部署：${FACTIONS[factionKey].units[tier].name}。`);
  renderUnits();
  updateHud();
});

document.querySelector(".brand").addEventListener("dblclick", () => {
  setDevMode(!document.body.classList.contains("dev-mode"));
});
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.shiftKey && event.code === "KeyD") {
    event.preventDefault();
    setDevMode(!document.body.classList.contains("dev-mode"));
  }
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
  if (tournament.active && state.ended) advanceTournament();
  else returnToDraw();
});
ui.drawStart.addEventListener("click", () => {
  ensureBgm();
  runFactionDraw();
});
ui.tournamentToggle.addEventListener("change", () => {
  ui.drawStart.textContent = ui.tournamentToggle.checked ? "开始锦标赛" : "开始抽签";
  ui.drawStatus.textContent = ui.tournamentToggle.checked ? "锦标赛签池待命" : "签池待命";
  renderTournamentUI();
});
ui.tournamentResetStats.addEventListener("click", () => {
  if (ui.tournamentResetStats.dataset.confirm !== "true") {
    ui.tournamentResetStats.dataset.confirm = "true";
    ui.tournamentResetStats.textContent = "再次点击确认";
    setTimeout(() => {
      ui.tournamentResetStats.dataset.confirm = "false";
      ui.tournamentResetStats.textContent = "清空统计";
    }, 3000);
    return;
  }
  const emptyStats = emptyTournamentStats();
  tournamentStats.editions = 0;
  tournamentStats.factions = emptyStats.factions;
  tournamentStats.history = [];
  tournament.edition = 1;
  persistTournamentStats();
  ui.tournamentResetStats.dataset.confirm = "false";
  ui.tournamentResetStats.textContent = "清空统计";
  renderTournamentUI();
});

document.addEventListener("pointerdown", ensureBgm, { once: true });
document.addEventListener("keydown", ensureBgm, { once: true });

configureMatchUI(state.leftFaction, state.rightFaction);
ui.audio.volume = .28;
updateAudioButton();
resetGame(false);
renderTournamentUI();
requestAnimationFrame(gameLoop);
