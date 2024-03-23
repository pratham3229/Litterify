import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import local from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});
export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image alt="logo" src="/logo.svg" height={30} width={30} />
        <p
          className={cn("text-lg text-neutral-700 py-1", headingFont.className)}
        >
          Litterify
        </p>
      </div>
    </Link>
  );
};
