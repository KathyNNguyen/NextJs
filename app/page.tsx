import Image from "next/image";
import { zen_dots } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
          <li className={`${zen_dots.className} mb-8 text-xl md:text-2xl`}>
            The Formula 1 Info Pit
          </li>
          <li className={`${zen_dots.className} mb-8`}>
            a quick source to see all of the important details
          </li>
          <li className={`${zen_dots.className} mb-8`}>
            - drivers - teams - car specs - race results
          </li>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enter
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/dashboard/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          admin login
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.formula1.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          go to official website for more →
        </a>
      </footer>
    </div>
  );
}
