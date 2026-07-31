"use client";

import { useState, useEffect } from "react";

export function StatUpdate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate = () => {
      setDate(`${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    };
    getDate();
  }, []);

  return <span>Updated {date ?? "--.--.--"}</span>;
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="comic-title font-display text-3xl tracking-wide text-foreground sm:text-4xl">
      {children}
    </h2>
  );
}

export function Panel({
  children,
  className = "",
  shadow = "red",
}: {
  children: React.ReactNode;
  className?: string;
  shadow?: "red" | "blue";
}) {
  return (
    <div
      className={`comic-border ${
        shadow === "blue" ? "comic-shadow-blue" : "comic-shadow"
      } rounded-2xl bg-card ${className}`}
    >
      {children}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="comic-border rounded-full bg-accent-2 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
      {children}
    </span>
  );
}

export function IconBadge({
  color = "var(--accent)",
  className = "",
  children,
}: {
  color?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`comic-border flex shrink-0 items-center justify-center rounded-full text-white ${className}`}
      style={{ background: color }}
    >
      {children}
    </div>
  );
}
