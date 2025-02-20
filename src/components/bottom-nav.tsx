"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, PlusCircle } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="container max-w-md mx-auto flex justify-around py-2">
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
      </div>
    </nav>
  )
}

