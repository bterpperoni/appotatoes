"use client";
import { useTheme } from "next-themes";
import { ThemeToggle } from "../components/custom/layout/theme-toggle";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`flex min-h-[calc(100vh-61px)] ${theme === 'light' ? '!bg-white !text-black' : ''} h-full flex-col items-center justify-center text-white pt-2`}>
      <div className={`container text-4xl text-bold flex flex-col items-center justify-center gap-4 px-4 `}>
        <span className="text-[4rem]">
          ヾ(⌐■_■)ノ♪
        </span>
        <span>___________________________</span>
        <span className={`text-4xl `}>Glad to see you !</span>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}