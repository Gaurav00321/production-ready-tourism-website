import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import BlogSidebar from "@/components/blog-sidebar"
import { blogPosts } from "@/lib/blog-data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Wanderlust Travel Blog`,
    description: post.excerpt,
    keywords: post.categories,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main Content */}
            <article className="mx-auto max-w-3xl">
              {/* Back Button */}
              <Button variant="ghost" asChild className="mb-6">
                <a href="/blog">
                  <ArrowLeft className="mr-2 size-4" />
                  Back to Blog
                </a>
              </Button>

              {/* Categories */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {post.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">{post.title}</h1>

              {/* Meta Info */}
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="size-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <Separator className="mb-8" />

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>

                <h2>Planning Your Journey</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>

                <ul>
                  <li>Research your destination thoroughly before booking</li>
                  <li>Consider travel insurance for peace of mind</li>
                  <li>Pack light but prepare for various weather conditions</li>
                  <li>Learn basic phrases in the local language</li>
                </ul>

                <h2>Best Time to Visit</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>

                <blockquote>
                  "Travel is the only thing you buy that makes you richer. The experiences and memories you create are
                  invaluable and last a lifetime."
                </blockquote>

                <h2>Essential Tips</h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet.
                </p>

                <ol>
                  <li>Book accommodations in advance for better rates</li>
                  <li>Download offline maps and translation apps</li>
                  <li>Keep digital and physical copies of important documents</li>
                  <li>Stay flexible with your itinerary</li>
                </ol>
              </div>

              <Separator className="my-8" />

              {/* Share Section */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Share this article:</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Facebook className="size-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Twitter className="size-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="size-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Author Bio */}
              <div className="flex gap-4 rounded-lg bg-muted/50 p-6">
                <Avatar className="size-16">
                  <AvatarImage
                    src={`/.jpg?height=64&width=64&query=${post.author}`}
                    alt={post.author}
                  />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="mb-2 font-semibold">About {post.author}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A passionate travel writer and photographer who has explored over 50 countries. Specializing in
                    sustainable tourism and cultural experiences, sharing insights to help travelers make the most of
                    their adventures.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  )
}
