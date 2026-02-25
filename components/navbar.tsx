"use client"

import Image from "next/image"
import Link from "next/link"
import { PhoneForwarded, ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})

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
  ]

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[80px]">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <Image
            src="/nta.png"
            alt="TaxNova Logo"
            width={170}
            height={50}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8">

          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[16px] font-semibold text-gray-700 hover:text-[#960000] transition"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={14} />}
              </Link>

              {item.dropdown && (
                <div className="absolute left-0 top-full mt-3 w-[260px] bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="py-3 text-sm">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="block px-5 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#960000] transition"
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

          {/* CONTACT */}
          <Link
            href="/contact"
            className="text-[16px] font-semibold text-gray-700 hover:text-[#960000] transition"
          >
            Contact
          </Link>

          {/* PRICING */}
          <div className="relative group">
            <Link
              href="/pricing"
              className="flex items-center gap-1 text-[16px] font-semibold text-gray-700 hover:text-[#960000] transition"
            >
              Pricing <ChevronDown size={14} />
            </Link>

            <div className="absolute left-0 top-full mt-3 w-[240px] bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-3 text-sm">
                {pricingDropdown.map((plan) => (
                  <li key={plan.name}>
                    <Link
                      href={plan.href}
                      className="block px-5 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#960000] transition"
                    >
                      {plan.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-2 text-[15px] font-semibold text-gray-700 whitespace-nowrap">
            <PhoneForwarded size={20} className="text-green-500" />
            <span className="underline underline-offset-4">
              02 4906 0967
            </span>
          </div>

        </nav>

        {/* CTA BUTTONS */}
        <div className="hidden xl:flex items-center gap-4">
          <Link
            href="/tax-return"
            className="border border-[#0A2E5C] text-[#0A2E5C] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A2E5C] hover:text-white transition whitespace-nowrap"
          >
            Tax Return
          </Link>

          <Link
            href="/book-consultation"
            className="bg-[#0A2E5C] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#082448] transition whitespace-nowrap"
          >
            Book Consultation
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-2">

            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center justify-between py-2 text-gray-700 font-semibold hover:text-[#960000] transition"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} />}
                </button>

                {item.dropdown && openDropdowns[item.name] && (
                  <div className="flex flex-col pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="py-2 text-gray-700 hover:text-[#960000] transition"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="py-2 text-gray-700 font-semibold hover:text-[#960000] transition"
            >
              Contact
            </Link>

            {/* Pricing Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => toggleDropdown("Pricing")}
                className="flex items-center justify-between py-2 text-gray-700 font-semibold hover:text-[#960000] transition"
              >
                Pricing <ChevronDown size={16} />
              </button>

              {openDropdowns["Pricing"] && (
                <div className="flex flex-col pl-4">
                  {pricingDropdown.map((plan) => (
                    <Link
                      key={plan.name}
                      href={plan.href}
                      className="py-2 text-gray-700 hover:text-[#960000] transition"
                    >
                      {plan.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 py-2 text-gray-700 font-semibold">
              <PhoneForwarded size={20} className="text-green-500" />
              <span className="underline underline-offset-4">
                02 4906 0967
              </span>
            </div>

            {/* CTA Buttons */}
            <Link
              href="/tax-return"
              className="border border-[#0A2E5C] text-[#0A2E5C] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A2E5C] hover:text-white transition mt-2"
            >
              Tax Return
            </Link>

            <Link
              href="/book-consultation"
              className="bg-[#0A2E5C] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#082448] transition mt-2"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}