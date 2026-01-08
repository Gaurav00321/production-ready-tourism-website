"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { DestinationCard } from "@/components/destination-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { supabase } from "@/lib/supabase"
import { Loader2 } from "lucide-react"

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const { data, error } = await supabase.from('destinations').select('*')
        if (error) throw error
        if (data) setDestinations(data)
      } catch (error) {
        console.error('Error fetching destinations:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchDestinations()
  }, [])

  const featuredDestinations = destinations.filter(d => d.category === 'featured')
  const firstTimeDestinations = destinations.filter(d => d.category === 'first-time')
  const adventureDestinations = destinations.filter(d => d.category === 'adventure')

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
          <div className="flex justify-start md:justify-center w-full overflow-x-auto no-scrollbar pb-2">
            <TabsList className="bg-white/10 backdrop-blur-md border border-white/10 p-1 rounded-full flex-nowrap h-auto">
              <TabsTrigger value="featured" className="rounded-full px-4 md:px-6 py-2 whitespace-nowrap data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Featured</TabsTrigger>
              <TabsTrigger value="first-time" className="rounded-full px-4 md:px-6 py-2 whitespace-nowrap data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">First Time</TabsTrigger>
              <TabsTrigger value="adventure" className="rounded-full px-4 md:px-6 py-2 whitespace-nowrap data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Adventure</TabsTrigger>
            </TabsList>
          </div>

          {loading ? (
             <div className="flex justify-center items-center py-20">
               <Loader2 className="h-8 w-8 animate-spin text-teal-500" />
             </div>
          ) : (
            <>
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
            </>
          )}
        </Tabs>
      </div>
    </div>
  )
}
