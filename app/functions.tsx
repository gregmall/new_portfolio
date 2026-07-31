"use client";

import { useState, useEffect } from "react";

export function EditionDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate = () => {
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };
    getDate();
  }, []);

  return <span>{date ?? "Loading edition…"}</span>;
}

export function DoubleRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[3px] ${className}`}>
      <div className="h-[3px] bg-foreground" />
      <div className="h-px bg-foreground" />
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export function Byline({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase italic tracking-widest text-muted">
      {children}
    </p>
  );
}

export function SectionBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground px-4 py-2 text-center font-display text-sm uppercase tracking-[0.3em] text-background">
      {children}
    </div>
  );
}

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-y-2 border-foreground py-5 text-center font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
      {children}
    </blockquote>
  );
}
