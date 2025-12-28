import { Card, CardContent } from "@/components/ui/card"
import { Shield, Headphones, Award, DollarSign } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with certified guides and secure payment systems",
    gradient: "from-blue-500/20 to-teal-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist you at every step of your journey",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Award,
    title: "Best Experiences",
    description: "Curated tours and activities designed to create unforgettable memories",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Competitive pricing with no hidden fees and flexible payment options",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50">
            Why Choose Royal Indian Voyage
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            We're committed to making your travel dreams come true with exceptional service, 
            hand-picked destinations, and a touch of luxury.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                
                <Card className="relative h-full border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-primary/5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardContent className="p-8 flex flex-col items-center text-center h-full z-10 relative">
                    <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/20`}>
                      <Icon className={`size-8 ${feature.iconColor}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
