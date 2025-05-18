"use client"

import { useTheme } from 'next-themes'
import { Button } from '../../ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null;
  return (
    <Button
      variant="customButton"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunIcon className="min-h-[2rem] min-w-[2rem] bg-gray-800 p-1 rounded-full" /> : <MoonIcon className="h-[2rem] w-[2rem] bg-white text-black" fill='true'  />}
    </Button>
  )
}
