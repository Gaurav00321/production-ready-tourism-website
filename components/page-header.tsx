"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { toast } from "sonner"

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage: string
  searchPlaceholder?: string
}

function HeaderSearchBar({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = () => {
    if (!query.trim()) {
       toast.error("Please enter a search term")
       return
    }

    toast.success("Searching...", {
      description: `Showing results for "${query}"`
    })
    
    // In a real app, this would route to a search page or filter the current list
    // For now, we simulate a navigation update to show it "works"
    const params = new URLSearchParams(searchParams.toString())
    params.set("search", query)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 pl-6 rounded-full flex items-center gap-2 shadow-2xl group focus-within:bg-white/15 transition-colors">
      <Search className="size-5 text-white/70 group-focus-within:text-teal-400" />
      <Input 
        type="text" 
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="border-none bg-transparent h-12 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
      />
      <Button 
          size="lg" 
          onClick={handleSearch}
          className="rounded-full bg-teal-500 hover:bg-teal-400 text-white px-8 h-12"
      >
        Search
      </Button>
    </div>
  )
}

export function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage,
  searchPlaceholder = "Search..."
}: PageHeaderProps) {
  return (
    <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 select-none">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover animate-in fade-in zoom-in duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-1000">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-200">
          {subtitle}
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
          <Suspense fallback={<div className="h-16 w-full bg-white/5 rounded-full animate-pulse" />}>
            <HeaderSearchBar placeholder={searchPlaceholder} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
