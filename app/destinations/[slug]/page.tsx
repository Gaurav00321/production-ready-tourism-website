import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Star, Info, Utensils, Hotel, Camera, ArrowLeft } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Metadata } from "next"

// Force dynamic rendering since we are fetching from DB
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getDestination(slug: string) {
  const { data, error } = await supabase
    .from('destinations')
    .select(`
      *,
      categories (
        name
      )
    `)
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return null
  }
  return data
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug }  = await params
  const destination = await getDestination(slug)

  if (!destination) {
    return {
      title: 'Destination Not Found',
    }
  }

  return {
    title: `${destination.name} | Royal Indian Voyage`,
    description: destination.description?.substring(0, 160) || `Explore ${destination.name} with Royal Indian Voyage.`,
    openGraph: {
      title: destination.name,
      description: destination.description,
      images: [destination.image_url || ''],
    },
  }
}

export default async function DestinationDetail({ params }: PageProps) {
  const { slug } = await params
  const destination = await getDestination(slug)

  if (!destination) {
    notFound()
  }

  // Generate generic placeholders using real data where possible
  const rating = 4.8 
  const price = "$500+" 
  const highlights = [
    `Explore ${destination.name}`, 
    `Visit key landmarks in ${destination.city || destination.state}`,
    "Authentic Local Cuisine", 
    "Photography Tour"
  ]

  const itinerary = [
     { day: 1, title: "Arrival", desc: `Arrive in ${destination.city || destination.state}, transfer to hotel.` },
     { day: 2, title: "Sightseeing", desc: `Full day exploration of ${destination.name} and surroundings.` },
     { day: 3, title: "Culture & Departure", desc: "Morning cultural walk and departure." }
  ]

  return (
    <div className="min-h-screen bg-transparent pb-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={destination.image_url || "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop"}
          alt={destination.name}
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
                {destination.city ? `${destination.city}, ${destination.state}` : destination.state}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl">{destination.name}</h1>
              <div className="flex items-center gap-4 text-white/90">
                 <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{rating}</span>
                 </div>
                 <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <Clock className="size-4" />
                    <span>3-5 Days Recommended</span>
                 </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl min-w-[300px]">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Starting from</p>
              <div className="text-4xl font-bold text-white mb-4">{price} <span className="text-lg font-normal text-white/60">/ person</span></div>
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
                {destination.description || "Experience the incredible beauty and culture of this destination."}
              </p>
           </div>

           {/* Highlights */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Camera className="text-teal-400" /> Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight: string, i: number) => (
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
                 {itinerary.map((item: any, i: number) => (
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
