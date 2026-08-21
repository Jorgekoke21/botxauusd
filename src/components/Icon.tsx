type IconName =
  | "brain"
  | "shield"
  | "chart"
  | "bolt"
  | "terminal"
  | "clock"
  | "sliders"
  | "target";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    brain: <><path d="M19 9a7 7 0 0 0-10 7 7 7 0 0 0-2 12 7 7 0 0 0 7 10h5V9Z"/><path d="M29 9a7 7 0 0 1 10 7 7 7 0 0 1 2 12 7 7 0 0 1-7 10h-5V9ZM14 18c3 0 5 2 5 5M12 31c4 0 7-2 7-6M34 18c-3 0-5 2-5 5M36 31c-4 0-7-2-7-6"/></>,
    shield: <><path d="M24 5 42 12v12c0 10-7 16-18 20C13 40 6 34 6 24V12l18-7Z"/><path d="m16 25 5 5 11-12"/></>,
    chart: <><path d="M8 40h33M11 35V24h7v11M22 35V16h7v19M33 35V8h7v27"/><path d="m9 18 9-6 8 3L39 6"/></>,
    bolt: <path d="M28 4 10 28h13l-3 16 18-25H25l3-15Z"/>,
    terminal: <><rect x="5" y="8" width="38" height="32" rx="5"/><path d="m13 18 6 6-6 6M24 31h11"/></>,
    clock: <><circle cx="24" cy="24" r="18"/><path d="M24 14v11l8 5"/></>,
    sliders: <><path d="M9 12h30M9 24h30M9 36h30"/><circle cx="18" cy="12" r="4" fill="currentColor"/><circle cx="31" cy="24" r="4" fill="currentColor"/><circle cx="22" cy="36" r="4" fill="currentColor"/></>,
    target: <><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3" fill="currentColor"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}
