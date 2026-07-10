import type {CSSProperties} from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const COLORS = {
  background: '#151515',
  panel: '#20201f',
  paper: '#eee9dc',
  muted: '#aaa69f',
  line: '#46433e',
  red: '#f04f3d',
  yellow: '#f0c940',
  orange: '#ff8d3a',
};

const FIRE_FRAME = 72;
const HIT_FRAME = 118;
const MARBLE_RADIUS = 27;
const MUZZLE_POSITION = {x: 590, y: 489};
const IMPACT_POSITION = {x: 1368, y: 485};

type Point = {x: number; y: number};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getMarblePosition = (frame: number): Point => {
  const localFrame = frame - FIRE_FRAME;

  if (localFrame <= 0) {
    return MUZZLE_POSITION;
  }

  if (frame <= HIT_FRAME) {
    const progress = (frame - FIRE_FRAME) / (HIT_FRAME - FIRE_FRAME);
    return {
      x: interpolate(progress, [0, 1], [MUZZLE_POSITION.x, IMPACT_POSITION.x]),
      y:
        MUZZLE_POSITION.y -
        Math.sin(progress * Math.PI) * 190 +
        progress * (IMPACT_POSITION.y - MUZZLE_POSITION.y),
    };
  }

  const progress = (frame - HIT_FRAME) / (179 - HIT_FRAME);
  return {
    x: interpolate(progress, [0, 1], [IMPACT_POSITION.x, 710]),
    y: IMPACT_POSITION.y - Math.sin(progress * Math.PI) * 230 + progress * 355,
  };
};

const barrelStyle: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: -54,
  width: 420,
  height: 108,
  transformOrigin: '54px 54px',
};

const Cannon = ({angle, recoil}: {angle: number; recoil: number}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 290 - recoil * 24,
        top: 735 + recoil * 8,
        width: 450,
        height: 270,
      }}
    >
      <div style={{...barrelStyle, transform: `rotate(${-angle}deg)`}}>
        <div
          style={{
            position: 'absolute',
            left: 16,
            top: 10,
            width: 350,
            height: 88,
            border: `8px solid ${COLORS.red}`,
            borderRadius: '20px 54px 54px 20px',
            background: '#272725',
            boxShadow: 'inset 0 14px 0 rgba(255,255,255,0.04), 0 12px 30px rgba(0,0,0,0.35)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 340,
            top: 0,
            width: 62,
            height: 108,
            border: `8px solid ${COLORS.red}`,
            borderRadius: 14,
            background: '#1a1a19',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 373,
            top: 21,
            width: 18,
            height: 66,
            borderRadius: 9,
            background: COLORS.orange,
            boxShadow: `0 0 26px ${COLORS.orange}`,
            opacity: recoil,
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 34,
          top: 26,
          width: 224,
          height: 164,
          border: `8px solid ${COLORS.red}`,
          borderRadius: '70px 70px 22px 22px',
          background: '#242422',
        }}
      />
      {[70, 232].map((left) => (
        <div
          key={left}
          style={{
            position: 'absolute',
            left,
            top: 132,
            width: 116,
            height: 116,
            border: `15px solid ${COLORS.red}`,
            borderRadius: '50%',
            background: '#1b1b1a',
            boxShadow: '0 14px 24px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 28,
              borderRadius: '50%',
              background: COLORS.red,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const Obstacle = ({impact}: {impact: number}) => {
  const shake = Math.sin(impact * Math.PI * 6) * (1 - impact) * 15;

  return (
    <div
      style={{
        position: 'absolute',
        left: 1395 + shake,
        top: 330,
        width: 210,
        height: 500,
        transform: `rotate(${impact * 1.5}deg)`,
        transformOrigin: '50% 100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: 'polygon(18% 0, 82% 0, 100% 8%, 100% 92%, 82% 100%, 18% 100%, 0 92%, 0 8%)',
          background: COLORS.yellow,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 10,
          clipPath: 'polygon(17% 0, 83% 0, 100% 8%, 100% 92%, 83% 100%, 17% 100%, 0 92%, 0 8%)',
          background: '#292925',
        }}
      />
      {[55, 250, 445].map((top) => (
        <div
          key={top}
          style={{
            position: 'absolute',
            left: 20,
            right: 20,
            top,
            height: 18,
            background: `repeating-linear-gradient(135deg, ${COLORS.yellow} 0 18px, #292925 18px 36px)`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

const Trail = ({frame}: {frame: number}) => {
  const dots = Array.from({length: 16}, (_, index) => {
    const sampleFrame = frame - (index + 1) * 2.2;
    if (sampleFrame < FIRE_FRAME || sampleFrame > 179) return null;
    const point = getMarblePosition(sampleFrame);
    const opacity = interpolate(index, [0, 15], [0.65, 0.02]);
    const size = interpolate(index, [0, 15], [42, 8]);

    return (
      <div
        key={index}
        style={{
          position: 'absolute',
          left: point.x - size / 2,
          top: point.y - size / 2,
          width: size,
          height: size,
          borderRadius: '50%',
          background: COLORS.orange,
          boxShadow: `0 0 ${size}px ${COLORS.orange}`,
          opacity,
        }}
      />
    );
  });

  return <>{dots}</>;
};

export const CannonMarble = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const aimProgress = interpolate(frame, [0.55 * fps, 2.1 * fps], [0, 1], {
    easing: Easing.bezier(0.45, 0, 0.55, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const angle = interpolate(aimProgress, [0, 1], [0, 45]);
  const recoil = interpolate(
    frame,
    [FIRE_FRAME, FIRE_FRAME + 4, FIRE_FRAME + 14],
    [0, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const impact = interpolate(frame, [HIT_FRAME, HIT_FRAME + 15], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const marble = getMarblePosition(frame);
  const marbleVisible = frame >= FIRE_FRAME;
  const impactFlash = interpolate(
    frame,
    [HIT_FRAME, HIT_FRAME + 2, HIT_FRAME + 12],
    [0, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const speedLinesOpacity = interpolate(frame, [FIRE_FRAME, FIRE_FRAME + 8], [0, 0.36], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        color: COLORS.paper,
        backgroundColor: COLORS.background,
        fontFamily: 'Inter, Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.5,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.035) 2px, transparent 2px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 82,
          top: 70,
          fontSize: 26,
          fontWeight: 800,
          color: COLORS.muted,
        }}
      >
        BALLISTIC TEST / 01
      </div>
      <div
        style={{
          position: 'absolute',
          left: 82,
          top: 112,
          fontSize: 54,
          fontWeight: 900,
        }}
      >
        CANNON RICOCHET
      </div>
      <div
        style={{
          position: 'absolute',
          left: 84,
          top: 188,
          width: 380,
          height: 5,
          background: COLORS.red,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: 84,
          top: 80,
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: '10px 28px',
          fontSize: 22,
          fontWeight: 800,
        }}
      >
        <span style={{color: COLORS.muted}}>BARREL</span>
        <span style={{color: COLORS.red}}>{angle.toFixed(0)} DEG</span>
        <span style={{color: COLORS.muted}}>STATUS</span>
        <span style={{color: frame < FIRE_FRAME ? COLORS.yellow : COLORS.orange}}>
          {frame < 18 ? 'STANDBY' : frame < FIRE_FRAME ? 'AIMING' : frame < HIT_FRAME ? 'IN FLIGHT' : 'RICOCHET'}
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 830,
          bottom: 0,
          borderTop: `4px solid ${COLORS.line}`,
          background: '#242422',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 860,
          height: 5,
          opacity: 0.55,
          background: `repeating-linear-gradient(90deg, ${COLORS.red} 0 80px, transparent 80px 112px)`,
        }}
      />

      <Cannon angle={angle} recoil={recoil} />
      <Obstacle impact={impact} />

      <div
        style={{
          position: 'absolute',
          left: 540,
          top: 760,
          width: 780,
          borderTop: `3px dashed ${COLORS.red}`,
          transform: 'rotate(-13deg)',
          transformOrigin: 'left center',
          opacity: (1 - clamp((frame - FIRE_FRAME) / 18, 0, 1)) * 0.35,
        }}
      />

      <Trail frame={frame} />

      {marbleVisible ? (
        <div
          style={{
            position: 'absolute',
            left: marble.x - MARBLE_RADIUS,
            top: marble.y - MARBLE_RADIUS,
            width: MARBLE_RADIUS * 2,
            height: MARBLE_RADIUS * 2,
            border: `5px solid ${COLORS.paper}`,
            borderRadius: '50%',
            background: `radial-gradient(circle at 35% 28%, #fff 0 8%, ${COLORS.orange} 25%, ${COLORS.red} 72%)`,
            boxShadow: `0 0 16px ${COLORS.orange}, 0 0 48px rgba(255,141,58,0.6)`,
          }}
        />
      ) : null}

      {Array.from({length: 7}, (_, index) => {
        const theta = (index / 7) * Math.PI * 2;
        const distance = impactFlash * (70 + index * 8);
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: IMPACT_POSITION.x + Math.cos(theta) * distance,
              top: IMPACT_POSITION.y + Math.sin(theta) * distance,
              width: 7,
              height: 28,
              borderRadius: 4,
              background: index % 2 === 0 ? COLORS.yellow : COLORS.paper,
              transform: `rotate(${theta}rad)`,
              opacity: impactFlash,
            }}
          />
        );
      })}

      {Array.from({length: 5}, (_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: 640 + index * 125,
            top: 500 + index * 18,
            width: 72,
            height: 4,
            borderRadius: 2,
            background: COLORS.orange,
            transform: 'rotate(-18deg)',
            opacity: frame >= FIRE_FRAME && frame < HIT_FRAME ? speedLinesOpacity : 0,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          left: 82,
          bottom: 66,
          fontSize: 22,
          color: COLORS.muted,
          fontWeight: 700,
        }}
      >
        45 DEGREE AIM / FADING TRAIL / ELASTIC IMPACT
      </div>
      <div
        style={{
          position: 'absolute',
          right: 84,
          bottom: 66,
          fontSize: 22,
          color: COLORS.paper,
          fontWeight: 900,
        }}
      >
        FRAME {String(frame).padStart(3, '0')} / 179
      </div>
    </AbsoluteFill>
  );
};
