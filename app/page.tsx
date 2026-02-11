// app/page.tsx
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { ShieldCheck } from "lucide-react"
import { User, Laptop, Store, Building, Rocket, Facebook, Linkedin, Twitter } from "lucide-react" // 👈 icons for trusted section

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen`}>

      {/* Navbar */}
      <Navbar />

      {/*  HERO SECTION */}
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

      {/*  TRUSTED SECTION  */}
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


{/*  SERVICES / EXPERTISE SECTION  */}
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
  <div className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left hover:bg-[#00274C]">
    <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4 border-2 border-green-500">
      <User className="w-6 h-6 text-green-500 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-white transition">
      Individual Tax Services
    </h3>
    <p className="text-gray-400 text-sm mb-3 group-hover:text-white">
      Personal income tax return preparation, deduction guidance, and compliance support to ensure you get the best outcome.
    </p>
    <div className="w-full h-[1px] bg-green-500 mb-3" />
    <a
      href="/services"
      className="font-semibold inline-flex items-center gap-1 text-[#0B4A76] group-hover:text-green-500 transition"
    >
      Learn more →
    </a>
  </div>

  {/* Card 2 */}
  <div className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left hover:bg-[#00274C]">
    <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4 border-2 border-green-500">
      <Building className="w-6 h-6 text-green-500 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-white transition">
      Business Tax Services
    </h3>
    <p className="text-gray-400 text-sm mb-3 group-hover:text-white">
      Comprehensive company tax returns, strategic planning, and financial reporting for businesses of all sizes.
    </p>
    <div className="w-full h-[1px] bg-green-500 mb-3" />
    <a
  href="/services"
  className="font-semibold inline-flex items-center gap-1 text-[#0B4A76] group-hover:text-green-500 transition"
    >
      Learn more →
    </a>
  </div>

  {/* Card 3 */}
  <div className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left hover:bg-[#00274C]">
    <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4 border-2 border-green-500">
      <Laptop className="w-6 h-6 text-green-500 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-white transition">
      Accounting & Booking
    </h3>
    <p className="text-gray-400 text-sm mb-3 group-hover:text-white">
      Daily financial record management, P&L preparation, and balance sheet maintenance to keep your books balanced.
    </p>
    <div className="w-full h-[1px] bg-green-500 mb-3" />
    <a
  href="/services"
  className="font-semibold inline-flex items-center gap-1 text-[#0B4A76] group-hover:text-green-500 transition"
>
  Learn more →
</a>

  </div>

  {/* Card 4 */}
  <div className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left hover:bg-[#00274C]">
    <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4 border-2 border-green-500">
      <Store className="w-6 h-6 text-green-500 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-white transition">
      GST & BAS Services
    </h3>
    <p className="text-gray-400 text-sm mb-3 group-hover:text-white">
      Expert guidance on GST registration, Business Activity Statement (BAS) preparation, and PAYG installments.
    </p>
    <div className="w-full h-[1px] bg-green-500 mb-3" />
    <a
  href="/services"
  className="font-semibold inline-flex items-center gap-1 text-[#0B4A76] group-hover:text-green-500 transition"
>
  Learn more →
</a>

  </div>

  {/* Card 5 */}
  <div className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left hover:bg-[#00274C]">
    <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4 border-2 border-green-500">
      <Rocket className="w-6 h-6 text-green-500 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-white transition">
      Advisory & Consultation
    </h3>
    <p className="text-gray-400 text-sm mb-3 group-hover:text-white">
      Proactive tax planning, business growth consultation, financial structuring, and risk assessment.
    </p>
    <div className="w-full h-[1px] bg-green-500 mb-3" />
    <a
  href="/services"
  className="font-semibold inline-flex items-center gap-1 text-[#0B4A76] group-hover:text-green-500 transition"
>
  Learn more →
</a>

  </div>

  {/* Card 6 */}
  <div className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left hover:bg-[#00274C]">
    <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4 border-2 border-green-500">
      <ShieldCheck className="w-6 h-6 text-green-500 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-white transition">
      Advanced Features
    </h3>
    <p className="text-gray-400 text-sm mb-3 group-hover:text-white">
      Software setup (Xero/MYOB), property investment accounting, payroll management, and custom corporate solutions.
    </p>
    <div className="w-full h-[1px] bg-green-500 mb-3" />
    <a
  href="/services"
  className="font-semibold inline-flex items-center gap-1 text-[#0B4A76] group-hover:text-green-500 transition"
>
  Learn more →
</a>

  </div>
    </div>
  </div>
</section>


{/*  WHY CHOOSE NOVA TAX */}
<section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Image */}
    <div className="relative">
      <Image
        src="/whychoose.jpg"   
        alt="Why Choose Nova Tax"
        width={600}
        height={700}
        className="rounded-3xl object-cover"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 md:whitespace-nowrap">
      Why Choose <span className="text-green-600">Nova Tax?</span>
      </h2>


      <p className="text-gray-500 mb-8 leading-relaxed">
        We combine professional expertise with modern technology to provide
        a seamless, reliable experience. Our goal is to improve your financial
        literacy while ensuring full compliance.
      </p>

      {/* Points */}
      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Comprehensive Platform
            </h4>
            <p className="text-gray-500 text-sm">
              All your tax, accounting, and advisory needs in one place.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Educational Focus
            </h4>
            <p className="text-gray-500 text-sm">
              We provide resources to help you understand your business finances.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Software Integration
            </h4>
            <p className="text-gray-500 text-sm">
              Expert setup and training for Xero, QuickBooks, and MYOB.
            </p>
          </div>
        </div>

      </div>

      {/* Button */}
      <a
  href="/our-mission"
  className="mt-8 inline-block bg-[#0A2E5C] text-white px-6 py-3 rounded-lg hover:bg-[#00274C] transition"
>
  Our Mission
</a>

    </div>

    {/* ================= PRICING SECTION ================= */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14 w-full">
      <h2 className="text-4xl font-bold text-gray-900">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mt-3">
        Packages designed for every stage of your financial journey.
      </p>
    </div>

    {/* Cards Horizontal */}
    <div className="flex justify-center gap-8 flex-wrap lg:flex-nowrap">

      {/* Individual Card */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col w-[450px] h-auto hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">Individual</h3>
        <p className="text-sm text-gray-400 mb-6">For employees and sole traders.</p>
        <div className="text-3xl font-bold mb-6">
          $199 <span className="text-sm font-normal text-gray-400">/year</span>
        </div>
        <ul className="space-y-3 mb-6 flex-1">
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Standard Tax Return</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Deduction Optimization</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> ATO Compliance Check</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Email Support</li>
        </ul>
        <button className="w-full border border-green-500 text-gray-700 py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
          Get Started
        </button>
      </div>

      {/* Small Businesses Card */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col w-[450px] h-auto hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">Small Businesses</h3>
        <p className="text-sm text-gray-400 mb-6">For growing companies & startups.</p>
        <div className="text-3xl font-bold mb-6">
          $149 <span className="text-sm font-normal text-gray-400">/year</span>
        </div>
        <ul className="space-y-3 mb-6 flex-1">
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Quarterly BAS Prep</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Annual Company Tax Return</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Xero/MYOB Setup</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Financial Reporting</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Priority Support</li>
        </ul>
        <button className="w-full border border-green-500 text-gray-700 py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
          Get Started
        </button>
      </div>

      {/* Corporate Clients Card */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col w-[450px] h-auto hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">Corporate Clients</h3>
        <p className="text-sm text-gray-400 mb-6">For growing companies & startups.</p>
        <div className="text-3xl font-bold mb-6">Custom</div>
        <ul className="space-y-3 mb-6 flex-1">
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Full Service Accounting</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Monthly Advisory Meeting</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Payroll & Staff Management</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Strategic Tax Planning</li>
          <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> Dedicated Account Manager</li>
        </ul>
        <button className="w-full border border-green-500 text-gray-700 py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
          Get Started
        </button>
      </div>

    </div>
  </div>
</section>
  </div>
</section>

   {/* Footer Section */}
<footer className="bg-[#002140] text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      
      {/* Brand Section */}
<div className="space-y-6">
  <div className="flex items-center gap-2">
    {/* LOGO IMAGE START */}
    <div className="relative w-[180px] h-[50px]">
      <Image
        src="/footerlogo.png" 
        alt="Nova Tax Advisory Logo"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
    {/* LOGO IMAGE END */}
  </div>
        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
          Nova Tax provides professional guidance, not automated filing. We are your partners in compliance and business growth, serving clients across Australia.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-500 transition"><Facebook size={20} /></a>
          <a href="#" className="hover:text-green-500 transition"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-green-500 transition"><Twitter size={20} /></a>
        </div>
      </div>

      {/* Services Column */}
      {/* Services Column */}
      <div className="lg:ml-8">
        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-sm">Services</h4>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Individual Tax</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Business Tax</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Accounting</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Advisory</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">GST & BAS</a></li>
        </ul>
      </div>


      {/* Company Column */}
      <div>
        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-sm">Company</h4>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">About Nova Tax</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Our Team</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Careers</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact Us</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</a></li>
          <li><a href="#" className="relative inline-block hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Terms of Service</a></li>
        </ul>
      </div>

      {/* Contact Column */}
      <div>
        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-sm">Contact Information</h4>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li>10/12 Childs St Lidcombe,<br />NSW, 2141</li>
          <li>
            <a href="tel:0249060967" className="underline hover:text-white decoration-gray-500">
              02 4906 0967
            </a>
          </li>
          <li>
            <a href="mailto:accounts@novatax.com.au" className="underline hover:text-white decoration-gray-500">
              accounts@novatax.com.au
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400 gap-4">
      <p>
        © 2024 NOVA TAX ADVISORY. All Rights Reserved. Created by <span className="underline cursor-pointer">NOVATAX</span>
      </p>
      <p className="text-right max-w-md italic">
        Liability limited by a scheme approved under Professional Standards legislation.
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}
