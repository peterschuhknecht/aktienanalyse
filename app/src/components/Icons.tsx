export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <rect width="34" height="34" rx="9" fill="url(#lg)" />
      <path
        d="M8 21.5l5.2-6.2 4.6 3.4 7.2-8.7"
        stroke="#EAFCFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 26h18"
        stroke="rgba(234,252,255,0.45)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="34" y2="34">
          <stop stopColor="#1E93A3" />
          <stop offset="1" stopColor="#0F5763" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2.5v9M2.5 7h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M3.2 2.1v8.8c0 .5.55.8.97.54l6.9-4.4a.64.64 0 000-1.08l-6.9-4.4a.64.64 0 00-.97.54z" fill="currentColor" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1.8v7m0 0L4.2 6M7 8.8L9.8 6M2.2 11.5h9.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M14.2 1.8L7 9M14.2 1.8l-4.6 12.6-2.6-5.4L1.6 6.4l12.6-4.6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M3 19h16M5 15l4-5 3.5 2.5L18 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
