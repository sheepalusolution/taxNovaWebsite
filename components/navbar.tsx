"use client"

import Image from "next/image"
import Link from "next/link"
import { PhoneForwarded, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { API_ENDPOINTS } from "@/config/api"

interface MenuItem {
  id: number
  name: string
  href: string
  children?: MenuItem[]
  isCta?: boolean
  ctaStyle?: "primary" | "outline"
  ctaPosition?: "right" | "top"
}

interface StrapiMenuItem {
  id: number
  attributes: {
    title: string
    url: string
    children?: {
      data: StrapiMenuItem[]
    }
  }
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(API_ENDPOINTS.MENU_ITEMS)

        if (!response.ok) {
          throw new Error(`Failed to fetch menu items: ${response.statusText}`)
        }

        const data = await response.json()
        console.log("API Response:", data)

        // Transform Strapi response to frontend format and sort by order
        const transformedItems: MenuItem[] = (data.data || [])
          .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
          .map((item: any) => ({
            id: item.id,
            name: item.Title || item.title || "",
            href: item.url || "/",
            isCta: item.isCta || false,
            ctaStyle: item.ctaStyle || "primary",
            ctaPosition: item.ctaPosition || "right",
            children: (item.children || [])
              .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
              .map((child: any) => ({
                id: child.id,
                name: child.Title || child.title || "",
                href: child.url || "/",
                isCta: child.isCta || false,
                ctaStyle: child.ctaStyle || "primary",
                ctaPosition: child.ctaPosition || "right",
              })),
          }))

        setMenuItems(transformedItems)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load menu items")
        console.error("Menu fetch error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMenuItems()
  }, [])

  const pricingDropdown = [
    { name: "Individual Plans", href: "/pricing/individual" },
    { name: "Business Plans", href: "/pricing/business" },
    { name: "Custom Packages", href: "/pricing/custom" },
  ]

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  // Helper function to get CTA button styling
  const getCtaClassName = (item: MenuItem): string => {
    if (!item.isCta) {
      return "flex items-center gap-1 text-[16px] font-semibold text-gray-700 hover:text-[#960000] transition"
    }

    // CTA styling
    const baseClass = "px-5 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap flex items-center gap-1"
    const styleClass = item.ctaStyle === "outline"
      ? "border border-[#0A2E5C] text-[#0A2E5C] hover:bg-[#0A2E5C] hover:text-white"
      : "bg-[#0A2E5C] text-white hover:bg-[#082448]"

    return `${baseClass} ${styleClass}`
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
        <nav className="hidden xl:flex items-center gap-8 pl-8">

          {isLoading ? (
            <div className="text-gray-500">Loading menu...</div>
          ) : error ? (
            <div className="text-red-500 text-sm">{error}</div>
          ) : (
            <>
              {menuItems.map((item) => (
                <div key={item.id} className={item.isCta ? "" : "relative group"}>
                  <Link
                    href={item.href}
                    className={getCtaClassName(item)}
                  >
                    {item.name}
                    {!item.isCta && item.children && item.children.length > 0 && <ChevronDown size={14} />}
                  </Link>

                  {!item.isCta && item.children && item.children.length > 0 && (
                    <div className=" overflow-hidden absolute left-0 top-full mt-3 w-[260px] bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <ul className="py-3 text-sm">
                        {item.children.map((subItem) => (
                          <li key={subItem.id}>
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

              {/* PHONE */}
              <div className="overflow-hidden flex items-center gap-2 text-[15px] font-semibold text-gray-700 whitespace-nowrap">
                <PhoneForwarded size={20} className="text-green-500" />
                <span className="underline underline-offset-4">
                  02 4906 0967
                </span>
              </div>
            </>
          )}

        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="xl:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="overflow-hidden lg:hidden bg-white border-t border-gray-200 ">
          <div className="flex flex-col px-6 py-4 gap-2">

            {menuItems.map((item) => (
              <div key={item.id} className="flex flex-col">
                {item.isCta ? (
                  <Link
                    href={item.href}
                    className={getCtaClassName(item) + " justify-center"}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => item.children && item.children.length > 0 && toggleDropdown(item.name)}
                      className="flex items-center justify-between py-2 text-gray-700 font-semibold hover:text-[#960000] transition"
                    >
                      {item.name}
                      {item.children && item.children.length > 0 && <ChevronDown size={16} />}
                    </button>

                    {item.children && item.children.length > 0 && openDropdowns[item.name] && (
                      <div className="flex flex-col pl-4">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className="py-2 text-gray-700 hover:text-[#960000] transition"
                          >
                            {subItem.name}
                           </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Phone */}
            <div className="flex items-center gap-2 py-2 text-gray-700 font-semibold">
              <PhoneForwarded size={20} className="text-green-500" />
              <span className="underline underline-offset-4">
                02 4906 0967
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
