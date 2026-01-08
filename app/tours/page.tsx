"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { TourCard } from "@/components/tour-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { supabase } from "@/lib/supabase"
import { Loader2 } from "lucide-react"

export default function ToursPage() {
  const [tours, setTours] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data, error } = await supabase.from('tours').select('*')
        if (error) throw error
        if (data) setTours(data)
      } catch (error) {
        console.error('Error fetching tours:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchTours()
  }, [])

  const featuredTours = tours.filter(t => t.category === 'featured')
  const heritageTours = tours.filter(t => t.category === 'heritage')
  const natureTours = tours.filter(t => t.category === 'nature')

  return (
    <div className="min-h-screen bg-transparent">
      <PageHeader 
        title="Curated Journeys" 
        subtitle="Immerse yourself in authentic experiences crafted by travel experts."
        backgroundImage="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
        searchPlaceholder="Find your perfect tour (e.g., Safari, Yoga, History)..."
      />

      <div className="container mx-auto px-4 py-20">
        <Tabs defaultValue="featured" className="space-y-12">
            <div className="flex justify-start md:justify-center w-full overflow-x-auto no-scrollbar pb-2">
                <TabsList className="bg-white/10 backdrop-blur-md border border-white/10 p-1 rounded-full flex-nowrap h-auto">
                    <TabsTrigger value="featured" className="rounded-full px-4 md:px-6 py-2 whitespace-nowrap data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Featured</TabsTrigger>
                    <TabsTrigger value="heritage" className="rounded-full px-4 md:px-6 py-2 whitespace-nowrap data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Heritage & Culture</TabsTrigger>
                    <TabsTrigger value="nature" className="rounded-full px-4 md:px-6 py-2 whitespace-nowrap data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Nature & Wildlife</TabsTrigger>
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
                        <h2 className="text-3xl font-bold text-white mb-2">Signature Experiences</h2>
                        <p className="text-white/60">Our most exclusive and sought-after tour packages.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredTours.map((tour, i) => (
                            <TourCard key={i} {...tour} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="heritage" className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-2">Walk Through History</h2>
                        <p className="text-white/60">Discover the architectural marvels and timeless tales of ancient India.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {heritageTours.map((tour, i) => (
                            <TourCard key={i} {...tour} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="nature" className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-2">Into the Wild</h2>
                        <p className="text-white/60">Reconnect with nature in India's bio-diverse parks and landscapes.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {natureTours.map((tour, i) => (
                            <TourCard key={i} {...tour} />
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
