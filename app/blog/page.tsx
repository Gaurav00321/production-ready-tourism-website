import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import BlogSearchInterface from "@/app/blog/blog-search-interface"

export const metadata: Metadata = {
  title: "Travel Blog - Tips, Guides & Inspiration | Royal Indian Voyage",
  description:
    "Discover travel tips, destination guides, and inspiring stories from around the world. Expert advice for planning your next adventure.",
  keywords: [
    "travel blog",
    "travel tips",
    "destination guides",
    "travel inspiration",
    "travel advice",
    "trip planning",
  ],
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Travel Blog & Stories
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Expert travel advice, destination guides, and inspiring stories to fuel your wanderlust
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - Keeping it static here effectively means it's not searchable by the bar below.
          If we want it searchable, we should move it into the Interface too. 
          But "Search" usually implies looking for specific things, while Featured is "Look at this!".
          I'll leave Featured here for now as preserving layout was not explicitly asked to change, just "add search".
      */}
      <section className="py-8 md:py-12 bg-background/50 border-b border-primary/10">
         <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Featured Story</Badge>
                <div className="h-px bg-border flex-1" />
            </div>
            
            <Card className="overflow-hidden border-0 bg-transparent shadow-none">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      <img
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {featuredPost.categories.map((category) => (
                          <Badge key={category} variant="outline" className="border-primary/20 text-primary">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight hover:text-primary transition-colors cursor-pointer">
                        <a href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</a>
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed show-limit-2">{featuredPost.excerpt}</p>
                      
                      <div className="pt-4 flex items-center justify-between border-t border-border/50">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <User className="size-4" />
                                <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="size-4" />
                                <span>{featuredPost.date}</span>
                            </div>
                        </div>
                        <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 hover:bg-transparent group" asChild>
                          <a href={`/blog/${featuredPost.slug}`}>
                            Read More
                            <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
         </div>
      </section>

      {/* Search Interface containing Grid and Sidebar */}
      <BlogSearchInterface />
    </div>
  )
}
