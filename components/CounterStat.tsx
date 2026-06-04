"use client";
import { useEffect, useRef, useState } from "react";

/* Contador animado para las cifras destacadas. */
export default function CounterStat({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const dur = 1600;
        const start = performance.now();
        let raf = 0;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="nb-stat-value">
        {n.toLocaleString("es-MX")}
        {suffix}
      </div>
      <div className="nb-stat-label">{label}</div>
    </div>
  );
}
