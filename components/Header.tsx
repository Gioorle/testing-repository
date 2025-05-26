"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#1a3a1a] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Snowflake className="h-6 w-6 text-[#d4af37]" />
          <span className="text-xl font-bold">Mountain Haven</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "text-[#d4af37]" : "hover:text-[#d4af37]"} transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${pathname === "/about" ? "text-[#d4af37]" : "hover:text-[#d4af37]"} transition-colors`}
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/#rooms" className="hover:text-[#d4af37] transition-colors">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/#facilities" className="hover:text-[#d4af37] transition-colors">
                Facilities
              </Link>
            </li>
            <li>
              <Link href="/#location" className="hover:text-[#d4af37] transition-colors">
                Location
              </Link>
            </li>
          </ul>
        </nav>
        <Button className="bg-[#d4af37] hover:bg-[#b8971f] text-black">Book Now</Button>
      </div>
    </header>
  )
}

export default Header
