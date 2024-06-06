import { getPosts } from "@/libs/ghost";
import { BlogPost } from "@/types/schema";

export default async function Home() {
  const post: BlogPost[] = await getPosts();
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
  if (!post) return <p>No profile data</p>;
  return (
    <section className="relative pt-36 pb-20 lg:pb-28 lg:pt-52">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      <main className="min-h-screen pl-6 pr-6 max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="content-wrapper">
            <p className="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200">
              Blogs
            </p>
            <p className="max-w-lg text-slate-600 dark:text-slate-400">
              Someone blog i write about tech and something like camping,
              lifestyle and maybe a story love hehe
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {post.map((post): any => (
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
                  <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
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
      </main>
    </section>
  );
}
