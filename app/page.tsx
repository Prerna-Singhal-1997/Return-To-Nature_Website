import Image from "next/image"

export default function Home() {
  return (
    <>
      <div id="top" className="pt-16"></div>
      {/* Hero Section with Video Background */}
      <section className="video-container">
        <video autoPlay muted loop playsInline className="brightness-[1.3]">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nature_AI1-hhdGst5rlYDesI6kwst3K25N74cH01.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Return to Nature</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">The Ultimate Cure for Modern Life</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Reconnecting with Our Roots</h2>
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              In today's high-tech world, many of us feel something is missing. We spend about 90% of our time indoors
              under fluorescent lights, hustling between screens and smartphones. Yet deep down, our bodies and souls
              yearn for the natural world – the warmth of the sun, the touch of the earth, the sound of flowing water.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              It's becoming clear that we need to return to nature for our well-being. Reconnecting with the outdoors
              isn't just a quaint idea; it may be the medicine for our modern ailments.
            </p>
            <div className="mt-10 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Return%20to%20Nature.jpg-zfs9TA5R1qA6r7OzmLtNiT2yJHSdJE.jpeg"
                alt="Person standing in a forest with sunlight streaming through tall trees"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Looking up at towering trees in a sunlit forest can remind us of our connection to the Earth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Nature Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title">The Benefits of Connecting with Nature</h2>
          <div className="flex justify-center mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Benefits%20of%20Nature-5WBaYMGF2XIcRzuz522hekwZFpnDFO.png"
              alt="Benefits of connecting with nature diagram"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-500">Stress Reduction</h3>
              </div>
              <p className="text-gray-700">
                Studies show that even 20 minutes in a natural setting can significantly lower stress hormones. Nature
                provides a respite from the constant stimulation of modern life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-500">Mood Improvement</h3>
              </div>
              <p className="text-gray-700">
                Exposure to natural environments has been linked to better mood and reduced symptoms of depression and
                anxiety. The natural world lifts our spirits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
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
                <h3 className="text-xl font-bold text-green-500">Immunity Boost</h3>
              </div>
              <p className="text-gray-700">
                Time spent in forests has been shown to increase natural killer cell activity, enhancing our immune
                system's ability to fight illness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-500">Hospital Recovery</h3>
              </div>
              <p className="text-gray-700">
                Patients with flowers in their room needed fewer painkillers and felt less fatigue. Even views of nature
                can speed healing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-cyan-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-cyan-500">Longevity</h3>
              </div>
              <p className="text-gray-700">
                People with greater access to nature had a 12% lower mortality rate according to studies. Nature
                connection may help us live longer, healthier lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-600">Overall Wellbeing</h3>
              </div>
              <p className="text-gray-700">
                People who regularly spend time outdoors report feeling more joyful, energetic, and fulfilled. Nature
                nourishes us on multiple levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

