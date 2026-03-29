"use client";

import { usePortfolioMode } from "./providers/portfolio-mode-provider";
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, Video } from "lucide-react"

export default function BlogsClient({ posts }: { posts: any[] }) {
  const { mode } = usePortfolioMode();
  
  if (mode === 'editor') {
    return (
      <main className="min-h-screen pb-32">
        <section className="py-20 border-b border-[#484847]/10 bg-[#131313]">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <span className="font-label text-[#ff8f73] text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Behind The Scenes</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white mb-6">
              Reels & Breakdowns
            </h1>
            <p className="text-lg md:text-xl text-[#adaaaa] max-w-2xl font-body">
              A look into my editing process, timeline breakdowns, and short-form snippets.
            </p>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-6 py-20 text-center">
            <div className="flex flex-col items-center justify-center space-y-6 text-[#adaaaa] py-32 border border-dashed border-[#484847]/30 rounded-lg bg-[#1a1919] hover:border-[#ff8f73]/50 transition-colors group">
              <div className="w-20 h-20 rounded-full bg-[#ff7856]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Video className="w-10 h-10 text-[#ff8f73]" />
              </div>
              <div>
                <p className="font-headline text-2xl font-bold uppercase tracking-tighter text-white mb-2">Content Incoming</p>
                <p className="font-body text-sm max-w-md mx-auto">Trang này sẽ là nơi tổng hợp các video tutorial, breakdown edit hoặc Reels. Stay tuned for content!</p>
              </div>
            </div>
        </section>
      </main>
    );
  }

  // Developer mode (default)
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b py-10">
        <div className="container mx-auto text-center space-y-4 px-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá những bài viết mới nhất về công nghệ, lập trình và phát triển web.
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="container mx-auto px-4 py-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-5">
                  <h2 className="text-xl font-semibold line-clamp-2 mb-2">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.map((tag: any) => (
                        <Badge key={tag.id} variant="outline" className="text-xs">
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author?.name || "Ẩn danh"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("vi-VN")
                          : "Chưa xuất bản"}
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            <p>Hiện tại chưa có bài viết nào.</p>
          </div>
        )}
      </section>

      {/* Load More */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center">
          <button
            disabled
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            Xem thêm bài viết
          </button>
        </div>
      </section>
    </main>
  );
}
