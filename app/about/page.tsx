import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/about-hero-image.png"
              alt="About Us Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <p className="text-gray-700 mb-4">
              Welcome to our hotel! We started with a simple dream: to create a place where travelers could feel at
              home. Our journey began many years ago, and we've been dedicated to providing exceptional hospitality ever
              since.
            </p>
            <p className="text-gray-700">
              From our cozy rooms to our delicious dining options, we strive to make every aspect of your stay
              memorable. We're passionate about creating a welcoming atmosphere and ensuring that you have a relaxing
              and enjoyable experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our History</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:mr-8">
            <p className="text-gray-700 mb-4">
              Our hotel has a rich history, dating back to the early 20th century. Originally built as a small inn, it
              has evolved over the years to become the modern and comfortable hotel you see today.
            </p>
            <p className="text-gray-700">
              We've preserved many of the original architectural details, blending them with contemporary amenities to
              create a unique and charming atmosphere. We're proud of our heritage and the role we play in the local
              community.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hotel-history.png"
              alt="Hotel History"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Image
              src="/team-member-1.png"
              alt="Team Member 1"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">General Manager</p>
          </div>
          <div className="text-center">
            <Image
              src="/team-member-2.png"
              alt="Team Member 2"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Head Chef</p>
          </div>
          <div className="text-center">
            <Image
              src="/team-member-3.png"
              alt="Team Member 3"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold">Peter Jones</h3>
            <p className="text-gray-600">Front Desk Manager</p>
          </div>
          <div className="text-center">
            <Image
              src="/team-member-4.png"
              alt="Team Member 4"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold">Emily Brown</h3>
            <p className="text-gray-600">Housekeeping Supervisor</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/gallery-1.png" alt="Gallery 1" width={400} height={300} className="rounded-lg shadow-md" />
          <Image src="/gallery-2.png" alt="Gallery 2" width={400} height={300} className="rounded-lg shadow-md" />
          <Image src="/gallery-3.png" alt="Gallery 3" width={400} height={300} className="rounded-lg shadow-md" />
          <Image src="/gallery-4.png" alt="Gallery 4" width={400} height={300} className="rounded-lg shadow-md" />
          <Image src="/gallery-5.png" alt="Gallery 5" width={400} height={300} className="rounded-lg shadow-md" />
          <Image src="/gallery-6.png" alt="Gallery 6" width={400} height={300} className="rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  )
}
