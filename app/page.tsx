// app/page.tsx
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { ShieldCheck } from "lucide-react"
import { User, Laptop, Store, Building, Rocket } from "lucide-react" // 👈 icons for trusted section

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
            <span
              className="relative -top-25 inline-flex items-center bg-[#0A2E5C] text-white text-xs font-semibold
                        px-[12px] py-[4px] gap-[6px]"
              style={{
                width: '584px',
                height: '32px',
                borderRadius: '100px',
                opacity: 1,
              }}
            >
              <ShieldCheck size={14} className="shrink-0" />
              ATO COMPLIANT & TRUSTED
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0F1724] relative" style={{ top: '-80px' }}>
              Professional Tax <br />
              <span className="text-[#0A2E5C]">Guidance &</span> <br />
              <span className="text-[#0A2E5C]">Strategy</span>
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
                className="border border-green-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-500 hover:text-white transition"
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
                width: '550px',              
                height: '650px',             
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px',
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '87px',
                background: 'linear-gradient(24.41deg, #00274C 29.66%, #005BB2 94.43%)',
                transform: 'translateX(80px)',
              }}
            />

            {/* image */}
            <div
              className="relative z-10 rounded-[22px] overflow-hidden shadow-2xl"
              style={{ transform: 'translateX(-90px)' }}
            >
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

      {/* ================= TRUSTED SECTION ================= */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">
            Trusted by all business structures
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-800">
              <User className="text-green-500 w-6 h-6" />
              Individuals
            </div>

            <div className="flex items-center gap-2 text-gray-800">
              <Laptop className="text-green-500 w-6 h-6" />
              Freelancers
            </div>

            <div className="flex items-center gap-2 text-gray-800">
              <Store className="text-green-500 w-6 h-6" />
              Small Business
            </div>

            <div className="flex items-center gap-2 text-gray-800">
              <Building className="text-green-500 w-6 h-6" />
              Companies
            </div>

            <div className="flex items-center gap-2 text-gray-800">
              <Rocket className="text-green-500 w-6 h-6" />
              Startups
            </div>
          </div>
        </div>
      </section>


{/* ================= SERVICES / EXPERTISE SECTION ================= */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span
      className="inline-flex items-center bg-green-500 text-white text-xs font-semibold
                 px-3 py-1 gap-1 mb-2 rounded-full"
    >
      OUR EXPERTISE
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-8">
      Comprehensive Tax Solutions
    </h2>

    <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
      From simple personal returns to complex corporate structuring, Nova Tax covers every aspect of Australian taxation and accounting.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left text-left hover:bg-[#00274C]">
        <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
          <User className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="font-semibold text-lg mb-2 !text-black">Individual Tax Services</h3>
        <p className="text-gray-400 text-sm mb-3">
          Personal income tax return preparation, deduction guidance, and compliance support to ensure you get the best outcome.
        </p>
        <div className="w-full h-[1px] bg-green-500 mb-3" />
        <a href="/services" className="text-green-500 font-semibold inline-flex items-center gap-1" style={{ color: '#0B4A76' }}>
          Learn more →
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
          <Building className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="font-semibold text-lg mb-2 !text-black">Business Tax Services</h3>
        <p className="text-gray-400 text-sm mb-3">
          Comprehensive company tax returns, strategic planning, and financial reporting for businesses of all sizes.
        </p>
        <div className="w-full h-[1px] bg-green-500 mb-3" />
        <a href="/services" className="text-green-500 font-semibold inline-flex items-center gap-1" style={{ color: '#0B4A76' }}>
          Learn more →
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
          <Laptop className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="font-semibold text-lg mb-2 !text-black">Accounting & Booking</h3>
        <p className="text-gray-400 text-sm mb-3">
          Daily financial record management, P&L preparation, and balance sheet maintenance to keep your books balanced.
        </p>
        <div className="w-full h-[1px] bg-green-500 mb-3" />
        <a href="/services" className="text-green-500 font-semibold inline-flex items-center gap-1" style={{ color: '#0B4A76' }}>
          Learn more →
        </a>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
          <Store className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="font-semibold text-lg mb-2 !text-black">GST & BAS Services</h3>
        <p className="text-gray-400 text-sm mb-3">
          Expert guidance on GST registration, Business Activity Statement (BAS) preparation, and PAYG installments.
        </p>
        <div className="w-full h-[1px] bg-green-500 mb-3" />
        <a href="/services" className="text-green-500 font-semibold inline-flex items-center gap-1" style={{ color: '#0B4A76' }}>
          Learn more →
        </a>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
          <Rocket className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="font-semibold text-lg mb-2 !text-black">Advisory & Consultation</h3>
        <p className="text-gray-400 text-sm mb-3">
          Proactive tax planning, business growth consultation, financial structuring, and risk assessment.
        </p>
        <div className="w-full h-[1px] bg-green-500 mb-3" />
        <a href="/services" className="text-green-500 font-semibold inline-flex items-center gap-1" style={{ color: '#0B4A76' }}>
          Learn more →
        </a>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
        <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
          <ShieldCheck className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="font-semibold text-lg mb-2 !text-black">Advanced Features</h3>
        <p className="text-gray-400 text-sm mb-3">
          Software setup (Xero/MYOB), property investment accounting, payroll management, and custom corporate solutions.
        </p>
        <div className="w-full h-[1px] bg-green-500 mb-3" />
        <a href="/services" className="text-green-500 font-semibold inline-flex items-center gap-1" style={{ color: '#0B4A76' }}>
          Learn more →
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
          © 2026 TaxNova. Simplifying tax management with modern technology.
        </div>
      </footer>

    </div>
  )
}
