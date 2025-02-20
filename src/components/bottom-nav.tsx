"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, PlusCircle, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function BottomNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-background">
      <div className="container mx-auto flex max-w-md justify-around py-2">
        <Link
          href="/"
          className={`flex flex-col items-center ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/groups"
          className={`flex flex-col items-center ${pathname.startsWith("/groups") ? "text-primary" : "text-muted-foreground"}`}
        >
          <Users size={24} />
          <span className="text-xs">Groups</span>
        </Link>
        <Link
          href="/add-bill"
          className={`flex flex-col items-center ${pathname === "/add-bill" ? "text-primary" : "text-muted-foreground"}`}
        >
          <PlusCircle size={24} />
          <span className="text-xs">Add Bill</span>
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex flex-col items-center text-muted-foreground"
        >
          {mounted && theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          <span className="text-xs">Theme</span>
        </button>
      </div>
    </nav>
  );
}
