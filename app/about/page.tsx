import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Royal Indian Voyage",
  description: "Crafting timeless journeys in the heart of India.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Dynamic Aura Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[140px] mix-blend-screen animate-blob animation-delay-4000" />
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-4 z-10 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop" 
                alt="Taj Mahal Background" 
                className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-sm font-medium mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Sparkles className="size-4" />
                <span>Est. 2010</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                Royal <br className="md:hidden" /> Indian <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 font-serif italic pr-2">Voyage</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/60 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                We don't just plan trips. We curate <span className="text-white font-normal">legacies</span>. 
                Experience the timeless grandeur of India through a lens of absolute luxury.
            </p>
        </div>
      </section>

      {/* Stats - Minimalist Divider */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm z-10 relative">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                  {[
                      { label: "Years of Excellence", value: "15+" },
                      { label: "Destinations", value: "500+" },
                      { label: "Happy Travelers", value: "50k+" },
                      { label: "Expert Guides", value: "100+" }
                  ].map((stat, i) => (
                      <div key={i} className="space-y-3 group">
                          <div className="text-4xl md:text-5xl font-bold text-white tracking-tight group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                          <div className="text-xs font-semibold text-teal-500/70 uppercase tracking-[0.2em]">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 relative z-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1927&auto=format&fit=crop" 
                alt="Philosophy Background" 
                className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background" />
             <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <h2 className="text-sm font-bold tracking-[0.2em] text-teal-300 uppercase mb-16 drop-shadow-md">Our Philosophy</h2>
            
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-2xl">
                "Travel makes one modest. You see what a tiny place you occupy in the world."
            </blockquote>
            <cite className="block mt-12 text-lg text-white/60 not-italic uppercase tracking-widest font-light">— Gustave Flaubert</cite>
        </div>
      </section>

      {/* Leadership & Values - Minimal Layout */}
      <section className="py-32 z-10 relative bg-gradient-to-t from-black/20 to-transparent">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
                  <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">The Royal Standard</h2>
                      <p className="text-lg text-white/60 leading-relaxed mb-12">
                          Our commitment to perfection is unwavering. We believe that true luxury lies in the details, the seamless execution, and the personal touches that transform a journey into a memory.
                      </p>
                      
                      <div className="space-y-8">
                          <div className="flex items-center gap-4">
                              <div className="h-px w-12 bg-teal-500/50"></div>
                              <span className="text-white/80 font-medium">Aarav Singh, Founder</span>
                          </div>
                      </div>
                  </div>
                  
                  <div className="space-y-16">
                      {[
                        { title: "Authenticity", desc: "Deeply rooted local experiences that honor culture and tradition." },
                        { title: "Personalization", desc: "Itineraries tailored to your specific rhythm, desires, and dreams." },
                        { title: "Exclusivity", desc: "Access to private events, closed monuments, and elite stays unavailable to others." }
                      ].map((item, i) => (
                          <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-teal-500/50 transition-colors duration-500">
                              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                                  {item.title}
                              </h3>
                              <p className="text-white/50 text-lg font-light leading-relaxed group-hover:text-white/70 transition-colors">
                                  {item.desc}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-40 text-center relative z-10">
         <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Ready in every detail.
            </h2>
            <Button 
                size="lg" 
                className="rounded-full px-12 py-8 text-lg bg-white text-black hover:bg-teal-50 hover:scale-105 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
                Start Your Journey <ArrowRight className="ml-2 size-5" />
            </Button>
         </div>
      </section>
    </div>
  )
}
