import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Users, Award, Leaf, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-cover bg-center">
          <Image src="/about-hero-image.png" alt="Mountain Haven Hotel" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Our Story</h1>
            <p className="mb-8 max-w-2xl text-lg">Discover the heart and soul behind Mountain Haven</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-[#f5f5f0]">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/hotel-history.png" alt="Hotel History" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a1a] mb-6">The Mountain Haven Story</h2>
                <div className="h-1 w-20 bg-[#d4af37] mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Founded in 1985 by the Alpine family, Mountain Haven began as a small lodge catering to ski
                  enthusiasts. Over the decades, we've grown into a premier destination while maintaining our commitment
                  to authentic mountain hospitality.
                </p>
                <p className="text-gray-700 mb-6">
                  Our hotel was renovated in 2018 to include our specialized gaming conference facilities, recognizing
                  the growing intersection between technology enthusiasts and mountain adventurers. This unique
                  combination has made us a beloved destination for both families and gaming professionals.
                </p>
                <p className="text-gray-700">
                  Today, Mountain Haven stands as a testament to our dedication to exceptional service, comfortable
                  accommodations, and unforgettable mountain experiences. We're proud to be a cornerstone of the local
                  community and a home away from home for our guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-[#1a3a1a] text-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-300">
                At Mountain Haven, we're guided by a set of core principles that shape everything we do
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-[#2a4a2a] p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#d4af37] p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-[#1a3a1a]" />
                  </span>
                  Family First
                </h3>
                <p className="text-gray-300">
                  We design every aspect of our hotel with families in mind, creating spaces where memories are made and
                  cherished. Our spacious rooms and thoughtful amenities reflect this commitment.
                </p>
              </div>
              <div className="bg-[#2a4a2a] p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#d4af37] p-2 rounded-full mr-3">
                    <Leaf className="h-5 w-5 text-[#1a3a1a]" />
                  </span>
                  Environmental Stewardship
                </h3>
                <p className="text-gray-300">
                  We're committed to preserving the natural beauty that surrounds us. Our sustainable practices include
                  energy-efficient operations, waste reduction, and supporting local conservation efforts.
                </p>
              </div>
              <div className="bg-[#2a4a2a] p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-[#d4af37] p-2 rounded-full mr-3">
                    <Award className="h-5 w-5 text-[#1a3a1a]" />
                  </span>
                  Excellence in Service
                </h3>
                <p className="text-gray-300">
                  We strive to exceed expectations in every interaction. Our staff is dedicated to providing
                  personalized, attentive service that makes each guest feel special and valued.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-[#f5f5f0]">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#1a3a1a] mb-4">Meet Our Team</h2>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                The dedicated professionals who make Mountain Haven special
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/team-member-1.png" alt="Michael Alpine" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3a1a]">Michael Alpine</h3>
                <p className="text-[#d4af37] font-medium">General Manager</p>
              </div>
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/team-member-2.png" alt="Sarah Winters" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3a1a]">Sarah Winters</h3>
                <p className="text-[#d4af37] font-medium">Head of Hospitality</p>
              </div>
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/team-member-3.png" alt="David Chen" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3a1a]">David Chen</h3>
                <p className="text-[#d4af37] font-medium">Gaming Facilities Director</p>
              </div>
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/team-member-4.png" alt="Elena Rodriguez" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3a1a]">Elena Rodriguez</h3>
                <p className="text-[#d4af37] font-medium">Spa & Wellness Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-[#2a4a2a] text-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto mb-6"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-[#1a3a1a] p-8 rounded-lg shadow-lg text-center">
                <Star className="h-16 w-16 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Best Family Hotel</h3>
                <p className="text-gray-300">Mountain Tourism Association, 2023</p>
              </div>
              <div className="bg-[#1a3a1a] p-8 rounded-lg shadow-lg text-center">
                <Star className="h-16 w-16 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence in Gaming Hospitality</h3>
                <p className="text-gray-300">Global Gaming Conference, 2022</p>
              </div>
              <div className="bg-[#1a3a1a] p-8 rounded-lg shadow-lg text-center">
                <Star className="h-16 w-16 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Green Hotel Certification</h3>
                <p className="text-gray-300">Sustainable Tourism Council, 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 bg-[#f5f5f0]">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#1a3a1a] mb-4">Photo Gallery</h2>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700 mb-8">
                Take a visual journey through our beautiful property
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gallery-1.png"
                  alt="Hotel Exterior"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gallery-2.png"
                  alt="Mountain View"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gallery-3.png"
                  alt="Spa Interior"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gallery-4.png"
                  alt="Gaming Room"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gallery-5.png"
                  alt="Deluxe Suite"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/gallery-6.png"
                  alt="Restaurant"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-[#1a3a1a] hover:bg-[#2a4a2a] text-white">
                View Full Gallery <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1a3a1a] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Mountain Haven</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Book your stay today and discover why families and gaming enthusiasts choose Mountain Haven for their
              mountain getaway.
            </p>
            <Button className="bg-[#d4af37] hover:bg-[#b8971f] text-black text-lg px-8 py-6">Book Your Stay Now</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
