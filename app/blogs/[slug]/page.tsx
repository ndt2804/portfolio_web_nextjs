import { wisp } from "@/libs/wisp";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { CalendarDays, ArrowLeft } from "lucide-react";

interface Params {
  slug: string;
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const result = await wisp.getPost(params.slug);

  if (!result.post) notFound();

  const { title, publishedAt, createdAt, content, tags, image, author } = result.post;
  const date = new Date(publishedAt || createdAt).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-0">
      <div className="max-w-3xl mx-auto py-10">
        {/* Quay lại */}
        <div className="mb-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm text-muted-foreground hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Quay lại trang Blog
          </Link>
        </div>




        {/* Tiêu đề */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-3">
          {title}
        </h1>

        {/* Thông tin */}
        <div className="text-muted-foreground text-sm flex flex-wrap gap-4 items-center mb-6">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{date}</span>
          </div>
          {author?.name && (
            <div className="ml-4">Tác giả: {author.name}</div>
          )}
        </div>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-muted px-3 py-1 text-sm rounded-full text-muted-foreground"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Nội dung */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content),
          }}
        />
      </div>
    </div>
  );
}
