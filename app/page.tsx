// app/page.tsx
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import {
  ShieldCheck,
  User,
  Laptop,
  Store,
  Building,
  Rocket,
  Facebook,
  Linkedin,
  Twitter,
  Check,
} from "lucide-react"

export const metadata = {
  title: "Professional Tax & Accounting Services in Australia",
  description:
    "Nova Tax Advisory offers expert individual, business, GST, BAS, and corporate tax solutions across Australia.",
}

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen`}>

      {/* Navbar */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

        {/* Optimized Background */}
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <div className="relative max-w-360 mx-auto h-full grid lg:grid-cols-2 items-center px-10">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center bg-[#0A2E5C] text-white text-xs font-semibold px-4 py-2 gap-2 rounded-full mb-6">
              <ShieldCheck size={14} />
              ATO COMPLIANT & TRUSTED
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0F1724] mb-6">
              Professional Tax <br />
              <span className="text-[#0A2E5C]">Guidance & Strategy</span>
            </h1>

            <div className="flex gap-4 mt-6">
              <Link
                href="/book-consultation"
                className="bg-[#0A2E5C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#082448] transition"
              >
                Book Consultation
              </Link>

              <Link
                href="/services"
                className="border border-green-500 px-6 py-3 rounded-lg font-bold hover:bg-green-500 hover:text-white transition"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:flex justify-end">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Consultation"
                width={520}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= TRUSTED SECTION ================= */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">
            Trusted by all business structures
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-gray-800">
            <div className="flex items-center gap-2"><User className="text-green-500" /> Individuals</div>
            <div className="flex items-center gap-2"><Laptop className="text-green-500" /> Freelancers</div>
            <div className="flex items-center gap-2"><Store className="text-green-500" /> Small Business</div>
            <div className="flex items-center gap-2"><Building className="text-green-500" /> Companies</div>
            <div className="flex items-center gap-2"><Rocket className="text-green-500" /> Startups</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">Comprehensive Tax Solutions</h2>
          <p className="text-gray-500 mb-14 max-w-2xl mx-auto">
            From simple personal returns to complex corporate structuring,
            Nova Tax covers every aspect of Australian taxation and accounting.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: User, title: "Individual Tax Services" },
              { icon: Building, title: "Business Tax Services" },
              { icon: Laptop, title: "Accounting & Bookkeeping" },
              { icon: Store, title: "GST & BAS Services" },
              { icon: Rocket, title: "Advisory & Consultation" },
              { icon: ShieldCheck, title: "Advanced Features" },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-6 rounded-xl shadow hover:bg-[#00274C] transition"
              >
                <service.icon className="w-8 h-8 text-green-500 mb-4 group-hover:text-white" />
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm group-hover:text-gray-200">
                  Professional tax solutions tailored for your needs.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 mb-14">
            Packages designed for every stage of your financial journey.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { title: "Individual", price: "$199/year" },
              { title: "Small Business", price: "$149/year" },
              { title: "Corporate", price: "Custom" },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>

                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-green-500" /> Tax Filing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-green-500" /> Compliance Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-green-500" /> Advisory
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="inline-block bg-[#0A2E5C] text-white px-6 py-3 rounded-lg hover:bg-[#00274C] transition"
                >
                  Get Started
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#002140] text-white py-10 text-center">
        <p className="text-sm">
          © 2024 NOVA TAX ADVISORY. All Rights Reserved.
        </p>
      </footer>

    </div>
  )
}