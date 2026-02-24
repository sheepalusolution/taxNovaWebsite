"use client"

import Image from "next/image"
import Link from "next/link"
import { PhoneForwarded, ChevronDown } from "lucide-react"

export default function Navbar() {
  const servicesDropdown = [
    { name: "Individual Tax Services", href: "/services/individual-tax" },
    { name: "Business Tax Services", href: "/services/business-tax" },
    { name: "Accounting & Bookkeeping", href: "/services/accounting" },
    { name: "GST & BAS", href: "/services/gst-bas" },
    { name: "Advisory & Consultation", href: "/services/advisory" },
    { name: "Advanced Services", href: "/services/advanced" },
  ]

  const aboutDropdown = [
    { name: "Company Overview", href: "/about/company-overview" },
    { name: "Our Team", href: "/about/team" },
    { name: "Why Choose Us", href: "/about/why-choose-us" },
  ]

  const resourcesDropdown = [
    { name: "Blogs / Articles", href: "/resources/blogs" },
    { name: "FAQs", href: "/resources/faqs" },
    { name: "eBooks & Downloads", href: "/resources/ebooks" },
    { name: "Calculators", href: "/resources/calculators" },
  ]

  const pricingDropdown = [
    { name: "Individual Plans", href: "/pricing/individual" },
    { name: "Business Plans", href: "/pricing/business" },
    { name: "Custom Packages", href: "/pricing/custom" },
  ]

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", dropdown: servicesDropdown },
    { name: "About", href: "/about", dropdown: aboutDropdown },
    { name: "Resources", href: "/resources", dropdown: resourcesDropdown },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing", dropdown: pricingDropdown },
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

          <nav className="hidden lg:flex items-center">
            {menuItems.map((item, idx) => (
              <div
                key={item.name}
                className={`relative group ${
                  idx !== menuItems.length - 1 ? "mr-[30px]" : ""
                }`}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1
                    text-[16px] leading-[16px]
                    font-inter font-semibold
                    text-gray-700
                    transition-colors duration-300
                    hover:text-[#960000]"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-4 w-[260px] bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="py-3">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#960000] transition"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Phone */}
          <div className="hidden md:flex items-center gap-2 text-sm font-inter text-gray-700">
            <PhoneForwarded size={25} className="text-green-500" />
            <span className="underline underline-offset-4 text-[16px] font-semibold">
              02 4906 0967
            </span>
          </div>

          {/* Tax Return (Outline CTA) */}
          <Link
            href="/tax-return"
            className="border border-[#0A2E5C] text-[#0A2E5C] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A2E5C] hover:text-white transition"
          >
            Tax Return
          </Link>

          {/* Book Consultation (Primary CTA) */}
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