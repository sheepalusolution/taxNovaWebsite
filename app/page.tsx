// app/page.tsx
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen`}>

      {/* Navbar */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        {/* light overlay so image is visible */}
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative max-w-[1440px] mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center px-10">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-[#0A2E5C] text-white text-xs font-semibold px-6 py-2 rounded-full mb-6">
              ATO COMPLIANT & TRUSTED
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0F1724]">
              Professional Tax <br />
              <span className="text-[#0A2E5C]">Guidance & Strategy</span>
            </h1>

            <div className="mt-10 flex gap-4">
              <a
                href="/book-consultation"
                className="bg-[#0A2E5C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#082448] transition"
              >
                Book Consultation
              </a>

              <a
                href="/services"
                className="border border-green-500 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE + BLUE SHAPE */}
<div className="relative hidden lg:flex justify-end items-center h-full">

  {/* blue background shape */}
  <div
    className="absolute top-0 right-0"
    style={{
      width: '600px',              // long rectangle
      height: '650px',             // stays inside hero
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '120px', // curved bottom-left corner
      background: 'linear-gradient(24.41deg, #00274C 29.66%, #005BB2 94.43%)',
    }}
  />

  {/* image */}
  <div className="relative z-10 rounded-[22px] overflow-hidden shadow-2xl -mr-10">
    <Image
      src="/hero.jpg"
      alt="Consultation"
      width={540}
      height={440}
      className="object-cover"
      priority
    />
  </div>
          </div>

        </div>
      </section>


      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Processing</h3>
            <p className="text-gray-600">
              Process tax returns quickly with our optimized platform.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">
              Bank-level security with full compliance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simple and intuitive interface.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-gray-600">Tax Returns Filed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">5K+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
          © 2026 TaxNova. Simplifying tax management with modern technology.
        </div>
      </footer>

    </div>
  )
}
