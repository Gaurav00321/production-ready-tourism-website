"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Star, Users, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react"

// Mock Data Store
const tours: Record<string, any> = {
  "royal-rajasthan": {
    title: "Royal Rajasthan on Wheels",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1927&auto=format&fit=crop",
    price: "$3,500",
    groupSize: "Luxury Train",
    inclusions: ["All Meals", "Luxury Suite", "Private Guide", "Transport", "Entrance Fees", "Cultural Shows"],
    description: "Experience the grandeur of royal India aboard one of the world's most luxurious trains. Journey through the desert state of Rajasthan, visiting majestic forts, opulent palaces, and vibrant cities, all while enjoying world-class hospitality.",
    route: ["Delhi", "Jodhpur", "Udaipur", "Chittorgarh", "Sawai Madhopur", "Jaipur", "Khajuraho", "Varanasi", "Agra", "Delhi"],
    itinerary: [
       { day: "Day 1", title: "Welcome Aboard", desc: "Ceremonial welcome at Safdarjung Station, Delhi. Dinner on board." },
       { day: "Day 2", title: "The Blue City", desc: "Arrival in Jodhpur. Visit Mehrangarh Fort and Jaswant Thada." },
       { day: "Day 3", title: "City of Lakes", desc: "Excursion to Udaipur's City Palace and Crystal Gallery." },
       // ... simplified
    ]
  },
  "ganges-journey": {
     title: "Spiritual Ganges Journey",
    duration: "10 Days / 9 Nights",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=2070&auto=format&fit=crop",
    price: "$1,800",
    slug: "ganges-journey",
    inclusions: ["Breakfast", "3-Star Hotels", "Boat Rides", "Yoga", "Aarti Ceremony", "Local Guide"],
    description: "A soul-stirring journey along the sacred Ganges river. From the chaotic charm of Varanasi to the yoga capital of Rishikesh, experience the spiritual heart of India.",
    route: ["Delhi", "Varanasi", "Haridwar", "Rishikesh", "Delhi"],
     itinerary: [
       { day: "Day 1-2", title: "Arrival in Varanasi", desc: "Witness the evening Ganga Aarti. Morning boat ride." },
       { day: "Day 3-5", title: "Rishikesh & Haridwar", desc: "Yoga sessions by the river. Temple visits." },
       { day: "Day 6-7", title: "Ashram Life", desc: "Experience monastic life in a traditional ashram." },
    ]
  },
   "kerala-ayurveda": {
      title: "Kerala Ayurveda Retreat",
      duration: "14 Days / 13 Nights",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2021&auto=format&fit=crop",
      price: "$2,200",
      slug: "kerala-ayurveda",
      inclusions: ["Wellness Meals", "Resort Stay", "Treatments", "Consultation", "Yoga", "Meditation"],
      description: "Rejuvenate your mind, body, and soul with this authentic Ayurveda retreat in God's Own Country. Includes personalized treatments and consultations with expert Vaidyas.",
      route: ["Cochin", "Munnar", "Thekkady", "Alleppey", "Kovalam"],
       itinerary: [
       { day: "Day 1-3", title: "Detox & Consultation", desc: "Initial consultation and start of Panchakarma." },
       { day: "Day 4-10", title: "Intensive Treatments", desc: "Daily massages, yoga, and meditation." },
       { day: "Day 11-14", title: "Relaxation", desc: "Beach stay and departure." },
    ]
    },
}

export default function TourDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const tour = tours[slug] || tours["royal-rajasthan"] // Fallback

  if (!tour) return notFound()

  return (
    <div className="min-h-screen bg-transparent pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center pt-20">
           <Link href="/tours" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit">
            <ArrowLeft className="mr-2 size-4" /> Back to Tours
          </Link>
          <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-teal-500/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-1">
                      <Clock className="size-3.5" /> {tour.duration}
                  </span>
                   <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-1 border border-white/20">
                      <Users className="size-3.5" /> {tour.groupSize || "Small Group"}
                  </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">{tour.title}</h1>
          </div>
        </div>
      </div>

       <div className="container mx-auto px-4 -mt-16 md:-mt-20 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
              {/* Overview Card */}
              <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
                  <h2 className="text-2xl font-bold text-white mb-4">Tour Overview</h2>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed font-light mb-6">
                      {tour.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                      <div>
                          <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Route</p>
                          <p className="text-white/90 font-medium">{tour.route?.join(" → ")}</p>
                      </div>
                      <div>
                           <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Next Departure</p>
                          <p className="text-teal-400 font-medium">Oct 15, 2025</p>
                      </div>
                  </div>
              </div>

               {/* Inclusions */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                      {tour.inclusions.map((inc: string, i: number) => (
                          <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="size-5 text-teal-500 shrink-0" />
                              <span className="text-white/80">{inc}</span>
                          </div>
                      ))}
                  </div>
              </div>
              
              {/* Itinerary */}
               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
                   <h3 className="text-xl font-bold text-white mb-6">Itinerary</h3>
                   <div className="space-y-8">
                       {tour.itinerary.map((day: any, i: number) => (
                           <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                               <div className="w-full sm:w-16 shrink-0 pt-1">
                                   <span className="text-teal-400 font-bold text-lg sm:text-sm block">{day.day}</span>
                               </div>
                               <div>
                                   <h4 className="text-lg font-semibold text-white mb-2">{day.title}</h4>
                                   <p className="text-white/60">{day.desc}</p>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
              <div className="bg-teal-900/10 border border-teal-500/20 rounded-3xl p-6 backdrop-blur-xl sticky top-24">
                  <div className="mb-6 pb-6 border-b border-white/10">
                      <p className="text-white/50 text-sm mb-1">Total Trip Cost</p>
                      <div className="flex items-baseline gap-2">
                           <span className="text-4xl font-bold text-white">{tour.price}</span>
                           <span className="text-white/50">per person</span>
                      </div>
                  </div>

                  <div className="space-y-4 mb-8">
                      <div className="space-y-2">
                          <label className="text-xs text-white/70 uppercase">Select Dates</label>
                          <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-teal-500">
                              <option>Oct 15 - Oct 22, 2025</option>
                              <option>Nov 01 - Nov 08, 2025</option>
                          </select>
                      </div>
                      <div className="space-y-2">
                          <label className="text-xs text-white/70 uppercase">Guests</label>
                          <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-teal-500">
                              <option>2 Adults</option>
                              <option>1 Adult</option>
                              <option>Family (2A + 2C)</option>
                          </select>
                      </div>
                  </div>

                  <Button size="lg" className="w-full rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-bold h-12 shadow-lg shadow-teal-500/20 mb-4">
                      Book Now <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <p className="text-xs text-center text-white/40">No credit card required for enquiry</p>
              </div>
          </div>
       </div>
    </div>
  )
}
