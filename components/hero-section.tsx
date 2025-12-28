
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [date, setDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!location.trim()) {
      toast.error("Please enter a destination", {
        description: "We need to know where you want to go!",
      });
      return;
    }

    if (!date) {
      toast.error("Please select a date", {
        description: "Let us know when you're planning to travel.",
      });
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) {
       toast.error("Invalid date selected", {
        description: "You cannot travel to the past! Please select a future date.",
      });
      return;
    }

    const searchParams = new URLSearchParams({
      destination: location,
      date: date.toISOString(),
    });

    toast.success("Searching for flights...", {
      description: ` looking for trips to ${location} on ${format(date, "PPP")}`,
    });
    
    // Simulate a small delay for effect then push
    setTimeout(() => {
        router.push(`/destinations?${searchParams.toString()}`);
    }, 500);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with modern gradient overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop"
          alt="Royal Indian Voyage"
          className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-1000">
            Discover Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">Next Adventure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-200">
            Explore breathtaking destinations and experience the world with 
            <span className="font-semibold text-teal-100"> Royal Indian Voyage</span>.
          </p>

          {/* Premium Glassmorphic Search Bar */}
          <div className="mt-12 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full max-w-4xl mx-auto shadow-2xl flex flex-col md:flex-row gap-2">
              
              <div className="flex-1 relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-teal-400 transition-colors">
                  <MapPin className="size-5" />
                </div>
                <Input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-14 pl-12 bg-transparent border-none text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg transition-all rounded-full hover:bg-white/5"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              <div className="h-px md:h-14 md:w-px bg-white/20 mx-2" />

              <div className="flex-1 relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full h-14 justify-start text-left font-normal text-lg text-white hover:text-white hover:bg-white/5 pl-4 md:pl-4 rounded-full"
                    >
                      <CalendarIcon className="mr-3 size-5 text-white/70" />
                      {date ? format(date, "PPP") : <span className="text-white/60">When are you planning?</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 border-white/10 bg-black/80 backdrop-blur-xl text-white" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3"
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button
                size="lg"
                onClick={handleSearch}
                className="h-14 px-8 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-semibold text-lg shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Search className="size-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Stats / Trust Indicators */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-500">
            {[
              { label: "Destinations", value: "500+" },
              { label: "Happy Travelers", value: "50k+" },
              { label: "Years Experience", value: "15+" },
              { label: "Rating", value: "4.9/5" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
