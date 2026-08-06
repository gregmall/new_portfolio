"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export function Clock() {
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

export function DateLabel() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate = () => {
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
    };
    getDate();
  }, []);

  return <span>{date ?? "--- -- --"}</span>;
}

const navItems = [
  { to: "about", label: "about" },
  { to: "projects", label: "projects" },
  { to: "skills", label: "skills" },
  { to: "contact", label: "contact" },
];

export function PromptBar() {
  return (
    <div className="terminal fixed inset-x-0 top-0 z-40 flex h-11 items-center justify-between border-b border-white/10 bg-background/90 px-4 text-[13px] backdrop-blur">
      <div className="flex items-center gap-1.5">
        <span className="text-accent">guest@greg-mall</span>
        <span className="text-muted">:~$</span>
        <span className="ml-0.5 h-4 w-[7px] cursor-blink bg-accent" />
      </div>
      <nav className="hidden items-center gap-5 sm:flex">
        {navItems.map((item) => (
          <ScrollLink
            key={item.to}
            to={item.to}
            smooth
            duration={400}
            offset={-56}
            spy
            activeClass="text-accent"
            className="cursor-pointer text-muted transition-colors hover:text-accent"
          >
            --{item.label}
          </ScrollLink>
        ))}
      </nav>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-7 items-center justify-between border-t border-white/10 bg-background/95 px-3 text-[11px]">
      <div className="flex items-center gap-2">
        <span className="bg-accent px-2 py-0.5 font-semibold text-background">
          NORMAL
        </span>
        <span className="hidden text-muted sm:inline">portfolio.tsx</span>
      </div>
      <div className="flex items-center gap-3 text-muted">
        <span className="hidden sm:inline">UTF-8</span>
        <DateLabel />
        <Clock />
      </div>
    </div>
  );
}

export function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`terminal overflow-hidden rounded-lg ${className}`}>
      <div className="flex items-center gap-2.5 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="text-xs text-muted">{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded border border-accent/25 bg-accent/10 px-2 py-0.5 text-[11px] text-accent ${className}`}
    >
      {children}
    </span>
  );
}
