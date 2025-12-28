import Link from "next/link"
import { Globe, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="size-8 text-primary" />
              <span className="text-xl font-bold">Royal Indian Voyage</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for luxury travel across India. Discover, explore, and create
              memories that last a lifetime in the land of heritage and colors.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="size-9">
                <Facebook className="size-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="size-9">
                <Twitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="size-9">
                <Instagram className="size-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="size-9">
                <Youtube className="size-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/booking-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">Taj Mahal Colony, Agra, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-muted-foreground" />
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-muted-foreground" />
                <a
                  href="mailto:contact@royalindianvoyage.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@royalindianvoyage.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="h-9 text-sm" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Royal Indian Voyage. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/sitemap" className="hover:text-foreground transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
