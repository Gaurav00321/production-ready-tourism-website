"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/blog-card";
import { blogPosts } from "@/lib/blog-data";

import BlogSidebar from "@/components/blog-sidebar";

export default function BlogSearchInterface() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const regularPosts = blogPosts.slice(1);

  const filteredPosts = React.useMemo(() => {
    if (!searchQuery.trim()) return regularPosts;
    const lowerQuery = searchQuery.toLowerCase();
    return regularPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.categories.some((cat) => cat.toLowerCase().includes(lowerQuery))
    );
  }, [searchQuery, regularPosts]);

  return (
    <>
      {/* Search Bar */}
      <section className="py-8 border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles by title, keyword, or category..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Blog Posts */}
            <div className="space-y-12">
              {searchQuery && (
                  <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-4">
                          Search results for "{searchQuery}"
                      </h2>
                      {filteredPosts.length === 0 && (
                          <p className="text-muted-foreground">No articles found matching your criteria.</p>
                      )}
                  </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
