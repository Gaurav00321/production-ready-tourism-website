"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Globe, User, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const destinations = [
  {
    title: "North India",
    href: "/destinations#north",
    description: "The Himalayas, Taj Mahal, and the Royal forts of Rajasthan.",
  },
  {
    title: "South India",
    href: "/destinations#south",
    description: "Tropical backwaters, ancient temples, and spice plantations.",
  },
  {
    title: "East India",
    href: "/destinations#east",
    description: "The mystical Sundarbans, tea gardens of Darjeeling, and spiritual Ghats.",
  },
  {
    title: "West India",
    href: "/destinations#west",
    description: "The vibrant beaches of Goa and the bustling heart of Mumbai.",
  },
];

const tourTypes = [
  {
    title: "Heritage & Culture",
    href: "/tours?category=heritage",
    description: "Explore the architectural marvels and deep-rooted traditions.",
  },
  {
    title: "Nature & Wildlife",
    href: "/tours?category=nature",
    description: "Tiger safaris, mountain treks, and serene backwater cruises.",
  },
  {
    title: "Spiritual Journeys",
    href: "/tours?category=spiritual",
    description: "Experience the soul-stirring rituals and sacred sites of India.",
  },
  {
    title: "Luxury Train Tours",
    href: "/tours?category=luxury",
    description: "Journey like royalty aboard India's finest luxury trains.",
  },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Globe className="size-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Royal Indian Voyage</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex" delayDuration={0}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Indian Destinations</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem title="All Destinations" href="/destinations">
                    View all travel destinations we offer
                  </ListItem>
                  {destinations.map((destination) => (
                    <ListItem
                      key={destination.title}
                      title={destination.title}
                      href={destination.href}
                    >
                      {destination.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Indian Tours</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem title="All Tours" href="/tours">
                    Browse all available tour packages
                  </ListItem>
                  {tourTypes.map((tour) => (
                    <ListItem
                      key={tour.title}
                      title={tour.title}
                      href={tour.href}
                    >
                      {tour.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Globe className="size-5" />
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
              <DropdownMenuItem>中文</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Account */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="size-5" />
            <span className="sr-only">Account</span>
          </Button>

          <AnimatedButton className="hidden md:inline-flex">Book Now</AnimatedButton>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-white/10 bg-black/50 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/destinations"
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/tours"
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tours
                </Link>
                <Link
                  href="/blog"
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-white/10">
                  <AnimatedButton className="w-full justify-center">Book Now</AnimatedButton>
                  
                  <div className="flex items-center justify-center gap-6 mt-4">
                    {/* Social Icons */}
                    <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                      <Instagram className="size-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                      <Twitter className="size-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
                      <Facebook className="size-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none mb-1">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
``