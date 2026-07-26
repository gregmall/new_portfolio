const invaderPattern = [
  "00100000100",
  "00010001000",
  "00111111100",
  "01101110110",
  "11111111111",
  "10111111101",
  "10100000101",
  "00011011000",
];

export function Invader({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 11 8"
      shapeRendering="crispEdges"
      fill="currentColor"
      className={className}
    >
      {invaderPattern.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "1" ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null
        )
      )}
    </svg>
  );
}

export function PixelRule({ className = "" }: { className?: string }) {
  return (
    <span
      className={`h-1 flex-1 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, var(--accent) 0 6px, transparent 6px 12px)",
      }}
    />
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
      className={`pixel-frame pixel-shadow border-2 border-accent bg-card ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-display text-sm tracking-wide text-foreground">
      <Invader className="h-4 w-5 text-accent-2" />
      {children}
      <PixelRule />
    </h2>
  );
}
