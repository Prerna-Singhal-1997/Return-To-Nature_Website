import Link from "next/link"
import Image from "next/image"

export default function Epilogue() {
  return (
    <div className="min-h-screen relative">
      {/* Full-page background image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-life-happy-man--nature-lover--aesthetic--pret%20%282%29.jpg-9jSTjPbkzpMUibxWz3EKHOmpJcFS0t.jpeg"
        alt="Joyful person in nature wearing flower-adorned hat looking up at cherry blossoms"
        fill
        className="object-cover brightness-110 z-0"
        priority
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 pt-24">
        <div className="mt-40">
          {" "}
          {/* Increased top margin to move everything down */}
          <h1 className="text-4xl md:text-6xl font-bold text-center drop-shadow-lg mb-20">Epilogue</h1>
          <div className="max-w-2xl mx-auto text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow-lg">Ready to Return to Nature?</h2>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              Start your journey today. Remember, even small steps toward reconnecting with nature can have profound
              effects on your wellbeing.
            </p>
            <Link
              href="/#top"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

