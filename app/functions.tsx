const bubbles = [
  { left: "8%", size: 6, duration: "7s", delay: "0s" },
  { left: "22%", size: 4, duration: "9s", delay: "1.5s" },
  { left: "40%", size: 8, duration: "6s", delay: "0.5s" },
  { left: "58%", size: 5, duration: "8s", delay: "2.5s" },
  { left: "74%", size: 7, duration: "10s", delay: "1s" },
  { left: "88%", size: 4, duration: "7.5s", delay: "3s" },
];

export function Bubbles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
    >
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble absolute bottom-0 rounded-full border border-accent/40 bg-accent/10"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}

export function Jellyfish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className}>
      <path
        d="M10,38 C10,10 30,2 50,2 C70,2 90,10 90,38 C90,48 78,46 70,50 C62,54 58,44 50,44 C42,44 38,54 30,50 C22,46 10,48 10,38 Z"
        fill="url(#jelly-glow)"
        opacity="0.85"
      />
      <g
        fill="none"
        stroke="url(#jelly-glow)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      >
        <path d="M30,50 Q26,70 32,90 Q36,105 30,120" />
        <path d="M45,52 Q42,72 48,92 Q52,108 46,125" />
        <path d="M55,52 Q58,72 52,92 Q48,108 54,125" />
        <path d="M70,50 Q74,70 68,90 Q64,105 70,120" />
      </g>
    </svg>
  );
}

export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0,10 Q20,0 40,10 T80,10 T120,10 T160,10 T200,10 T240,10 T280,10 T320,10 T360,10 T400,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
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
    <div
      className={`rounded-2xl border border-border bg-card/80 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-display text-xl font-semibold tracking-wide text-foreground">
      <span className="h-2 w-2 rounded-full bg-accent" />
      {children}
      <WaveDivider className="h-3 flex-1 text-accent/40" />
    </h2>
  );
}