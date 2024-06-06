import { getPosts, getSinglePost, getRecentPost } from "@/libs/ghost";
import DOMPurify from "isomorphic-dompurify";
import { BlogPost, PostProps } from "@/types/schema";

export const generateStaticParams = async () => {
  try {
    const posts: BlogPost[] = await getPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const BlogPage = async ({ params }: PostProps) => {
  try {
    const postPage = await getSinglePost(params.slug);
    if (!postPage) {
      return <div>Loading...</div>;
    }

    const formatGhostDate = (
      dateString: string | undefined,
      formatString: string
    ): string => {
      if (!dateString) {
        return "";
      }
      const date = new Date(dateString);
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(date);
      return formattedDate;
    };
    const posts: BlogPost[] = await getRecentPost();

    return (
      <div>
        <div>
          <div className="mx-auto max-w-screen-md relative pt-36 pb-20 lg:pb-28 lg:pt-52">
            <div className="flex justify-center">
              <div className="flex gap-3">
                {postPage.tags?.map((tag: any) => (
                  <a href={`/tag/${tag.name}`} key={tag.id}>
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                      {tag.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl tracking-tight dark:text-white lg:text-4xl lg:leading-snug font-bold uppercase text-zinc-600">
              {postPage.title}
            </h1>
            <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 flex-shrink-0">
                  {postPage.authors?.map((author: any) => (
                    <a href={`/author/${author.name}`} key={author.id}>
                      <img
                        alt={`${author.name}`}
                        className="rounded-full object-cover"
                        sizes="40px"
                        src={author.profile_image}
                      />
                    </a>
                  ))}
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-400">
                    {postPage.authors?.map((author: any) => (
                      <a href={`/author/${author.name}`} key={author.id}>
                        {" "}
                        {author.name}
                      </a>
                    ))}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <time className="text-gray-500 dark:text-gray-400">
                      {postPage ? (
                        <div>
                          {postPage.published_at && (
                            <p>
                              {formatGhostDate(
                                postPage.published_at,
                                "DD MMMM YYYY"
                              )}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div>Loading...</div>
                      )}
                    </time>

                    <span>· {postPage.reading_time} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-0 h-[40vh] mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          {postPage.feature_image && (
            <img
              alt="Thumbnail"
              loading="eager"
              sizes="100vw"
              src={postPage.feature_image}
            />
          )}
        </div>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {postPage ? (
              <div>
                {postPage.html && (
                  <div
                    className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(postPage.html),
                    }}
                  />
                )}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </article>

        <section className="py-24 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
              Read More
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              {posts.map((post): any => (
                <article
                  className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                  key={post.id}
                >
                  {" "}
                  <a href={`/blogs/${post.slug}`}>
                    <img
                      alt=""
                      src={post.feature_image}
                      className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                      <time className="block text-xs text-gray-500">
                        {formatGhostDate(post.created_at, "DD MMMM YYYY")}
                      </time>
                      <h3 className="mt-0.5 text-lg text-gray-900">
                        {post.title}
                      </h3>
                      {post.authors.map((author: any) => (
                        <p
                          className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
                          key={author.id}
                        >
                          {author.name}
                        </p>
                      ))}

                      <div className="mt-4 flex flex-wrap gap-1">
                        {post.tags.map((tag: any) => (
                          <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                            key={tag.id}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post page:", error);
  }
};

export default BlogPage;
