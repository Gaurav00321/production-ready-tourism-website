"use client"

import { PageHeader } from "@/components/page-header"
import { DestinationCard } from "@/components/destination-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DestinationsPage() {
  const featuredDestinations = [
    {
      title: "The Taj Mahal, Agra",
      location: "Agra, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
      price: "$1,200",
      rating: 4.9,
      slug: "agra",
      description: "Witness the timeless beauty of the Taj Mahal, a symbol of eternal love.",
    },
    {
      title: "Kerala Backwaters",
      location: "Alleppey, Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop",
      price: "$950",
      rating: 4.8,
      slug: "kerala",
      description: "Drift through the serene palm-fringed canals on a traditional houseboat.",
    },
    {
        title: "Jaipur, The Pink City",
        location: "Jaipur, Rajasthan",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
        price: "$1,100",
        rating: 4.8,
        slug: "jaipur",
        description: "Explore magnificent forts, palaces, and vibrant bazaars in the heart of Rajasthan."
    }
  ]

  const firstTimeDestinations = [
    {
      title: "Golden Triangle Tour",
      location: "Delhi, Agra, Jaipur",
      image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=2000&auto=format&fit=crop",
      price: "$1,500",
      rating: 4.9,
      slug: "golden-triangle",
      description: "The perfect introduction to India's rich history and culture.",
    },
    {
      title: "Varanasi - Spiritual Capital",
      location: "Varanasi, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop",
      price: "$800",
      rating: 4.7,
      slug: "varanasi",
      description: "Experience the spiritual essence of India on the banks of the Ganges.",
    },
      {
      title: "Goa Beaches",
      location: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
      price: "$1,000",
      rating: 4.6,
      slug: "goa",
      description: "Relax on pristine beaches and enjoy the vibrant nightlife and Portuguese heritage.",
    },
  ]

  const adventureDestinations = [
    {
      title: "Leh Ladakh Expedition",
      location: "Ladakh",
      image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
      price: "$1,800",
      rating: 5.0,
      slug: "ladakh",
      description: "Conquer high passes and witness the stark beauty of the Himalayas.",
    },
    {
      title: "Rishikesh Rafting",
      location: "Rishikesh, Uttarakhand",
      image: "https://images.unsplash.com/photo-1517260739337-6799d2ccfa23?q=80&w=2070&auto=format&fit=crop",
      price: "$600",
      rating: 4.8,
      slug: "rishikesh",
      description: "Adrenaline-pumping white water rafting on the holy Ganges river.",
    },
     {
      title: "Andaman Islands Scuba",
      location: "Andaman & Nicobar",
      image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop",
      price: "$2,200",
      rating: 4.9,
      slug: "andaman",
      description: "Dive into crystal clear waters and discover vibrant coral reefs.",
    },
  ]

  return (
    <div className="min-h-screen bg-transparent">
      <PageHeader 
        title="Find Your Paradise" 
        subtitle="From the snow-capped Himalayas to the tropical backwaters, discover the incredible diversity of India."
        backgroundImage="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop"
        searchPlaceholder="Search destinations (e.g., Kerala, Jaipur)..."
      />

      <div className="container mx-auto px-4 py-20">
        <Tabs defaultValue="featured" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="bg-white/10 backdrop-blur-md border border-white/10 p-1 rounded-full">
              <TabsTrigger value="featured" className="rounded-full px-6 py-2 data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Featured</TabsTrigger>
              <TabsTrigger value="first-time" className="rounded-full px-6 py-2 data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">First Time</TabsTrigger>
              <TabsTrigger value="adventure" className="rounded-full px-6 py-2 data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Adventure</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-2">Editor's Picks</h2>
                <p className="text-white/60">Our most popular and highly rated destinations for this season.</p>
             </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((dest, i) => (
                <DestinationCard key={i} {...dest} className="h-[450px]" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="first-time" className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-2">First Time in India?</h2>
                <p className="text-white/60">Classic routes and must-visit places for your inaugural journey.</p>
             </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {firstTimeDestinations.map((dest, i) => (
                <DestinationCard key={i} {...dest} className="h-[450px]" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="adventure" className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-2">Thrill Seekers & Nature Lovers</h2>
                <p className="text-white/60">Go beyond the ordinary with these adrenaline-fueled destinations.</p>
             </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adventureDestinations.map((dest, i) => (
                <DestinationCard key={i} {...dest} className="h-[450px]" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
