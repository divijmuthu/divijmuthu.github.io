"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

/* ------------------------------------------------------------------ */
/* Time-of-day water palette (soft / pastel)                           */
/* ------------------------------------------------------------------ */

type RGB = [number, number, number];

interface WaterPalette {
  waterTop: RGB;
  waterBot: RGB;
  stroke: RGB;
  strokeAlpha: number;
  sky: RGB;
  horizon: RGB;
  body: RGB; // sun / moon tint
  cloud: RGB;
}

interface WaterStop extends WaterPalette {
  t: number;
}

// Morning leans seafoam-green, midday pastel blue, then warm dusk and soft night.
const WATER_STOPS: WaterStop[] = [
  {
    t: 0.0,
    waterTop: [180, 226, 212],
    waterBot: [124, 198, 182],
    stroke: [236, 251, 246],
    strokeAlpha: 0.085,
    sky: [156, 214, 202],
    horizon: [208, 237, 230],
    body: [255, 238, 180],
    cloud: [250, 254, 252],
  },
  {
    t: 0.26,
    waterTop: [184, 224, 243],
    waterBot: [136, 198, 230],
    stroke: [246, 252, 255],
    strokeAlpha: 0.085,
    sky: [162, 212, 240],
    horizon: [216, 239, 251],
    body: [255, 241, 184],
    cloud: [255, 255, 255],
  },
  {
    t: 0.5,
    waterTop: [248, 200, 164],
    waterBot: [230, 154, 124],
    stroke: [255, 244, 230],
    strokeAlpha: 0.1,
    sky: [250, 200, 156],
    horizon: [255, 220, 182],
    body: [255, 170, 100],
    cloud: [252, 226, 204],
  },
  {
    t: 0.72,
    waterTop: [152, 132, 174],
    waterBot: [100, 90, 146],
    stroke: [228, 214, 240],
    strokeAlpha: 0.11,
    sky: [124, 108, 162],
    horizon: [186, 146, 172],
    body: [232, 222, 244],
    cloud: [154, 138, 172],
  },
  {
    t: 1.0,
    waterTop: [42, 62, 102],
    waterBot: [22, 36, 68],
    stroke: [144, 184, 226],
    strokeAlpha: 0.12,
    sky: [26, 40, 70],
    horizon: [46, 66, 108],
    body: [232, 238, 250],
    cloud: [62, 78, 116],
  },
];

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const lerpRGB = (a: RGB, b: RGB, k: number): RGB => [
  lerp(a[0], b[0], k),
  lerp(a[1], b[1], k),
  lerp(a[2], b[2], k),
];

function interpStops<T extends { t: number }>(
  stops: T[],
  t: number,
  blend: (lo: T, hi: T, k: number) => Omit<T, "t">
) {
  const clamped = Math.max(0, Math.min(1, t));
  let lo = stops[0];
  let hi = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (clamped >= stops[i].t && clamped <= stops[i + 1].t) {
      lo = stops[i];
      hi = stops[i + 1];
      break;
    }
  }
  const span = hi.t - lo.t || 1;
  return blend(lo, hi, (clamped - lo.t) / span);
}

function waterPaletteAt(t: number): WaterPalette {
  return interpStops(WATER_STOPS, t, (lo, hi, k) => ({
    waterTop: lerpRGB(lo.waterTop, hi.waterTop, k),
    waterBot: lerpRGB(lo.waterBot, hi.waterBot, k),
    stroke: lerpRGB(lo.stroke, hi.stroke, k),
    strokeAlpha: lerp(lo.strokeAlpha, hi.strokeAlpha, k),
    sky: lerpRGB(lo.sky, hi.sky, k),
    horizon: lerpRGB(lo.horizon, hi.horizon, k),
    body: lerpRGB(lo.body, hi.body, k),
    cloud: lerpRGB(lo.cloud, hi.cloud, k),
  }));
}

/* ------------------------------------------------------------------ */
/* UI palette — smoothly interpolated card / text / chrome colors      */
/* ------------------------------------------------------------------ */

interface UIPalette {
  bg: RGB;
  sidebar: RGB;
  item: RGB;
  border: RGB;
  itemBorder: RGB;
  accent: RGB;
  sectionA: number;
}

interface UIStop extends UIPalette {
  t: number;
}

// Readable surfaces (cards / sidebar) stay light-with-dark-text through dusk,
// then hand off to dark-with-light-text over a short band (0.80 -> 0.86).
// Ambient values (page bg, accents) glide continuously the whole way.
const UI_STOPS: UIStop[] = [
  {
    t: 0.0,
    bg: [234, 245, 242],
    sidebar: [255, 255, 255],
    item: [255, 255, 255],
    border: [206, 228, 222],
    itemBorder: [16, 40, 34],
    accent: [34, 150, 138],
    sectionA: 0.34,
  },
  {
    t: 0.26,
    bg: [233, 244, 251],
    sidebar: [255, 255, 255],
    item: [255, 255, 255],
    border: [212, 230, 240],
    itemBorder: [15, 23, 42],
    accent: [47, 111, 151],
    sectionA: 0.34,
  },
  {
    t: 0.5,
    bg: [246, 226, 208],
    sidebar: [255, 247, 240],
    item: [255, 248, 242],
    border: [224, 188, 162],
    itemBorder: [120, 64, 32],
    accent: [196, 104, 48],
    sectionA: 0.36,
  },
  {
    t: 0.72,
    bg: [222, 206, 226],
    sidebar: [244, 236, 246],
    item: [244, 236, 247],
    border: [206, 186, 214],
    itemBorder: [86, 64, 108],
    accent: [126, 94, 164],
    sectionA: 0.4,
  },
  {
    t: 0.8,
    bg: [186, 174, 206],
    sidebar: [226, 218, 234],
    item: [228, 220, 236],
    border: [186, 168, 200],
    itemBorder: [96, 78, 120],
    accent: [120, 104, 176],
    sectionA: 0.42,
  },
  {
    t: 0.86,
    bg: [48, 52, 86],
    sidebar: [42, 48, 74],
    item: [46, 52, 80],
    border: [84, 90, 130],
    itemBorder: [120, 130, 170],
    accent: [150, 172, 222],
    sectionA: 0.42,
  },
  {
    t: 1.0,
    bg: [16, 28, 52],
    sidebar: [22, 36, 59],
    item: [24, 38, 62],
    border: [51, 65, 90],
    itemBorder: [80, 96, 134],
    accent: [158, 201, 230],
    sectionA: 0.36,
  },
];

const FG_DARK: RGB = [34, 32, 40];
const FG_LIGHT: RGB = [237, 241, 248];

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const k = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return k * k * (3 - 2 * k);
};

function uiPaletteAt(t: number) {
  const p = interpStops(UI_STOPS, t, (lo, hi, k) => ({
    bg: lerpRGB(lo.bg, hi.bg, k),
    sidebar: lerpRGB(lo.sidebar, hi.sidebar, k),
    item: lerpRGB(lo.item, hi.item, k),
    border: lerpRGB(lo.border, hi.border, k),
    itemBorder: lerpRGB(lo.itemBorder, hi.itemBorder, k),
    accent: lerpRGB(lo.accent, hi.accent, k),
    sectionA: lerp(lo.sectionA, hi.sectionA, k),
  }));
  // Text flips dark -> light in lockstep with the card hand-off so contrast
  // stays high on both sides; the short eased band reads as a natural dusk.
  const fg = lerpRGB(FG_DARK, FG_LIGHT, smoothstep(0.8, 0.86, t));
  return { ...p, fg };
}

const rgb = (c: RGB) =>
  `rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`;
const rgba = (c: RGB, a: number) =>
  `rgba(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])}, ${a})`;

function phaseFor(t: number): "light" | "evening" | "dark" {
  return t < 0.45 ? "light" : t < 0.83 ? "evening" : "dark";
}

/* ------------------------------------------------------------------ */
/* Perlin noise (compact, dependency-free)                             */
/* ------------------------------------------------------------------ */

const perm = new Uint8Array(512);
(function seedPerlin() {
  const p = Array.from({ length: 256 }, (_, i) => i);
  let seed = 1337;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
})();

const fadeN = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
function grad3(hash: number, x: number, y: number, z: number) {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

function noise3(x: number, y: number, z: number) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;
  x -= Math.floor(x);
  y -= Math.floor(y);
  z -= Math.floor(z);
  const u = fadeN(x);
  const v = fadeN(y);
  const w = fadeN(z);
  const A = perm[X] + Y;
  const AA = perm[A] + Z;
  const AB = perm[A + 1] + Z;
  const B = perm[X + 1] + Y;
  const BA = perm[B] + Z;
  const BB = perm[B + 1] + Z;

  return lerp(
    lerp(
      lerp(grad3(perm[AA], x, y, z), grad3(perm[BA], x - 1, y, z), u),
      lerp(grad3(perm[AB], x, y - 1, z), grad3(perm[BB], x - 1, y - 1, z), u),
      v
    ),
    lerp(
      lerp(grad3(perm[AA + 1], x, y, z - 1), grad3(perm[BA + 1], x - 1, y, z - 1), u),
      lerp(grad3(perm[AB + 1], x, y - 1, z - 1), grad3(perm[BB + 1], x - 1, y - 1, z - 1), u),
      v
    ),
    w
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

interface Particle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
}

function readInitialT(): number {
  if (typeof window === "undefined") return 0.22;
  const stored = parseFloat(localStorage.getItem("timeOfDay") || "");
  if (!Number.isNaN(stored)) return Math.max(0, Math.min(1, stored));
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? 0.9 : 0.2;
}

interface TimeOfDayContextValue {
  t: number;
  applyT: (next: number) => void;
}

const TimeOfDayContext = createContext<TimeOfDayContextValue | null>(null);

function useTimeOfDay() {
  const ctx = useContext(TimeOfDayContext);
  if (!ctx) {
    throw new Error("useTimeOfDay must be used within AmbientProvider");
  }
  return ctx;
}

export default function AmbientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [t, setT] = useState<number>(0.22);
  const tRef = useRef(0.22);

  const applyT = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(1, next));
    tRef.current = clamped;
    setT(clamped);
    const el = document.documentElement;
    el.dataset.theme = phaseFor(clamped);
    el.style.setProperty("--time-of-day", String(clamped));

    const ui = uiPaletteAt(clamped);
    el.style.setProperty("--background", rgb(ui.bg));
    el.style.setProperty("--sidebar-bg", rgb(ui.sidebar));
    el.style.setProperty("--item-bg", rgb(ui.item));
    el.style.setProperty("--section-bg", rgba(ui.item, ui.sectionA));
    el.style.setProperty("--border-color", rgba(ui.border, 0.8));
    el.style.setProperty("--item-border", rgba(ui.itemBorder, 0.18));
    el.style.setProperty("--accent", rgb(ui.accent));
    el.style.setProperty("--foreground", rgb(ui.fg));

    try {
      localStorage.setItem("timeOfDay", String(clamped));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    applyT(readInitialT());
  }, [applyT]);

  /* ----- Water flow-field animation ----- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    const shown = { ...waterPaletteAt(tRef.current) };

    const spawn = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      life: 0,
      maxLife: 120 + Math.random() * 260,
    });

    const paintBase = (alpha: number) => {
      const grad = ctx.createLinearGradient(0, 0, width * 0.25, height);
      grad.addColorStop(0, rgba(shown.waterTop, alpha));
      grad.addColorStop(1, rgba(shown.waterBot, alpha));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const targetCount = Math.min(820, Math.floor((width * height) / 6500));
      particles = Array.from({ length: targetCount }, () => spawn());
      paintBase(1);
    };

    const NOISE_SCALE = 0.0016;
    const SPEED = 0.55;
    let time = 0;
    let raf = 0;

    const advance = (fadeAlpha: number) => {
      paintBase(fadeAlpha);
      ctx.lineWidth = 1.3;
      ctx.lineCap = "round";
      ctx.strokeStyle = rgba(shown.stroke, shown.strokeAlpha);
      ctx.beginPath();
      for (const p of particles) {
        const angle =
          noise3(p.x * NOISE_SCALE, p.y * NOISE_SCALE, time) * Math.PI * 2.2;
        const nx = p.x + Math.cos(angle) * SPEED;
        const ny = p.y + Math.sin(angle) * SPEED;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        p.x = nx;
        p.y = ny;
        p.life += 1;
        if (
          p.life > p.maxLife ||
          p.x < -10 ||
          p.x > width + 10 ||
          p.y < -10 ||
          p.y > height + 10
        ) {
          const fresh = spawn();
          p.x = fresh.x;
          p.y = fresh.y;
          p.life = 0;
          p.maxLife = fresh.maxLife;
        }
      }
      ctx.stroke();
      time += 0.0011;
    };

    const step = () => {
      const target = waterPaletteAt(tRef.current);
      const ease = 0.04;
      shown.waterTop = lerpRGB(shown.waterTop, target.waterTop, ease);
      shown.waterBot = lerpRGB(shown.waterBot, target.waterBot, ease);
      shown.stroke = lerpRGB(shown.stroke, target.stroke, ease);
      shown.strokeAlpha = lerp(shown.strokeAlpha, target.strokeAlpha, ease);
      advance(0.038);
      raf = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      for (let i = 0; i < 220; i++) advance(0.038);
    } else {
      raf = requestAnimationFrame(step);
    }

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduceMotion) raf = requestAnimationFrame(step);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <TimeOfDayContext.Provider value={{ t, applyT }}>
      <canvas
        ref={canvasRef}
        className="ambient-canvas pointer-events-none fixed inset-0 -z-10 h-full w-full"
        aria-hidden
      />
      {children}
    </TimeOfDayContext.Provider>
  );
}

export function SkyBand() {
  const { t, applyT } = useTimeOfDay();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const releaseDrag = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointerup", releaseDrag);
    window.addEventListener("pointercancel", releaseDrag);
    return () => {
      window.removeEventListener("pointerup", releaseDrag);
      window.removeEventListener("pointercancel", releaseDrag);
    };
  }, []);

  // Evenly spaced beads along the bar (Pikmin-style day markers).
  const markerCount = 9;
  const markerPositions = Array.from(
    { length: markerCount },
    (_, i) => i / (markerCount - 1)
  );

  const tFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return null;
    const rect = track.getBoundingClientRect();
    if (rect.width <= 0) return null;
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }, []);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const next = tFromClientX(clientX);
      if (next != null) applyT(next);
    },
    [applyT, tFromClientX]
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      applyT(t + 0.04);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      applyT(t - 0.04);
    } else if (e.key === "Home") {
      applyT(0);
    } else if (e.key === "End") {
      applyT(1);
    }
  };

  const pal = waterPaletteAt(t);
  const sunOpacity = 1 - smoothstep(0.5, 0.74, t);
  const moonOpacity = smoothstep(0.62, 0.82, t);
  const phaseLabel = phaseFor(t);
  const orbFill =
    t < 0.55
      ? rgba([255, 196, 110], 0.92)
      : t < 0.78
      ? rgba([255, 170, 120], 0.88)
      : rgba([210, 220, 245], 0.9);

  return (
    <div
      className="ambient-band pointer-events-none relative z-[1] w-full shrink-0 overflow-visible pb-3"
      style={{
        background: [
          /* Fade in from the left so the column edge blends into the sidebar. */
          `linear-gradient(90deg, transparent 0%, ${rgba(pal.sky, 0.1)} 8%, ${rgba(
            pal.sky,
            0.45
          )} 20%, ${rgba(pal.sky, 0.58)} 100%)`,
          /* Long vertical feather — no hard cutoff at the bottom edge. */
          `linear-gradient(180deg, ${rgba(pal.sky, 0.58)} 0%, ${rgba(
            pal.horizon,
            0.32
          )} 42%, ${rgba(pal.horizon, 0.1)} 68%, transparent 100%)`,
        ].join(", "),
      }}
    >
      <div className="relative h-[clamp(56px,8vh,76px)]">
      {/* Soft cloud layer behind the bar */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: "8%", top: "18%", w: 180, h: 36, o: 0.55, d: "44s" },
          { left: "32%", top: "8%", w: 240, h: 44, o: 0.48, d: "58s" },
          { left: "58%", top: "22%", w: 200, h: 38, o: 0.52, d: "50s" },
          { left: "78%", top: "10%", w: 160, h: 32, o: 0.45, d: "62s" },
        ].map((c, i) => (
          <div
            key={i}
            className="ambient-cloud absolute rounded-full"
            style={{
              left: c.left,
              top: c.top,
              width: c.w,
              height: c.h,
              opacity: c.o,
              background: `radial-gradient(ellipse at center, ${rgba(
                pal.cloud,
                0.95
              )} 0%, ${rgba(pal.cloud, 0.55)} 50%, ${rgba(pal.cloud, 0)} 78%)`,
              filter: "blur(10px)",
              animationDuration: c.d,
            }}
          />
        ))}
      </div>

      {/* Pikmin-style day track: thin bar + bead markers + glowing orb */}
      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-label="Time of day"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(t * 100)}
        aria-valuetext={phaseLabel}
        onKeyDown={onKey}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="pointer-events-auto absolute inset-x-[8%] top-1/2 z-[1] h-10 w-auto -translate-y-1/2 cursor-grab touch-none active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:inset-x-[12%]"
      >
        {/* Thin connecting bar */}
        <div
          className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background: `linear-gradient(90deg, ${rgba(
              [255, 255, 255],
              0.25
            )} 0%, ${rgba([255, 255, 255], 0.55)} 50%, ${rgba(
              [255, 255, 255],
              0.25
            )} 100%)`,
          }}
        />

        {/* Marker beads strung on the bar */}
        {markerPositions.map((pos, i) => (
          <span
            key={i}
            className="pointer-events-none absolute top-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45"
            style={{
              left: `${pos * 100}%`,
              width: 9,
              height: 9,
              background: `radial-gradient(circle at 35% 30%, ${rgba(
                [255, 255, 255],
                0.75
              )} 0%, ${rgba([255, 255, 255], 0.22)} 100%)`,
              boxShadow: `inset 0 1px 2px ${rgba([255, 255, 255], 0.5)}`,
            }}
            aria-hidden
          />
        ))}

        {/* Active time orb (sun / moon) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full sm:h-8 sm:w-8"
          style={{
            left: `${t * 100}%`,
            background: `radial-gradient(circle at 38% 32%, ${orbFill} 0%, ${rgba(
              pal.body,
              0.55
            )} 100%)`,
            boxShadow: `0 0 14px ${rgba(pal.body, 0.75)}, 0 0 4px ${rgba(
              [255, 255, 255],
              0.6
            )}`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="relative h-4 w-4 sm:h-[18px] sm:w-[18px]"
            fill="none"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth={1.6}
            strokeLinecap="round"
          >
            <g opacity={sunOpacity}>
              <circle cx="12" cy="12" r="3.2" fill="rgba(255,255,255,0.9)" stroke="none" />
              {Array.from({ length: 8 }).map((_, i) => {
                const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
                return (
                  <line
                    key={i}
                    x1={12 + Math.cos(a) * 5.2}
                    y1={12 + Math.sin(a) * 5.2}
                    x2={12 + Math.cos(a) * 7}
                    y2={12 + Math.sin(a) * 7}
                  />
                );
              })}
            </g>
            <g opacity={moonOpacity}>
              <path
                d="M15.8 12.4A5.2 5.2 0 1 1 11.2 7.4a4 4 0 0 0 4.6 5z"
                fill="rgba(255,255,255,0.92)"
                stroke="none"
              />
            </g>
          </svg>
        </div>
      </div>
      </div>
    </div>
  );
}
