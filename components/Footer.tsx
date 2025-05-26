import Link from "next/link"
import { Snowflake, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-[#1a3a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="h-6 w-6 text-[#d4af37]" />
              <span className="text-xl font-bold">Mountain Haven</span>
            </div>
            <p className="text-gray-300 mb-4">Your perfect mountain retreat for families and gaming enthusiasts.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#d4af37]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#d4af37]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#d4af37]">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="h-5 w-5 text-[#d4af37]" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-5 w-5 text-[#d4af37]" />
              <span>info@mountainhaven.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-[#d4af37] mt-1" />
              <span>123 Alpine Way, Mountain Valley, MV 12345</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#rooms" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Spa Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Gaming Events
                </Link>
              </li>
              <li>
                <Link href="/#location" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Location & Directions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive special offers and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-black"
              />
              <Button className="bg-[#d4af37] hover:bg-[#b8971f] text-black rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mountain Haven Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
