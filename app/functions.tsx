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

export function MenuBar() {
  return (
    <div className="glass fixed inset-x-0 top-0 z-40 flex h-8 items-center justify-between px-4 text-[13px] font-medium text-foreground">
      <div className="flex items-center gap-4">
        <span className="font-semibold">Greg Mall</span>
        <span className="hidden cursor-default text-muted sm:inline">File</span>
        <span className="hidden cursor-default text-muted sm:inline">Edit</span>
        <span className="hidden cursor-default text-muted sm:inline">View</span>
        <span className="hidden cursor-default text-muted sm:inline">Window</span>
        <span className="hidden cursor-default text-muted sm:inline">Help</span>
      </div>
      <div className="flex items-center gap-3 text-muted">
        <span className="hidden sm:inline">
          <DateLabel />
        </span>
        <Clock />
      </div>
    </div>
  );
}

export function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
    </div>
  );
}

export function Window({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass overflow-hidden rounded-[22px] ${className}`}>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-white/10 px-5 py-3">
        <TrafficLights />
        <span className="text-center text-xs font-medium text-muted">
          {title}
        </span>
        <span className="w-12" />
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium text-foreground ${className}`}
    >
      {children}
    </span>
  );
}

export function Dock({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <div className="glass flex items-end gap-4 rounded-[26px] px-4 py-3">
        {children}
      </div>
    </div>
  );
}

export function DockIcon({
  to,
  label,
  gradient,
  children,
}: {
  to: string;
  label: string;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollLink
      to={to}
      smooth
      duration={400}
      offset={-40}
      aria-label={label}
      className="group relative flex cursor-pointer flex-col items-center gap-1.5"
    >
      <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-1 text-[11px] text-background opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
        {label}
      </span>
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-200 ease-out group-hover:-translate-y-3 group-hover:scale-125"
        style={{ background: gradient }}
      >
        {children}
      </span>
      <span className="h-1 w-1 rounded-full bg-foreground/40" />
    </ScrollLink>
  );
}
