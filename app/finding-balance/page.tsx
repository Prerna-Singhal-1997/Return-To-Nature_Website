import Image from "next/image"
import { Check } from "lucide-react"

export default function FindingBalance() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="top" className="relative h-[70vh] flex items-center justify-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-[1.3]">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nature_AI2-nHnPPlRFLpwDFRKUk73a3NJStlz5ww.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Finding Balance for the Future</h1>
          <p className="text-xl max-w-3xl mx-auto drop-shadow-md">A Call to a Harmonious Lifestyle</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Finding the Perfect Balance</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      We don't need to abandon technology altogether; we just need to find a healthier balance between
                      the modern and the natural. Here are some ways to reconnect with nature and restore harmony in
                      your life.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finding%20balance.jpg-nBADXgLr4BN3SPXmBBGK1yMbKmpAD3.jpeg"
                    alt="People enjoying nature by a lake at sunset"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Steps */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-4">
              Practical Wisdom
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Steps to Reconnect with Nature</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-white opacity-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Unplug and Step Outside</h3>
                <p className="text-gray-700 mb-6">
                  Make it a habit to take breaks from screens and get outdoors daily. Even a short walk in the park
                  during lunch or watching the sunset in the evening can work wonders.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Schedule daily "nature breaks"</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Walk barefoot on grass or soil</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Eat lunch outdoors instead of at your desk</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-white opacity-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Bring Nature Into Your Space</h3>
                <p className="text-gray-700 mb-6">
                  Integrate the elements into your home and workplace. Open your windows for fresh air, let in natural
                  light, and keep plants indoors to connect with Earth and Water.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Place houseplants throughout your space</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Use natural materials in your decor</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Create a small herb garden on your windowsill</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-white opacity-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Embrace Natural Practices</h3>
                <p className="text-gray-700 mb-6">
                  Try holistic activities that align with the elements. Practice yoga or meditation outside, take a
                  relaxing bath, and cook simple meals with whole foods from the earth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Practice mindful breathing outdoors daily</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Cook with fresh, whole ingredients</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Take technology-free weekends once a month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="section-container">
        <h2 className="section-title">Embrace Nature as the Ultimate Cure</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Our fast-paced modern life may promise comfort and efficiency, but true wellness comes from realigning with
            nature. Remember that nature is our eternal companion – a wise, ever-present healer ready to help us thrive.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            When you feel overwhelmed or unwell, the remedy might be as simple as stepping outside, closing your eyes,
            and letting the elements rejuvenate you. The Earth can absorb your stress, Water can wash away your worries,
            Fire (sunshine) can ignite your vitality, Air can refresh your mind, and Ether can restore your spirit.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            It's time to return to these basics. It's time to swap some of our modern excess for the elegant simplicity
            of the natural world. By doing so, we not only heal ourselves but also nurture the planet that sustains us.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            In the end, the path forward is surprisingly simple: reconnect with nature. Take off your shoes and feel the
            grass, listen to the wind in the trees, watch the clouds drift. Rediscover the childlike joy of being
            outdoors. Let nature be your medicine, your inspiration, and your guide.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            By embracing a more natural, balanced lifestyle, you can find greater health, happiness, and meaning – and
            help ensure a brighter, greener future for us all. Nature is calling; step outside and answer it.
          </p>
        </div>
      </section>
    </div>
  )
}

