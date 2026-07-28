"use client";

import { useEffect, useState } from "react";

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

export function TitleBarButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="win-raised win-btn flex h-[18px] w-[18px] items-center justify-center text-[10px] font-bold leading-none text-black"
    >
      {children}
    </button>
  );
}

export function StartFlag() {
  return (
    <span className="grid h-3 w-3 grid-cols-2 grid-rows-2 gap-[1px]">
      <span className="bg-red-600" />
      <span className="bg-green-600" />
      <span className="bg-blue-600" />
      <span className="bg-yellow-400" />
    </span>
  );
}

export function WinWindow({
  title,
  icon = "🗂️",
  children,
  className = "",
  bodyClassName = "",
  id,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`win-raised scroll-mt-4 ${className}`}>
      <div className="flex items-center justify-between gap-2 bg-linear-to-r from-titlebar-from to-titlebar-to px-1.5 py-1 text-titlebar-text">
        <span className="flex min-w-0 items-center gap-1.5 truncate text-xs font-bold sm:text-sm">
          <span>{icon}</span>
          <span className="truncate">{title}</span>
        </span>
        <div className="flex gap-1">
          <TitleBarButton>_</TitleBarButton>
          <TitleBarButton>▢</TitleBarButton>
          <TitleBarButton>✕</TitleBarButton>
        </div>
      </div>
      <div className={`win-sunken m-2 bg-white p-4 text-black ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}

export function DesktopIcon({
  label,
  href,
  external = false,
  children,
}: {
  label: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const content = (
    <div className="flex w-20 flex-col items-center gap-1 rounded p-1.5 text-center hover:bg-white/10 active:bg-white/20">
      <div className="h-9 w-9">{children}</div>
      <span className="text-xs text-white [text-shadow:1px_1px_1px_rgba(0,0,0,0.6)]">
        {label}
      </span>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {content}
    </a>
  );
}
