export default function ShieldCheck({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 36 36"
        className={className}
      >
        <path
          fill="currentColor"
          d="M31.25 7.4a44 44 0 0 1-6.62-2.35a45 45 0 0 1-6.08-3.21L18 1.5l-.54.35a45 45 0 0 1-6.08 3.21A44 44 0 0 1 4.75 7.4L4 7.59v8.34c0 13.39 13.53 18.4 13.66 18.45l.34.12l.34-.12c.14 0 13.66-5.05 13.66-18.45V7.59ZM30 15.93c0 11-10 15.61-12 16.43c-2-.82-12-5.44-12-16.43V9.14a47.5 47.5 0 0 0 6.18-2.25a48 48 0 0 0 5.82-3a48 48 0 0 0 5.82 3A47.5 47.5 0 0 0 30 9.14Z"
          className="clr-i-outline clr-i-outline-path-1"
        ></path>
        <path
          fill="currentColor"
          d="M10.88 16.87a1 1 0 0 0-1.41 1.41l6 6L26.4 13.77a1 1 0 0 0-1.4-1.44l-9.47 9.19Z"
          className="clr-i-outline clr-i-outline-path-2"
        ></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </>
  );
}
