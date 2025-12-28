"use client"

import { use, useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Clock, Star, Info, Utensils, Hotel, Camera, ArrowLeft } from "lucide-react"

// Mock Data Store (Ideally this would come from a CMS or API)
const destinations: Record<string, any> = {
  "agra": {
    title: "The Taj Mahal, Agra",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
    price: "$1,200",
    rating: 4.9,
    description: "Witness the timeless beauty of the Taj Mahal, a symbol of eternal love. Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this ivory-white marble mausoleum is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
    highlights: ["Sunrise View of Taj Mahal", "Visit Agra Fort", "Mehtab Bagh at Sunset", "Local Marble Craft Workshops"],
    itinerary: [
      { day: 1, title: "Arrival & Sightseeing", desc: "Arrive in Agra, check into your heritage hotel. Evening visit to Mehtab Bagh." },
      { day: 2, title: "The Taj Mahal", desc: "Early morning sunrise tour of the Taj Mahal. Visit Agra Fort in the afternoon." },
      { day: 3, title: "Fatehpur Sikri", desc: "Day trip to the abandoned city of Fatehpur Sikri before departure." }
    ]
  },
  "kerala": {
    title: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop",
    price: "$950",
    rating: 4.8,
    description: "Drift through the serene palm-fringed canals on a traditional houseboat. Kerala, known as 'God's Own Country', offers a tranquil escape with its intricate network of backwaters, lush greenery, and rich culture.",
    highlights: ["Houseboat Cruise", "Ayurvedic Massage", "Village Life Tour", "Kathakali Performance"],
    itinerary: [
      { day: 1, title: "Boarding Houseboat", desc: "Board your private houseboat. Cruise through lush canals." },
      { day: 2, title: "Village Walk", desc: "Explore local villages and witness coir making. Evening cultural show." },
      { day: 3, title: "Departure", desc: "Breakfast on board and disembarkation." }
    ]
  },
  "jaipur": {
    title: "Jaipur, The Pink City",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
    price: "$1,100",
    rating: 4.8,
    description: "Explore magnificent forts, palaces, and vibrant bazaars in the heart of Rajasthan. Jaipur is a wonderland of culture and heritage, painted in pink hues representing hospitality.",
    highlights: ["Amber Fort Elephant Ride", "Hawa Mahal", "City Palace Museum", "Johari Bazaar Shopping"],
    itinerary: [
      { day: 1, title: "Arrival in Pink City", desc: "Check-in. Evening visit to Chokhi Dhani for traditional dinner." },
      { day: 2, title: "Forts & Palaces", desc: "Full day tour of Amber Fort, Nahargarh, and Jaigarh." },
      { day: 3, title: "City Tour", desc: "Visit City Palace, Jantar Mantar, and Hawa Mahal." }
    ]
  }
}

export default function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }  = use(params)
  const destination = destinations[slug] || destinations["agra"]; // Fallback for demo if slug not found

  if (!destination) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-transparent pb-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 container mx-auto">
          <Link href="/destinations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 size-4" /> Back to Destinations
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-teal-300 mb-2 font-medium tracking-wide uppercase text-sm">
                <MapPin className="size-4" />
                {destination.location}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl">{destination.title}</h1>
              <div className="flex items-center gap-4 text-white/90">
                 <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{destination.rating}</span>
                 </div>
                 <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <Clock className="size-4" />
                    <span>3-5 Days Recommended</span>
                 </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl min-w-[300px]">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Starting from</p>
              <div className="text-4xl font-bold text-white mb-4">{destination.price} <span className="text-lg font-normal text-white/60">/ person</span></div>
              <Button size="lg" className="w-full rounded-full bg-teal-500 hover:bg-teal-400 text-white font-semibold text-lg h-12">
                Book This Trip
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
           {/* Description */}
           <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Info className="text-teal-400" /> About this Destination
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                {destination.description}
              </p>
           </div>

           {/* Highlights */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Camera className="text-teal-400" /> Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="size-2 rounded-full bg-teal-500" />
                    <span className="text-white/90 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
           </div>

           {/* Itinerary Preview */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                 <Calendar className="text-teal-400" /> Suggested Itinerary
              </h2>
              <div className="space-y-6 relative border-l border-white/10 ml-3 pl-8 pb-4">
                 {destination.itinerary.map((item: any, i: number) => (
                    <div key={i} className="relative">
                       <div className="absolute -left-[41px] top-0 size-6 rounded-full bg-teal-900 border-2 border-teal-500 flex items-center justify-center text-[10px] text-white font-bold">
                          {item.day}
                       </div>
                       <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                       <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Why Book With Us?</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400"><Star className="size-4" /></div>
                        <div className="text-sm">
                            <span className="block text-white font-medium">5-Star Experiences</span>
                            <span className="text-white/50">Curated by local experts</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400"><Utensils className="size-4" /></div>
                        <div className="text-sm">
                            <span className="block text-white font-medium">Authentic Cuisine</span>
                            <span className="text-white/50">Best local food spots</span>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400"><Hotel className="size-4" /></div>
                        <div className="text-sm">
                            <span className="block text-white font-medium">Premium Stays</span>
                            <span className="text-white/50">Handpicked luxury hotels</span>
                        </div>
                    </li>
                </ul>
                <Button className="w-full mt-8 rounded-xl bg-white text-black hover:bg-gray-100 font-bold">
                    Talk to an Expert
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
