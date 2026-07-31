"use client";

import { useState, useEffect } from "react";

export function LastUpdated() {
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

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="inline-flex items-center gap-2 self-start rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted neu-inset">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </h2>
  );
}

export function NeuCard({
  children,
  className = "",
  as = "div",
  href,
  external = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "a";
  href?: string;
  external?: boolean;
}) {
  const classes = `neu-raised neu-press flex flex-col rounded-[2rem] bg-card ${className}`;

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function NeuIconTile({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`neu-raised-sm flex shrink-0 items-center justify-center rounded-2xl bg-card text-accent ${className}`}
    >
      {children}
    </div>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="neu-inset rounded-full bg-card px-3 py-1 text-[11px] font-medium text-muted">
      {children}
    </span>
  );
}
