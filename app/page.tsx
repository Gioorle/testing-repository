import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Snowflake, SpadeIcon as Spa, Gamepad2, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[80vh] bg-cover bg-center">
          <Image src="/luxury-mountain-hotel.png" alt="Mountain Haven Hotel" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Experience Luxury in the Heart of the Mountains
            </h1>
            <p className="mb-8 max-w-2xl text-lg">
              A 3-star mountain retreat perfect for families, gaming enthusiasts, and nature lovers
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="bg-[#d4af37] hover:bg-[#b8971f] text-black text-lg px-8 py-6">Book Your Stay</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Explore Facilities
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#f5f5f0]">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#1a3a1a] mb-4">Welcome to Mountain Haven</h2>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#1a3a1a] mb-4">Your Perfect Mountain Getaway</h3>
                <p className="text-gray-700 mb-6">
                  Nestled in the majestic mountains near a premier ski resort, Mountain Haven offers a unique blend of
                  comfort, luxury, and adventure. Our 3-star hotel is designed to provide an unforgettable experience
                  for families, gaming enthusiasts, and nature lovers alike.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-[#d4af37]" />
                    <span className="text-[#1a3a1a]">3-Star Comfort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#d4af37]" />
                    <span className="text-[#1a3a1a]">Near Ski Resort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Spa className="h-5 w-5 text-[#d4af37]" />
                    <span className="text-[#1a3a1a]">Relaxing Spa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-[#d4af37]" />
                    <span className="text-[#1a3a1a]">Gaming Conferences</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/about">
                    <Button className="bg-[#1a3a1a] hover:bg-[#2a4a2a] text-white">
                      Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/hotel-lobby.png" alt="Hotel Lobby" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-20 bg-[#1a3a1a] text-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Spacious Family Rooms</h2>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto"></div>
              <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                All our rooms range from 50 to 70 square meters, perfect for families with small children
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-[#2a4a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image src="/images/standard-room.png" alt="Standard Room" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Standard Suite</h3>
                  <p className="text-gray-300 mb-4">
                    50m² room with stunning mountain views, perfect for a family of 3-4
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-[#d4af37]" />
                    <span>Up to 4 guests</span>
                  </div>
                  <Button className="w-full bg-[#d4af37] hover:bg-[#b8971f] text-black">View Details</Button>
                </div>
              </div>
              <div className="bg-[#2a4a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image src="/images/deluxe-room.png" alt="Deluxe Room" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Deluxe Suite</h3>
                  <p className="text-gray-300 mb-4">
                    60m² room with private balcony and enhanced amenities for family comfort
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-[#d4af37]" />
                    <span>Up to 5 guests</span>
                  </div>
                  <Button className="w-full bg-[#d4af37] hover:bg-[#b8971f] text-black">View Details</Button>
                </div>
              </div>
              <div className="bg-[#2a4a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image src="/images/premium-room.png" alt="Premium Room" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Suite</h3>
                  <p className="text-gray-300 mb-4">70m² room with separate living area and premium mountain views</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-[#d4af37]" />
                    <span>Up to 6 guests</span>
                  </div>
                  <Button className="w-full bg-[#d4af37] hover:bg-[#b8971f] text-black">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-20 bg-[#f5f5f0]">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#1a3a1a] mb-4">Our Special Facilities</h2>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto"></div>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              {/* Spa Facility */}
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-80">
                  <Image src="/mountain-spa-retreat.png" alt="Spa Center" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <Spa className="h-10 w-10 text-[#d4af37] mb-2" />
                    <h3 className="text-2xl font-bold mb-2">Mountain Spa Retreat</h3>
                    <p className="text-gray-200">Unwind and rejuvenate after a day of adventure</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Our intimate spa center offers a range of treatments designed to soothe tired muscles and refresh
                    your spirit. Featuring mountain herb-infused therapies, a sauna, and a relaxation lounge with
                    panoramic views.
                  </p>
                  <Link
                    href="#"
                    className="text-[#1a3a1a] font-semibold flex items-center hover:text-[#d4af37] transition-colors"
                  >
                    Explore Spa Services <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Gaming Room Facility */}
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-80">
                  <Image
                    src="/images/gaming-conference.png"
                    alt="Gaming Conference Center"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <Gamepad2 className="h-10 w-10 text-[#d4af37] mb-2" />
                    <h3 className="text-2xl font-bold mb-2">Gaming Conference Center</h3>
                    <p className="text-gray-200">State-of-the-art facilities for gaming enthusiasts</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Our specialized gaming room is equipped with the latest technology to host gaming conferences and
                    tournaments. With high-speed internet, professional gaming setups, and configurable spaces, it's the
                    perfect venue for gaming events of all sizes.
                  </p>
                  <Link
                    href="#"
                    className="text-[#1a3a1a] font-semibold flex items-center hover:text-[#d4af37] transition-colors"
                  >
                    Learn About Gaming Events <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20 bg-[#2a4a2a] text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Prime Mountain Location</h2>
                <div className="h-1 w-20 bg-[#d4af37] mb-6"></div>
                <p className="mb-6">
                  Mountain Haven is strategically located just minutes away from the region's premier ski resort. Enjoy
                  easy access to ski slopes in winter and hiking trails in summer.
                </p>
                <div className="bg-[#1a3a1a] p-6 rounded-lg mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-[#d4af37] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-300">123 Alpine Way, Mountain Valley, MV 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Snowflake className="h-6 w-6 text-[#d4af37] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Distance to Ski Resort</h3>
                      <p className="text-gray-300">Only 5 minutes by our complimentary shuttle service</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-[#d4af37] hover:bg-[#b8971f] text-black">Get Directions</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/mountain-hotel-ski-resort-aerial.png" alt="Hotel Location" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#f5f5f0]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#1a3a1a] mb-6">Ready for Your Mountain Adventure?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Book your stay at Mountain Haven and experience the perfect blend of comfort, adventure, and relaxation in
              our spacious family-friendly rooms.
            </p>
            <Button className="bg-[#d4af37] hover:bg-[#b8971f] text-black text-lg px-8 py-6">
              Book Your Stay Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
