import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
};

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {post.categories.slice(0, 2).map((category) => (
            <Badge
              key={category}
              className="bg-background/90 text-foreground backdrop-blur-sm"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold text-balance line-clamp-2 group-hover:text-primary transition-colors text-foreground">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground text-pretty line-clamp-2 font-medium">
          {post.excerpt}
        </p>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="size-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="size-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-between group/btn"
          asChild
        >
          <a href={`/blog/${post.slug}`}>
            Read Article
            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
