"use client";

import { useState, useEffect } from "react";

export function IssueStamp() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const getDate = () => {
      setDate(`${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`);
    };
    getDate();
  }, []);

  return <span>No. {date ?? "----.--.--"}</span>;
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
      {children}
    </p>
  );
}

export function IndexRow({
  index,
  title,
  meta,
  description,
  href,
}: {
  index: string;
  title: string;
  meta: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 py-6"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline">
        <div className="flex items-baseline gap-3 sm:contents">
          <span className="font-serif text-sm text-accent-2">{index}</span>
          <span className="font-serif text-lg text-foreground transition-colors group-hover:text-accent sm:mx-3">
            {title}
          </span>
        </div>
        <span className="leader hidden sm:block" />
        <span className="pl-8 text-[11px] uppercase tracking-widest text-muted sm:whitespace-nowrap sm:pl-0">
          {meta}
        </span>
      </div>
      <p className="max-w-xl text-sm leading-6 text-muted">{description}</p>
    </a>
  );
}

export function SkillLine({
  category,
  items,
}: {
  category: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-1 py-5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        {category}
      </p>
      <p className="font-serif text-lg italic text-foreground">
        {items.join(", ")}
      </p>
    </div>
  );
}
