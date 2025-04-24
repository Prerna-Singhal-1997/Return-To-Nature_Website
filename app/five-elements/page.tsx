import Image from "next/image"

export default function FiveElements() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="top" className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20elements.jpg-O48l2zlgxEYG59Ht8FGR4HyXxqhbhw.jpeg"
          alt="The five elements representation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">The Five Elements</h1>
          <p className="text-xl max-w-3xl mx-auto drop-shadow-md">Healing with Nature's Building Blocks</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Holistic healing traditions like naturopathy and Ayurveda teach that all life is composed of five elements:
            Earth, Water, Fire, Air, and Ether (space). These elements are the building blocks of nature and of our own
            bodies. When we reconnect with them, we heal our body, mind, and spirit.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Meditating at sunrise by the water engages all five elements – Earth below, Water nearby, Fire in the sun,
            Air flowing, and Ether in the peaceful space.
          </p>
        </div>
      </section>

      {/* The Five Elements */}
      <section className="bg-gray-50 py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20elements.jpg-O48l2zlgxEYG59Ht8FGR4HyXxqhbhw.jpeg')",
          }}
        ></div>
        <div className="section-container relative z-10">
          <h2 className="section-title">The Five Elements and Their Healing Properties</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Earth Element */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="absolute inset-0 bg-green-600/10 group-hover:bg-green-600/20 transition-colors duration-300"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mr-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">Earth</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Earth provides grounding and stability. It represents the solid state of matter and is associated with
                  the physical body.
                </p>
                <div className="bg-green-600/5 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Healing Properties:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Promotes feelings of security and stability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Helps with anxiety and feeling scattered</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Supports the skeletal system and bones</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-600/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Connect With Earth:
                  </h4>
                  <p className="text-gray-700">
                    Walk barefoot on grass or soil, garden with your hands in the dirt, or simply sit on the ground and
                    feel supported.
                  </p>
                </div>
              </div>
            </div>

            {/* Water Element */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="absolute inset-0 bg-water/10 group-hover:bg-water/20 transition-colors duration-300"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-water/20 flex items-center justify-center mr-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-water"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-water">Water</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Water offers cleansing and flow. It represents the liquid state and is associated with emotions and
                  adaptability.
                </p>
                <div className="bg-water/5 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-water mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Healing Properties:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-water mr-2">•</span>
                      <span>Cleanses and purifies the body and mind</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-water mr-2">•</span>
                      <span>Helps process emotions and release tension</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-water mr-2">•</span>
                      <span>Supports kidney function and hydration</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-water/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-water mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Connect With Water:
                  </h4>
                  <p className="text-gray-700">
                    Take a soothing bath, swim in a lake or ocean, drink pure water mindfully, or simply listen to the
                    sound of flowing water.
                  </p>
                </div>
              </div>
            </div>

            {/* Fire Element */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="absolute inset-0 bg-fire/10 group-hover:bg-fire/20 transition-colors duration-300"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-fire/20 flex items-center justify-center mr-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-fire"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-fire">Fire</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Fire gives warmth and energy. It represents transformation and is associated with metabolism and
                  passion.
                </p>
                <div className="bg-fire/5 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-fire mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Healing Properties:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-fire mr-2">•</span>
                      <span>Boosts energy and vitality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fire mr-2">•</span>
                      <span>Enhances digestion and metabolism</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fire mr-2">•</span>
                      <span>Stimulates motivation and inspiration</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-fire/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-fire mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Connect With Fire:
                  </h4>
                  <p className="text-gray-700">
                    Spend time in sunlight, especially morning sun, sit by a campfire, light candles, or cook a meal
                    with mindful attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Air Element */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="absolute inset-0 bg-gray-100/10 group-hover:bg-gray-100/20 transition-colors duration-300"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100/20 flex items-center justify-center mr-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-600">Air</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Air brings oxygen and life. It represents the gaseous state and is associated with breath, thought,
                  and communication.
                </p>
                <div className="bg-gray-100/5 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-600 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Healing Properties:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Clears the mind and improves focus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Supports respiratory health</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Helps release stagnant energy</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-600 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Connect With Air:
                  </h4>
                  <p className="text-gray-700">
                    Practice deep breathing exercises, spend time in windy places, open windows for fresh air, or
                    practice pranayama yoga.
                  </p>
                </div>
              </div>
            </div>

            {/* Ether Element */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group col-span-1 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-ether/10 group-hover:bg-ether/20 transition-colors duration-300"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-ether/20 flex items-center justify-center mr-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-ether"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-ether">Ether (Space)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Ether is the subtle space around us. It represents consciousness and is associated with intuition and
                  connection.
                </p>
                <div className="bg-ether/5 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-ether mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Healing Properties:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-ether mr-2">•</span>
                      <span>Promotes feelings of expansiveness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ether mr-2">•</span>
                      <span>Enhances intuition and spiritual connection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ether mr-2">•</span>
                      <span>Creates space for healing and growth</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-ether/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-ether mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Connect With Ether:
                  </h4>
                  <p className="text-gray-700">
                    Meditate in open spaces, gaze at the stars or sky, practice silence, or simply be still and aware of
                    the space around you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 italic mb-6">
              "It is our nature to be in nature. When we come home to these elements, we tap into nature's built-in
              healing power."
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-2 bg-green-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Scientific Evidence</h2>
            </div>
            <div className="prose lg:prose-xl mx-auto text-gray-700">
              <p className="mb-6">
                Meditating at sunrise by the water engages all five elements – Earth below, Water nearby, Fire in the
                sun, Air flowing, and Ether in the peaceful space.
              </p>
              <p className="mb-6">
                Modern science is catching up with this ancient wisdom. Connecting with nature makes us healthier and
                happier. Studies show that even 20 minutes in a natural setting can significantly lower stress hormones.
              </p>
              <p className="mb-6">
                Time in green spaces has been linked to better mood and memory, stronger immunity, and even a longer
                life – one study found that people with greater access to nature had a 12% lower mortality rate.
              </p>
              <p className="mb-6">
                In hospitals, patients with flowers in their room needed fewer painkillers and felt less fatigue. People
                who regularly spend time outdoors or who incorporate natural elements into their lifestyle report
                feeling more joyful, energetic, and fulfilled.
              </p>
              <p className="mb-6">
                Clearly, embracing a natural way of living – sunlight, fresh air, pure water, and earth's bounty – leads
                to better health, happiness, and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

