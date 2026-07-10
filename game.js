const FACTIONS = {
  red: {
    name: "赤焰军",
    color: "#f04f3d",
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
    color: "#55a9f5",
    trait: "高生命与减速控制，擅长稳守反推。",
    units: [
      { name: "盾卫", role: "承伤", hp: 115, damage: 9, speed: 3.8, range: 3, text: "圆盾护身，承受前线伤害。" },
      { name: "冰弓手", role: "远程", hp: 105, damage: 21, speed: 4, range: 10, text: "远程冰箭，命中后降低移速。" },
      { name: "重甲守军", role: "壁垒", hp: 310, damage: 31, speed: 2.8, range: 3, text: "塔盾重甲，停步时获得减伤。" },
      { name: "寒霜巨像", role: "控制", hp: 590, damage: 59, speed: 2.5, range: 5, text: "冰锤重击，对邻近目标溅射。" }
    ]
  }
};

const TIER_COLORS = ["#d9d5c9", "#5bc873", "#55a9f5", "#f0c940"];
const TIER_LABELS = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ"];
const UNIT_COSTS = [3, 6, 10, 16];
const ULTIMATE_COST = 20;
const MAX_BASE_HP = 1600;
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
  running: true,
  speed: 1,
  ended: false,
  lastFrame: performance.now(),
  leftMarbleAccumulator: 0,
  rightMarbleAccumulator: 0,
  playerDefenseCooldown: 0,
  enemyDefenseCooldown: 0,
  audioMuted: false,
  unitId: 0,
  ultimateEffects: []
};

const ui = {
  battleTime: document.querySelector("#battle-time"),
  playerHealth: document.querySelector("#player-health"),
  enemyHealth: document.querySelector("#enemy-health"),
  playerHealthBar: document.querySelector("#player-health-bar"),
  enemyHealthBar: document.querySelector("#enemy-health-bar"),
  leftAlive: document.querySelector("#left-alive"),
  rightAlive: document.querySelector("#right-alive"),
  leftSpawnCount: document.querySelector("#left-spawn-count"),
  rightSpawnCount: document.querySelector("#right-spawn-count"),
  battlefield: document.querySelector("#battlefield"),
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

function unitFigureMarkup() {
  return `
    <span class="head"></span><span class="body"></span>
    <i class="arm left"></i><i class="arm right"></i>
    <i class="leg left"></i><i class="leg right"></i>
    <b class="weapon"></b><b class="gear"></b><b class="crest"></b><em class="impact"></em>
  `;
}

function renderCodex() {
  ui.codexFactions.innerHTML = [
    { key: "red", sideClass: "red-side", label: "左侧 · 进攻型" },
    { key: "blue", sideClass: "blue-side", label: "右侧 · 防守型" }
  ].map(({ key, sideClass, label }) => {
    const faction = FACTIONS[key];
    return `
      <section class="codex-side ${sideClass}">
        <div class="codex-side-heading"><strong>${faction.name}</strong><span>${label} · ${faction.trait}</span></div>
        <div class="codex-units">
          ${faction.units.map((unit, tier) => `
            <article class="codex-card tier-${tier + 1}" style="--faction-color:${faction.color};--card-scale:${[.76, .96, 1.22, 1.52][tier]}">
              <div class="codex-figure" aria-hidden="true"><div class="unit-figure unit-${key} unit-${tier + 1}">${unitFigureMarkup()}</div></div>
              <div class="codex-info">
                <span class="codex-tier">等级 ${TIER_LABELS[tier]} · ${unit.role}</span>
                <h3>${unit.name}</h3><p>${unit.text}</p>
                <div class="stat-line"><span>生命 <b>${unit.hp}</b></span><span>攻击 <b>${unit.damage}</b></span></div>
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
    Bodies.rectangle(width * .09, height - 10, width * .22, 7, {
      isStatic: true,
      angle: .34,
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
    trackLeft: 57,
    trackWidth: width - 65,
    conveyorDirection: 1,
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
    const minX = world.trackLeft - world.trackWidth - spacing;
    const maxX = world.trackLeft + world.trackWidth * 2 + spacing;
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
  const launchSpeed = 7.8;
  const radians = cannonAngleMagnitude * Math.PI / 180;
  const horizontalVelocity = Math.cos(radians) * launchSpeed;
  const verticalVelocity = -Math.sin(radians) * launchSpeed;
  const cannonAngle = -cannonAngleMagnitude;
  const shot = document.createElement("span");
  shot.className = "stage-marble";
  shot.style.setProperty("--marble-color", color);
  cannon.style.setProperty("--cannon-angle", `${cannonAngle}deg`);
  cannon.dataset.angle = cannonAngleMagnitude.toFixed(1);
  stage.appendChild(shot);
  const body = Bodies.circle(34, 84, 6, {
    restitution: .74,
    friction: 0,
    frictionStatic: 0,
    frictionAir: .0025,
    density: .0012,
    label: "marble"
  });
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
  const ball = document.createElement("span");
  ball.className = "transfer-ball";
  ball.style.setProperty("--transfer-x", `${24 - machine.transfer.clientWidth * .4055}px`);
  ball.style.animationDuration = `${.92 / state.speed}s`;
  machine.transfer.appendChild(ball);
  state.pendingShots.push({ side, level: "transfer", element: ball, remaining: .92 });
  updateMachineHud(side);
}

function createSplitReturnShot(side) {
  const machine = ui.machines[side];
  const machineBody = machine.upperStage.closest(".two-stage-machine");
  const ball = document.createElement("span");
  ball.className = "return-ball";
  ball.style.setProperty("--return-right", `${machineBody.clientWidth / 2 - 13}px`);
  ball.style.setProperty("--return-left", `${34 - machineBody.clientWidth / 2}px`);
  ball.style.setProperty("--return-top", "-162px");
  ball.style.setProperty("--return-cannon", "-82px");
  ball.style.animationDuration = `${1.25 / state.speed}s`;
  machineBody.appendChild(ball);
  state.pendingShots.push({ side, level: "return", element: ball, remaining: 1.25 });
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
    createSplitReturnShot(side);
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
    const factionKey = isLeft ? "red" : "blue";
    const team = isLeft ? "player" : "enemy";
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

function castUltimate(side) {
  const isLeft = side === "left";
  const boostKey = isLeft ? "leftBoost" : "rightBoost";
  state[boostKey] = 0;
  const effectElement = document.createElement("div");
  effectElement.className = `ultimate-effect ${isLeft ? "meteor-storm" : "frost-wave"}`;
  const visualSpeed = state.speed;
  const visualTimes = {
    "--shake-duration": .18, "--shake-delay": .2, "--meteor-duration": .48,
    "--impact-duration": .55, "--impact-offset": .42, "--burn-duration": 3.4,
    "--burn-delay": 1.35, "--frost-duration": 2.8, "--sweep-duration": 1.2,
    "--crack-duration": 2.5, "--crack-delay": .35, "--ground-delay": .3
  };
  Object.entries(visualTimes).forEach(([name, seconds]) => effectElement.style.setProperty(name, `${seconds / visualSpeed}s`));
  effectElement.innerHTML = isLeft
    ? `<i style="--strike-x:48%;--delay:0s"></i><i style="--strike-x:62%;--delay:${.32 / visualSpeed}s"></i><i style="--strike-x:76%;--delay:${.64 / visualSpeed}s"></i><i style="--strike-x:88%;--delay:${.96 / visualSpeed}s"></i><b></b>`
    : `<i></i><b></b><span></span>`;
  ui.battlefield.appendChild(effectElement);

  if (isLeft) {
    state.ultimateEffects.push({ type: "red", age: 0, nextStrike: 0, burnTick: 0, duration: 4.8, element: effectElement });
    showCallout("赤焰终极技能 · 天火审判");
    log("天火审判锁定霜蓝阵线：四段陨火将造成范围伤害、击退与持续灼烧。");
  } else {
    state.units.filter((unit) => unit.team === "player").forEach((unit) => {
      applyDamage(unit, Math.max(38, unit.maxHp * .14));
      unit.freezeTimer = Math.max(unit.freezeTimer, 2.6);
    });
    state.units.filter((unit) => unit.team === "enemy").forEach((unit) => {
      unit.shieldTimer = Math.max(unit.shieldTimer, 4.5);
      unit.shieldHp = Math.max(unit.shieldHp, 60 + unit.tier * 25);
    });
    state.playerHp = Math.max(0, state.playerHp - 70);
    state.ultimateEffects.push({ type: "blue", age: 0, duration: 2.8, element: effectElement });
    showCallout("霜蓝终极技能 · 绝对零度");
    log("绝对零度席卷战场：赤焰全军冻结 2.6 秒，霜蓝全军获得寒霜护盾。");
  }
  updateMachineHud(side);
}

function updateUltimateEffects(dt) {
  const strikeTimes = [.25, .62, .99, 1.36];
  const strikeCenters = [48, 62, 76, 88];
  state.ultimateEffects.forEach((effect) => {
    effect.age += dt;
    if (effect.type !== "red") return;
    while (effect.nextStrike < strikeTimes.length && effect.age >= strikeTimes[effect.nextStrike]) {
      const index = effect.nextStrike;
      const center = strikeCenters[index];
      state.units.filter((unit) => unit.team === "enemy" && Math.abs(unit.x - center) <= 15).forEach((unit) => {
        applyDamage(unit, index === 3 ? Math.max(75, unit.maxHp * .2) : Math.max(48, unit.maxHp * .12));
        unit.x = Math.min(91, unit.x + (index === 3 ? 7 : 4));
      });
      if (index === 3) state.enemyHp = Math.max(0, state.enemyHp - 120);
      effect.nextStrike += 1;
    }
    if (effect.age >= 1.35 && effect.age <= 4.35) {
      effect.burnTick += dt;
      while (effect.burnTick >= .5) {
        state.units.filter((unit) => unit.team === "enemy" && unit.x >= 52).forEach((unit) => applyDamage(unit, 12));
        effect.burnTick -= .5;
      }
    }
  });
  const expired = state.ultimateEffects.filter((effect) => effect.age >= effect.duration);
  expired.forEach((effect) => effect.element.remove());
  state.ultimateEffects = state.ultimateEffects.filter((effect) => effect.age < effect.duration);
}

function spawnUnit(team, factionKey, tier) {
  const source = FACTIONS[factionKey].units[tier];
  state.units.push({
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
    hitTimer: 0,
    attacking: false,
    moving: true
  });
}

function applyDamage(target, amount) {
  const guarded = target.factionKey === "blue" && target.tier === 2 && !target.moving;
  let damage = amount * (guarded ? .72 : 1);
  if (target.shieldTimer > 0 && target.shieldHp > 0) {
    const absorbed = Math.min(target.shieldHp, damage);
    target.shieldHp -= absorbed;
    damage -= absorbed;
  }
  target.hp -= damage;
  target.hitTimer = .2;
}

function updateUnits(dt) {
  const redRamp = Math.min(.3, state.elapsed / 90 * .3);

  state.units.forEach((unit) => {
    unit.cooldown -= dt;
    unit.slowTimer = Math.max(0, unit.slowTimer - dt);
    unit.freezeTimer = Math.max(0, unit.freezeTimer - dt);
    unit.shieldTimer = Math.max(0, unit.shieldTimer - dt);
    if (unit.shieldTimer === 0) unit.shieldHp = 0;
    unit.hitTimer = Math.max(0, unit.hitTimer - dt);
    unit.attacking = false;
    unit.moving = false;

    if (unit.freezeTimer > 0) return;

    const target = state.units
      .filter((other) => other.team !== unit.team && other.hp > 0)
      .sort((a, b) => Math.abs(a.x - unit.x) - Math.abs(b.x - unit.x))[0];
    const distance = target ? Math.abs(target.x - unit.x) : Infinity;

    if (target && distance <= unit.range) {
      unit.attacking = true;
      if (unit.cooldown <= 0) {
        let attackSpeed = 1;
        let damage = unit.damage;
        if (unit.factionKey === "red") damage *= 1 + redRamp;
        if (unit.factionKey === "red" && unit.tier === 2) attackSpeed += (1 - unit.hp / unit.maxHp) * .65;
        applyDamage(target, damage);
        if (unit.factionKey === "blue" && unit.tier === 1) target.slowTimer = 1.4;
        if (unit.factionKey === "blue" && unit.tier === 3) {
          state.units
            .filter((other) => other.team !== unit.team && other.id !== target.id && Math.abs(other.x - target.x) <= 5)
            .forEach((other) => applyDamage(other, damage * .35));
        }
        unit.cooldown = 1 / attackSpeed;
      }
    } else {
      const baseDistance = unit.team === "player" ? 91 - unit.x : unit.x - 9;
      if (baseDistance <= unit.range) {
        unit.attacking = true;
        if (unit.cooldown <= 0) {
          let baseDamage = Math.max(2, unit.damage - 4);
          if (unit.factionKey === "red" && unit.tier === 1) baseDamage *= 1.35;
          if (unit.team === "player") state.enemyHp -= baseDamage;
          else state.playerHp -= baseDamage;
          unit.cooldown = 1;
        }
      } else {
        const direction = unit.team === "player" ? 1 : -1;
        const slowFactor = unit.slowTimer > 0 ? .58 : 1;
        unit.x += direction * unit.speed * slowFactor * dt;
        unit.moving = true;
      }
    }
  });

  state.units = state.units.filter((unit) => unit.hp > 0);
  state.playerHp = Math.max(0, state.playerHp);
  state.enemyHp = Math.max(0, state.enemyHp);
}

function updateBaseDefense(dt) {
  state.playerDefenseCooldown -= dt;
  state.enemyDefenseCooldown -= dt;
  const playerTarget = state.units.filter((unit) => unit.team === "enemy" && unit.x <= 25).sort((a, b) => a.x - b.x)[0];
  if (playerTarget && state.playerDefenseCooldown <= 0) {
    applyDamage(playerTarget, 40);
    state.playerDefenseCooldown = 1.5;
    log("赤焰要塞弩炮命中入侵敌军，造成 40 伤害。");
  }
  const enemyTarget = state.units.filter((unit) => unit.team === "player" && unit.x >= 75).sort((a, b) => b.x - a.x)[0];
  if (enemyTarget && state.enemyDefenseCooldown <= 0) {
    applyDamage(enemyTarget, 40);
    state.enemyDefenseCooldown = 1.5;
    log("霜蓝要塞弩炮开火，赤焰前排受到 40 伤害。");
  }
}

function renderUnits() {
  const existing = new Map([...ui.unitLayer.children].map((element) => [Number(element.dataset.id), element]));
  state.units.forEach((unit) => {
    let element = existing.get(unit.id);
    if (!element) {
      element = document.createElement("div");
      element.dataset.id = unit.id;
      element.innerHTML = `<div class="unit-health"><span></span></div><div class="rig"><div class="unit-figure">${unitFigureMarkup()}</div></div>`;
      ui.unitLayer.appendChild(element);
    }
    const combatStyle = unit.range >= 7 ? "ranged" : "melee";
    element.className = `fighter ${unit.team === "enemy" ? "enemy" : "friendly"} tier-${unit.tier + 1} unit-${unit.factionKey} unit-${unit.tier + 1} ${unit.moving ? "walking" : ""} ${unit.attacking ? "attacking" : ""} ${unit.hitTimer > 0 ? "hit" : ""} ${unit.freezeTimer > 0 ? "frozen" : ""} ${unit.shieldTimer > 0 && unit.shieldHp > 0 ? "shielded" : ""} ${combatStyle}`;
    element.style.left = `${unit.x}%`;
    element.style.bottom = `calc(9% + ${unit.lane}px)`;
    element.style.zIndex = String(5 + unit.lane);
    element.style.setProperty("--unit-color", FACTIONS[unit.factionKey].color);
    element.querySelector(".unit-figure").className = `unit-figure unit-${unit.factionKey} unit-${unit.tier + 1}`;
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
  const redWon = state.enemyHp <= 0;
  ui.resultTitle.textContent = redWon ? "赤焰获胜" : "霜蓝获胜";
  ui.resultTitle.style.color = redWon ? FACTIONS.red.color : FACTIONS.blue.color;
  ui.resultCopy.textContent = redWon ? "霜蓝要塞已被赤焰军摧毁。" : "赤焰要塞已被霜蓝卫攻破。";
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
    updateUnits(dt);
    updateBaseDefense(dt);
    renderUnits();
    updateHud();
    checkResult();
  }
  requestAnimationFrame(gameLoop);
}

function resetGame() {
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
    running: true,
    ended: false,
    lastFrame: performance.now(),
    leftMarbleAccumulator: 0,
    rightMarbleAccumulator: 0,
    playerDefenseCooldown: 0,
    enemyDefenseCooldown: 0,
    unitId: 0,
    ultimateEffects: []
  });
  ui.unitLayer.innerHTML = "";
  document.querySelectorAll(".ultimate-effect").forEach((effect) => effect.remove());
  document.querySelectorAll(".stage-marble, .transfer-ball, .return-ball").forEach((marble) => marble.remove());
  initPhysicsStages();
  ui.resultModal.hidden = true;
  ui.pause.textContent = "Ⅱ";
  ui.pause.title = "暂停";
  document.body.classList.remove("game-paused");
  log("双方要塞正在自动部署部队。");
  showCallout("双层机器启动，主炮开始自动扫角");
  updateMachineHud("left");
  updateMachineHud("right");
  updateHud();
}

ui.pause.addEventListener("click", () => {
  ensureBgm();
  if (state.ended) return;
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

ui.audioButton.addEventListener("click", () => {
  state.audioMuted = !state.audioMuted;
  updateAudioButton();
  if (!state.audioMuted) ensureBgm();
});

document.querySelector("#restart-button").addEventListener("click", () => {
  ensureBgm();
  resetGame();
});
document.querySelector("#result-restart").addEventListener("click", () => {
  ensureBgm();
  resetGame();
});

document.addEventListener("pointerdown", ensureBgm, { once: true });
document.addEventListener("keydown", ensureBgm, { once: true });

renderCodex();
initPhysicsStages();
ui.audio.volume = .28;
updateAudioButton();
ensureBgm();
updateMachineHud("left");
updateMachineHud("right");
updateHud();
requestAnimationFrame(gameLoop);
