import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { blogCategories, popularPosts } from "@/lib/blog-data"

export default function BlogSidebar() {
  return (
    <aside className="space-y-6">
      {/* Newsletter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Subscribe to Newsletter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">Get travel tips and inspiration delivered to your inbox</p>
          <Input type="email" placeholder="Your email" />
          <Button className="w-full">Subscribe</Button>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-3 group hover:bg-accent/50 rounded-md p-2 -m-2 transition-colors"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="size-16 rounded-md object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
              </div>
            </a>
          ))}
        </CardContent>
      </Card>
    </aside>
  )
}
