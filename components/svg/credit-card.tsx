export default function CreditCard({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className={className}
      >
        <path
          fill="currentColor"
          d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M32 62h192a2 2 0 0 1 2 2v26H30V64a2 2 0 0 1 2-2m192 132H32a2 2 0 0 1-2-2v-90h196v90a2 2 0 0 1-2 2m-18-26a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-64 0a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6"
        ></path>
      </svg>
    </>
  );
}
