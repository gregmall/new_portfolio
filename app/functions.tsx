"use client";

import { useState, useEffect } from "react";

export function Rule({ className = "" }: { className?: string }) {
  return <span className={`h-0.75 flex-1 bg-foreground ${className}`} />;
}

export function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-4">
      <span className="font-display text-xl text-accent">{index}</span>
      <span className="text-sm font-bold uppercase tracking-[0.3em] text-foreground">
        {children}
      </span>
      <Rule />
    </h2>
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
    <div className={`brutal-border brutal-shadow bg-card ${className}`}>
      {children}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-foreground">
      {children}
    </span>
  );
}

export function PrintDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate = () => {
      setDate(`${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    };
    getDate();
  }, []);

  return <span>Printed {date ?? "--.--.--"}</span>;
}
