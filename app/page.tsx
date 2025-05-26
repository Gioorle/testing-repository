import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome to Our Luxury Mountain Hotel</h1>
        <Image src="/luxury-mountain-hotel.png" alt="Luxury Mountain Hotel" width={500} height={300} />
        <p>Experience unparalleled comfort and breathtaking views.</p>
      </div>

      <div>
        <h2>Hotel Lobby</h2>
        <Image src="/hotel-lobby.png" alt="Hotel Lobby" width={500} height={300} />
        <p>A welcoming space for relaxation and socializing.</p>
      </div>

      <div>
        <h2>Standard Room</h2>
        <Image src="/standard-room.png" alt="Standard Room" width={500} height={300} />
        <p>Comfortable and well-equipped for a pleasant stay.</p>
      </div>

      <div>
        <h2>Deluxe Room</h2>
        <Image src="/deluxe-room.png" alt="Deluxe Room" width={500} height={300} />
        <p>Enhanced amenities and stunning views.</p>
      </div>

      <div>
        <h2>Premium Room</h2>
        <Image src="/premium-room.png" alt="Premium Room" width={500} height={300} />
        <p>The ultimate in luxury and comfort.</p>
      </div>

      <div>
        <h2>Gaming Conference</h2>
        <Image src="/gaming-conference.png" alt="Gaming Conference" width={500} height={300} />
        <p>State-of-the-art facilities for your next event.</p>
      </div>

      <div>
        <h2>Aerial View</h2>
        <Image
          src="/mountain-hotel-ski-resort-aerial.png"
          alt="Mountain Hotel Ski Resort Aerial"
          width={500}
          height={300}
        />
        <p>Breathtaking aerial view of our hotel and ski resort.</p>
      </div>
    </main>
  )
}
