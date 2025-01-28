"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Hyperia
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className={pathname === "/" ? "text-primary" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={pathname === "/services" ? "text-primary" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "text-primary" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "text-primary" : ""}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <AnimatedButton asChild>
            <Link href="/contact">Get Started</Link>
          </AnimatedButton>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header

