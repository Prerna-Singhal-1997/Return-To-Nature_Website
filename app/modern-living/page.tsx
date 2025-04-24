import Image from "next/image"

export default function ModernLiving() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="top" className="relative h-[60vh] flex items-center justify-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-[1.3]">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall-e%20robot-zD0Ao35rPupApwdJgaEsQvu4604WJM.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">The Drawbacks of Modern Living</h1>
          <p className="text-xl max-w-3xl mx-auto drop-shadow-md">Stress, Disease, and Disconnection</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Contrast the healing power of nature with the typical modern lifestyle. Many of us are glued to desks and
            devices, deprived of sunlight and fresh air. We move from air-conditioned rooms to cars, rarely touching the
            ground or seeing the horizon. This disconnection from nature is taking a toll.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Physicians and researchers have even coined a term "nature deficit disorder" to describe the problems that
            arise when we lose contact with the natural world.
          </p>
        </div>
      </section>

      {/* Modern Living Problems */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="section-title">The Hidden Costs of Our Indoor Lives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-white to-red-50 rounded-xl shadow-lg p-8 border border-red-100 transform transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Physical Health Impacts</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">1</span>
                  </span>
                  <span>Chronic diseases like hypertension and diabetes are on the rise</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">2</span>
                  </span>
                  <span>Vitamin D deficiency from lack of sunlight exposure</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">3</span>
                  </span>
                  <span>Weakened immune systems from sterile environments</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">4</span>
                  </span>
                  <span>Poor sleep quality due to disrupted circadian rhythms</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">5</span>
                  </span>
                  <span>Musculoskeletal problems from sedentary behavior</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-8 border border-purple-100 transform transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mental Health Challenges</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">1</span>
                  </span>
                  <span>Rising rates of anxiety and depression</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">2</span>
                  </span>
                  <span>Chronic stress from constant digital stimulation</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">3</span>
                  </span>
                  <span>Attention problems and reduced cognitive function</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">4</span>
                  </span>
                  <span>Feelings of isolation despite digital connectivity</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">5</span>
                  </span>
                  <span>Reduced creativity and problem-solving abilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Without natural light, our sleep cycles get disrupted. Without fresh air and trees, our stress levels stay
              elevated. It's been found that exposure to nature reduces stress, blood pressure, and even crime rates –
              so living without it likely does the opposite.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In short, modern living often leaves us overstimulated but undernourished in the ways that truly matter.
              We have incredible advancements and gadgets, yet many people feel tired, anxious, and isolated.
            </p>
          </div>
        </div>
      </section>

      {/* WALL-E Section */}
      <section className="section-container">
        <h2 className="section-title">Lessons from WALL-E</h2>
        <h3 className="text-xl text-center mb-8">A Cautionary Tale of an Over-Automated World</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wall-e%20people.jpg-1RmjkfoaHLsXGF56rEaotZTL4trfgk.jpeg"
              alt="Scene from WALL-E showing humans in hover chairs"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              The animated film WALL-E offers a vivid warning of what could happen if we continue down this path. In the
              movie, humans abandon an over-polluted Earth and live on spaceships where every need is met by machines.
            </p>
            <p className="text-gray-700 mb-4">
              They float around on chairs, constantly staring at screens, never touching the ground or knowing the feel
              of a breeze. Over time, they become physically weak and disengaged – a society of people who have
              forgotten what it's like to walk, to breathe fresh air, to truly live.
            </p>
            <p className="text-gray-700 mb-4">
              One of the film's most striking themes is humanity's complete disconnect from nature, each other, and even
              their own bodies. It's an exaggerated scenario, but not far-fetched as a symbol.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-700 mb-6">
            WALL-E reminds us that if we let convenience and technology replace our relationship with nature, we risk
            losing our health, our independence, and our joy. The good news is that, unlike the characters in WALL-E, we
            still have a beautiful Earth beneath our feet – and we can choose a different future.
          </p>
        </div>
      </section>
    </div>
  )
}

