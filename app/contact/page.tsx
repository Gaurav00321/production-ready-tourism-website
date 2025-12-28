import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Contact | Royal Indian Voyage",
  description: "Begin your royal journey. Contact our concierge team for bespoke travel planning.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Concierge Line",
    details: "+91 98765 43210",
    subtitle: "24/7 Dedicated Support",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "concierge@royalindianvoyage.com",
    subtitle: "Response within 2 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: "The Oberoi Tower, Nariman Point, Mumbai",
    subtitle: "By Appointment Only",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon - Sat: 9:00 AM - 8:00 PM IST",
    subtitle: "Sunday: Closed",
  },
]

const faqs = [
  {
    question: "How do I initiate a booking?",
    answer: "Simply fill out the inquiry form below or contact our concierge directly. We will assign a dedicated travel designer to curate your itinerary from scratch.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer flexible cancellation terms for our premium packages. Most bookings can be fully refunded up to 21 days before departure. Specific terms will be detailed in your itinerary proposal.",
  },
  {
    question: "Do you handle visa arrangements?",
    answer: "Yes, our team provides full assistance with Indian visa applications, including e-visas and special permits for restricted areas like Ladakh or Arunachal Pradesh.",
  },
  {
    question: "Are the tours customizable?",
    answer: "Every aspect of a Royal Indian Voyage is 100% customizable. We don't believe in standard packages; we build your journey around your preferences, pace, and interests.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Dynamic Aura Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[140px] mix-blend-screen animate-blob animation-delay-4000" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-sm font-medium mb-8 animate-in fade-in zoom-in duration-700">
                <Sparkles className="size-4" />
                <span>We are listening</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 font-serif italic pr-2">Voyage</span>
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Whether you have a question about a destination or want to start planning your dream trip, our team remains at your disposal.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl animate-in slide-in-from-left duration-1000 delay-300">
                 <h2 className="text-3xl font-bold text-white mb-8">Send us an inquiry</h2>
                 <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-white/80">First Name</Label>
                            <Input id="first-name" placeholder="John" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500/50" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-white/80">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500/50" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/80">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500/50" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/80">Your Message</Label>
                        <Textarea id="message" placeholder="Tell us about your dream trip..." className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500/50 resize-none" />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-6 text-lg rounded-xl shadow-[0_0_20px_-5px_rgba(20,184,166,0.5)] transition-all hover:scale-[1.02]">
                        Send Message <Send className="ml-2 size-5" />
                    </Button>
                 </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-16 animate-in slide-in-from-right duration-1000 delay-300">
                <div className="grid sm:grid-cols-2 gap-6">
                     {contactInfo.map((info, i) => {
                         const Icon = info.icon
                         return (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                                <div className="size-12 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="size-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                                <p className="text-teal-400 font-medium mb-1">{info.details}</p>
                                <p className="text-xs text-white/40 uppercase tracking-wider">{info.subtitle}</p>
                            </div>
                         )
                     })}
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-white mb-8">Frequent Inquiries</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.05] transition-colors">
                            <AccordionTrigger className="text-white hover:no-underline hover:text-teal-400 py-6 text-lg">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-white/60 text-base pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
