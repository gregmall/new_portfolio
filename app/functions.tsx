"use client";

import { useState, useEffect } from "react";

export function DateStamp() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate = () => {
      setDate(`${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    };
    getDate();
  }, []);

  return <span>TAPE NO. {date ?? "----.--.--"}</span>;
}

export function Screw({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" className={className} fill="none">
      <circle cx="5" cy="5" r="4" fill="currentColor" opacity="0.6" />
      <line
        x1="2.5"
        y1="3.5"
        x2="7.5"
        y2="6.5"
        stroke="var(--background)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export function RackPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rack-panel relative border border-border bg-card ${className}`}
    >
      <Screw className="absolute left-2 top-2 h-2.5 w-2.5 text-border" />
      <Screw className="absolute right-2 top-2 h-2.5 w-2.5 text-border" />
      <Screw className="absolute bottom-2 left-2 h-2.5 w-2.5 text-border" />
      <Screw className="absolute bottom-2 right-2 h-2.5 w-2.5 text-border" />
      {children}
    </div>
  );
}

const meterZones = [
  "#3ddc84",
  "#3ddc84",
  "#3ddc84",
  "#3ddc84",
  "#3ddc84",
  "#3ddc84",
  "#e8a33d",
  "#e8a33d",
  "#ff3b30",
  "#ff3b30",
];

export function LevelMeter({
  level = 7,
  className = "",
}: {
  level?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-end gap-0.5 ${className}`}>
      {meterZones.map((color, i) => (
        <span
          key={i}
          className={i === level - 1 ? "meter-live rounded-[1px]" : "rounded-[1px]"}
          style={{
            width: "4px",
            height: `${8 + i * 2}px`,
            background: color,
            opacity: i < level ? 1 : 0.15,
          }}
        />
      ))}
    </div>
  );
}

export function Waveform({ className = "" }: { className?: string }) {
  const heights = [
    4, 8, 14, 6, 18, 10, 20, 7, 16, 9, 22, 5, 13, 17, 6, 11, 19, 8, 15, 4, 12,
    20, 7, 14, 9, 18, 5, 16, 10, 6,
  ];
  return (
    <div className={`flex items-center gap-[3px] ${className}`}>
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-[2px] shrink-0 rounded-full bg-border"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

export function SectionHeading({
  tag,
  children,
}: {
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="border border-border bg-background px-2 py-1 font-display text-[10px] uppercase tracking-widest text-accent-2">
        {tag}
      </span>
      <h2 className="font-display text-sm uppercase tracking-[0.35em] text-foreground">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}
