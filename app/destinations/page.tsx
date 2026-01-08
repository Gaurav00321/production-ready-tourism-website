"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { DestinationCard } from "@/components/destination-card"
import { supabase } from "@/lib/supabase"
import { Loader2, Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])

  const regions = ['North India', 'South India', 'West India', 'East India', 'Central India', 'North East India', 'Islands']

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Fetch categories
        const { data: catData, error: catError } = await supabase
          .from('categories')
          .select('*')
          .order('sort_order')
        
        if (catError) throw catError
        setCategories(catData || [])

        // Fetch destinations with category info
        const { data: destData, error: destError } = await supabase
          .from('destinations')
          .select(`
            *,
            categories (
              name,
              slug
            )
          `)
          .order('popularity_rank')

        if (destError) throw destError
        setDestinations(destData || [])

      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.state?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategories.length === 0 || 
                            (dest.categories && selectedCategories.includes(dest.categories.slug))

    const matchesRegion = selectedRegions.length === 0 || 
                          selectedRegions.includes(dest.region)

    return matchesSearch && matchesCategory && matchesRegion
  })

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev => 
      prev.includes(slug) ? prev.filter(c => c !== slug) : [...prev, slug]
    )
  }

  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedRegions([])
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-transparent">
      <PageHeader 
        title="Find Your Paradise" 
        subtitle="From the snow-capped Himalayas to the tropical backwaters, discover the incredible diversity of India."
        backgroundImage="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop"
        searchPlaceholder="Search by name, city, or state..."
        // We will override the default search logic with our own custom search bar below for cleaner flow or keep it simple
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Sheet */}
          <div className="lg:hidden mb-6 flex items-center justify-between gap-4">
             <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input 
                  placeholder="Search destinations..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white"
                />
             </div>
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                  <Filter className="mr-2 h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-neutral-900 border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-white">Filters</SheetTitle>
                  <SheetDescription>Refine your destination search.</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                   {/* Mobile Categories */}
                   <div className="space-y-3">
                      <h3 className="font-semibold text-teal-400">Categories</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {categories.map(cat => (
                          <div key={cat.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-cat-${cat.slug}`} 
                              checked={selectedCategories.includes(cat.slug)}
                              onCheckedChange={() => toggleCategory(cat.slug)}
                              className="border-white/50 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                            />
                            <label htmlFor={`mobile-cat-${cat.slug}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80">
                              {cat.name}
                            </label>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* Mobile Regions */}
                   <div className="space-y-3">
                      <h3 className="font-semibold text-teal-400">Regions</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {regions.map(region => (
                          <div key={region} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-reg-${region}`}
                              checked={selectedRegions.includes(region)}
                              onCheckedChange={() => toggleRegion(region)}
                              className="border-white/50 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                            />
                            <label htmlFor={`mobile-reg-${region}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80">
                              {region}
                            </label>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </SheetContent>
             </Sheet>
          </div>

          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64 shrink-0 space-y-8">
             {/* Search */}
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white"
                />
             </div>

             {/* Selected Filters */}
             {(selectedCategories.length > 0 || selectedRegions.length > 0) && (
               <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white/60">Active Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-auto p-0 text-xs text-teal-400 hover:text-teal-300">
                      Clear All
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map(c => (
                      <Badge key={c} variant="secondary" className="bg-teal-500/20 text-teal-200 border-teal-500/30 hover:bg-teal-500/30">
                        {categories.find(cat => cat.slug === c)?.name}
                        <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => toggleCategory(c)} />
                      </Badge>
                    ))}
                    {selectedRegions.map(r => (
                      <Badge key={r} variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30 hover:bg-purple-500/30">
                        {r}
                        <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => toggleRegion(r)} />
                      </Badge>
                    ))}
                  </div>
               </div>
             )}

             {/* Categories */}
             <div className="space-y-4">
                <h3 className="font-bold text-white text-lg">Categories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <div key={cat.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`cat-${cat.slug}`} 
                        checked={selectedCategories.includes(cat.slug)}
                        onCheckedChange={() => toggleCategory(cat.slug)}
                        className="border-white/50 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                      />
                      <label htmlFor={`cat-${cat.slug}`} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/70 hover:text-white cursor-pointer select-none">
                        {cat.name}
                      </label>
                    </div>
                  ))}
                </div>
             </div>

             {/* Regions */}
             <div className="space-y-4">
                <h3 className="font-bold text-white text-lg">Regions</h3>
                <div className="space-y-2">
                  {regions.map(region => (
                    <div key={region} className="flex items-center space-x-2">
                       <Checkbox 
                        id={`reg-${region}`}
                        checked={selectedRegions.includes(region)}
                        onCheckedChange={() => toggleRegion(region)}
                        className="border-white/50 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                      />
                      <label htmlFor={`reg-${region}`} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/70 hover:text-white cursor-pointer select-none">
                        {region}
                      </label>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Results Grid */}
          <div className="flex-1">
             <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                  {filteredDestinations.length > 0 ? (
                    <>Showing {filteredDestinations.length} Destinations</>
                  ) : (
                    <>No destinations found</>
                  )}
                </h2>
                {/* Could add sorting here later */}
             </div>

             {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="h-[400px] w-full bg-white/5 rounded-3xl animate-pulse" />
                  ))}
                </div>
             ) : (
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
                  {filteredDestinations.map((dest) => (
                    <DestinationCard 
                      key={dest.id} 
                      title={dest.name}
                      location={dest.city ? `${dest.city}, ${dest.state}` : dest.state}
                      image={dest.image_url || "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop"} // Fallback image
                      price="$500+" // Placeholder price as new schema doesn't have price yet
                      rating={4.8} // Placeholder
                      slug={dest.slug}
                      description={dest.description}
                      className="h-[400px]"
                    />
                  ))}
               </div>
             )}

             {!loading && filteredDestinations.length === 0 && (
               <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-white/50 text-lg">No destinations match your filters.</p>
                  <Button variant="link" onClick={clearFilters} className="text-teal-400 mt-2">Clear all filters</Button>
               </div>
             )}
          </div>
          
        </div>
      </div>
    </div>
  )
}
