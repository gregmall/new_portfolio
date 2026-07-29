'use client'

import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return <span>{time ?? "--:--"}</span>;
}

export function Version() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDate(`${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    };
    update();
  }, []);

  return <span>Version {date ?? "--.--.--"}</span>;
}

export function DynamicIsland({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-1/2 top-2.5 h-6 w-28 -translate-x-1/2 rounded-full bg-black ${className}`}
    />
  );
}

export function StatusBar() {
  return (
    <div className="relative z-10 flex items-center justify-between px-7 pb-1 pt-4 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
       <span className="text-sm font-semibold"><Clock /></span>
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 18 12" className="h-3 w-4" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" />
          <rect x="10" y="3" width="3" height="9" rx="0.5" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg viewBox="0 0 16 12" className="h-3 w-4" fill="currentColor">
          <path d="M8 10.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z" />
          <path d="M5 7.2a4.3 4.3 0 0 1 6 0L9.9 8.3a2.7 2.7 0 0 0-3.8 0L5 7.2Z" />
          <path d="M2.5 4.7a7.9 7.9 0 0 1 11 0L12.4 5.8a6.3 6.3 0 0 0-8.8 0L2.5 4.7Z" />
        </svg>
        <svg viewBox="0 0 26 12" className="h-3 w-6" fill="none" stroke="currentColor">
          <rect x="0.75" y="0.75" width="21.5" height="10.5" rx="2.5" strokeWidth="1" />
          <rect x="2.5" y="2.5" width="18" height="7" rx="1.3" fill="currentColor" stroke="none" />
          <path d="M23.5 4.2v3.6c.8-.3 1.3-1 1.3-1.8s-.5-1.5-1.3-1.8Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export function AppIcon({
  label,
  href,
  gradient,
  external = false,
  size = "grid",
  children,
}: {
  label?: string;
  href: string;
  gradient: string;
  external?: boolean;
  size?: "grid" | "dock";
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center gap-1.5 transition-transform active:scale-95"
    >
      <div
        className={`flex items-center justify-center rounded-[22%] text-white shadow-lg ${
          size === "dock" ? "h-14 w-14" : "h-16 w-16"
        }`}
        style={{ background: gradient }}
      >
        {children}
      </div>
      {label && (
        <span className="text-[11px] font-medium text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
          {label}
        </span>
      )}
    </a>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="px-1 text-xs font-semibold uppercase tracking-wide text-muted">
      {children}
    </h2>
  );
}

export function GroupedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`divide-y divide-border overflow-hidden rounded-2xl bg-card ${className}`}
    >
      {children}
    </div>
  );
}

export function Chevron() {
  return (
    <svg
      viewBox="0 0 8 14"
      className="h-3.5 w-2 shrink-0 text-muted"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 1l6 6-6 6" />
    </svg>
  );
}
