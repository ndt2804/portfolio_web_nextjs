import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogPost, PostPage, Tag } from "@/types/schema";
import { getSingleBlogPost } from "@/libs/notion";
export const revalidate = 60;

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  try {
    const postPage = await getSingleBlogPost(params.slug);

    return (
      <div className="flex flex-col gap-5">
        <div className="relative">
          <div className="relative h-[40vh] w-full">
            <Image
              src={postPage.post.cover}
              alt={postPage.post.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bg-black bg-opacity-30 w-full h-[40vh] inset-0 top-0 left-0"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl w-full px-4 mx-auto text-white">
              <h1 className="text-2xl lg:text-5xl font-bold">
                {postPage.post.name}
              </h1>
              <p className="text-sm lg:text-lg mt-4">
                {postPage.post.description}
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm lg:text-lg">
                <span>Updated on </span>
              </div>
              <div className="mt-4">
                {postPage.post.tags && (
                  <div className="flex flex-wrap my-2 space-x-2"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <section className="max-w-7xl w-full mx-auto px-2 lg:px-0">
          <div className="py-5"></div>
          <article className="prose dark:prose-invert max-w-7xl w-full mx-auto">
            {" "}
            {postPage.markdown}
          </article>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post page:", error);
    notFound();
  }
};

export default BlogPage;
