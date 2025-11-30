import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Ternion Loop">
      <Image
        src="/images/ternion-loop-icon.png"
        alt="Ternion Loop Icon"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <span className="font-nacelle text-xl font-semibold text-gray-200">
        Ternion Loop
      </span>
    </Link>
  );
}
