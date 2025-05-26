import { Link, useLocation } from "react-router-dom"
import { Snowflake } from "lucide-react"
import Button from "./Button"

const Header = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <header className="sticky top-0 z-50 bg-[#1a3a1a] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Snowflake className="h-6 w-6 text-[#d4af37]" />
          <span className="text-xl font-bold">Mountain Haven</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className={`${path === "/" ? "text-[#d4af37]" : "hover:text-[#d4af37]"} transition-colors`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${path === "/about" ? "text-[#d4af37]" : "hover:text-[#d4af37]"} transition-colors`}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/#rooms" className="hover:text-[#d4af37] transition-colors">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/#facilities" className="hover:text-[#d4af37] transition-colors">
                Facilities
              </Link>
            </li>
            <li>
              <Link to="/#location" className="hover:text-[#d4af37] transition-colors">
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
