import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hyperia</h3>
            <p className="text-sm text-muted-foreground">
              Expert financial consulting services for businesses and individuals.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Financial Planning</li>
              <li>Investment Management</li>
              <li>Tax Consulting</li>
              <li>Retirement Planning</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
            <address className="text-sm not-italic">
              <p>123 Finance Street</p>
              <p>New York, NY 10001</p>
              <p>Email: info@financewise.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2023 Hyperia Finance Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

