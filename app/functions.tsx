'use client'

import { useState, useEffect } from 'react'

export function Version() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate=()=>{
    setDate(`${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    }
    getDate()
  }, []);

  return <span>Version {date ?? "--.--.--"}</span>;
}

export function GlowField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-accent-2/20 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
      {children}
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted">
      {children}
    </span>
  );
}

export function GlassCard({
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
  const classes = `group relative flex flex-col rounded-3xl border border-border bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] ${className}`;

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

export function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8h9M8.5 4l4 4-4 4" />
    </svg>
  );
}

export function SocialButton({
  href,
  label,
  gradient,
  children,
}: {
  href: string;
  label: string;
  gradient: string;
  children: React.ReactNode;
}) {
  const external = !href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center gap-2"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white/5 text-white backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/25">
        <span
          className="absolute inset-0 rounded-2xl opacity-70"
          style={{ background: gradient }}
        />
        <span className="relative">{children}</span>
      </span>
      <span className="text-xs text-muted">{label}</span>
    </a>
  );
}
