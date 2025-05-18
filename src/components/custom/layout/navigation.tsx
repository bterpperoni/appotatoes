"use client";
import { useTheme } from "next-themes";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div className={`flex flex-row items-center justify-between gap-4 px-4 py-2`}>
      <h1
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }} 
        className={`text-xl font-extrabold tracking-tight ${theme === 'light' ? 'light' : 'dark'} sm:text-[2rem]`}>
        <span>S <span className="text-[#ab24ef]">&</span> BOX</span> 
      </h1>

      <Button
        variant="customLink"
        onClick={() => router.push("/potato")}
        className={`w-sm font-bold tracking-normal cursor-pointer ${theme === 'dark' ? ' bg-black border-1 border-white shadow-md hover:bg-white hover:text-[#ab24ef] text-white' : ' hover:text-white   hover:bg-purple-700'} `}
      >
       Come Here ༼ つ ◕_◕ ༽つ
      </Button>
    </div>
  );
}
