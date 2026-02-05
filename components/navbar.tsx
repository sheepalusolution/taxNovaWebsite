"use client"

import Image from "next/image"
import Link from "next/link"
import { PhoneForwarded, ChevronDown } from "lucide-react"

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources", hasDropdown: true },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ]

  return (
    <header className="w-full bg-white h-[80px] border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto h-full flex items-center px-10 justify-between">

        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-12">
          <Image
            src="/nta.png"
            alt="TaxNova Logo"
            width={177}
            height={50}
            priority
          />

          {/* Menu items */}
          <nav className="hidden lg:flex items-center">
            {menuItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-1
                  text-[16px] leading-[16px]
                  font-inter font-semibold
                  text-gray-700
                  transition-colors duration-300
                  hover:text-[#960000]
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-[#960000]
                  after:transition-all after:duration-300
                  hover:after:w-full
                  ${idx !== menuItems.length - 1 ? "mr-[30px]" : ""}`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Phone + CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-inter text-gray-700">
            <PhoneForwarded size={25} className="text-green-500" />
            <span className="underline underline-offset-4 text-[16px] font-semibold">
              02 4906 0967
            </span>
          </div>

          <Link
            href="/book-consultation"
            className="bg-[#0A2E5C] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#082448] transition"
          >
            Book Consultation
          </Link>
        </div>

      </div>
    </header>
  )
}
