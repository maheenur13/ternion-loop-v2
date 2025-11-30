import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Ternion Loop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fill="#027efc"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2.5C17.1 2.5 18.1 3.1 18.6 4L22.5 10.5H26C27.1 10.5 28 11.4 28 12.5V15.5L25.5 19.5L28 23.5V26.5C28 27.6 27.1 28.5 26 28.5H19.5L16 22.5L12.5 28.5H6C4.9 28.5 4 27.6 4 26.5V23.5L6.5 19.5L4 15.5V12.5C4 11.4 4.9 10.5 6 10.5H9.5L13.4 4C13.9 3.1 14.9 2.5 16 2.5ZM16 7L10 17L16 27L22 17L16 7Z"
        />
      </svg>
      <span className="font-nacelle text-xl font-semibold text-gray-200">
        Ternion Loop
      </span>
    </Link>
  );
}
