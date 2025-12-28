"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Get Travel Inspiration & Exclusive Deals</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-balance leading-relaxed">
            Subscribe to our newsletter and receive handpicked travel tips, destination guides, and special offers
            directly to your inbox
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-foreground h-12"
            />
            <Button type="submit" variant="secondary" size="lg" className="h-12 px-8">
              <Send className="size-4 mr-2" />
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-primary-foreground/70 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
