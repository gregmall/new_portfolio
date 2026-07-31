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

  return <span>{date ?? "----.--.--"}</span>;
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-accent/40" />
      <span className="text-xs text-accent">&#9670;</span>
      <span className="h-px flex-1 bg-accent/40" />
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-border" />
      <h2 className="whitespace-nowrap text-xs uppercase tracking-[0.4em] text-accent">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-accent/25 p-1.5 ${className}`}>
      <div className="flex h-full flex-col border border-accent/70 bg-card">
        {children}
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted">
      {children}
    </span>
  );
}

export function Sunburst({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 17 });
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {rays.map((_, i) => {
        const angle = (Math.PI / (rays.length - 1)) * i;
        const x2 = 100 + 98 * Math.cos(angle);
        const y2 = 100 - 98 * Math.sin(angle);
        return <line key={i} x1="100" y1="100" x2={x2} y2={y2} />;
      })}
    </svg>
  );
}
