"use client";

import { useState, useEffect } from "react";

export function RevisionStamp() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate = () => {
      setDate(`${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    };
    getDate();
  }, []);

  return <span>REV. {date ?? "----.--.--"}</span>;
}

export function FigureLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-accent">
      <span>FIG.{index}</span>
      <span className="h-px flex-1 bg-border" />
      <span className="text-foreground">{children}</span>
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
    <div className={`relative border border-border bg-card ${className}`}>
      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-t-2 border-l-2 border-accent" />
      <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-t-2 border-r-2 border-accent" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-accent" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-accent" />
      {children}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}
