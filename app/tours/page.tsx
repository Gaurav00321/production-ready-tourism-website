"use client"

import { PageHeader } from "@/components/page-header"
import { TourCard } from "@/components/tour-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ToursPage() {
  const featuredTours = [
    {
      title: "Royal Rajasthan on Wheels",
      duration: "7 Days / 6 Nights",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1927&auto=format&fit=crop",
      price: "$3,500",
      groupSize: "Luxury Train",
      slug: "royal-rajasthan",
      inclusions: ["All Meals", "Luxury Suite", "Private Guide", "Transport"],
    },
    {
      title: "Spiritual Ganges Journey",
      duration: "10 Days / 9 Nights",
      image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=2070&auto=format&fit=crop",
      price: "$1,800",
      slug: "ganges-journey",
      inclusions: ["Breakfast", "3-Star Hotels", "Boat Rides", "Yoga"],
    },
    {
      title: "Kerala Ayurveda Retreat",
      duration: "14 Days / 13 Nights",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2021&auto=format&fit=crop",
      price: "$2,200",
      slug: "kerala-ayurveda",
      inclusions: ["Wellness Meals", "Resort Stay", "Treatments", "Consultation"],
    },
  ]

  const heritageTours = [
    {
      title: "Grand Chola Temples",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop",
      price: "$900",
      slug: "chola-temples",
      inclusions: ["Breakfast", "Heritage Hotels", "Expert Guide", "Transfers"],
    },
    {
      title: "Mughal Empire Trail",
      duration: "6 Days / 5 Nights",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
      price: "$1,100",
      slug: "mughal-trail",
      inclusions: ["Breakfast", "4-Star Hotels", "Entry Fees", "Guide"],
    },
     {
      title: "Cave Temples of Ajanta & Ellora",
      duration: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1974&auto=format&fit=crop",
      price: "$750",
      slug: "ajanta-ellora",
      inclusions: ["Breakfast", "Hotel Stay", "Flights", "Guide"],
    },
  ]

  const natureTours = [
    {
      title: "Tiger Safari in Ranthambore",
      duration: "3 Days / 2 Nights",
      image: "https://images.unsplash.com/photo-1588514936336-613d115e5864?q=80&w=1974&auto=format&fit=crop",
      price: "$850",
      slug: "ranthambore-safari",
      inclusions: ["All Meals", "Jungle Lodge", "Jeep Safari", "Naturalist"],
    },
    {
      title: "Valley of Flowers Trek",
      duration: "6 Days / 5 Nights",
      image: "https://images.unsplash.com/photo-1628186103348-26f6eb8b7156?q=80&w=1932&auto=format&fit=crop",
      price: "$600",
      slug: "valley-of-flowers",
      inclusions: ["All Meals", "Camping", "Trek Guide", "Permits"],
    },
    {
      title: "Sundarbans Boat Jungle Safari",
      duration: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1572097662444-658784b25667?q=80&w=1932&auto=format&fit=crop",
      price: "$550",
      slug: "sundarbans",
      inclusions: ["All Meals", "Boat Stay", "Permits", "Guide"],
    },
  ]

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
            <div className="flex justify-center">
                <TabsList className="bg-white/10 backdrop-blur-md border border-white/10 p-1 rounded-full overflow-x-auto max-w-full">
                    <TabsTrigger value="featured" className="rounded-full px-6 py-2 data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Featured</TabsTrigger>
                    <TabsTrigger value="heritage" className="rounded-full px-6 py-2 data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Heritage & Culture</TabsTrigger>
                    <TabsTrigger value="nature" className="rounded-full px-6 py-2 data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all">Nature & Wildlife</TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="featured" className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Signature Experiences</h2>
                    <p className="text-white/60">Our most exclusive and sought-after tour packages.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {natureTours.map((tour, i) => (
                        <TourCard key={i} {...tour} />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
