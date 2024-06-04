import { getPosts, getSinglePost } from "@/libs/ghost";
// import DOMPurify from "dompurify";
import DOMPurify from "isomorphic-dompurify";

interface Post {
  id: string;
  title: string;
  slug: string;
  author: string;
  Tag: string[];
}
interface BlogPageProps {
  params: {
    slug: string;
  };
}
export const generateStaticParams = async () => {
  try {
    const posts: Post[] = await getPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const BlogPage = async ({ params }: BlogPageProps) => {
  try {
    const postPage = await getSinglePost(params.slug);
    if (!postPage) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <div className="mx-auto max-w-screen-md relative pt-36 pb-20 lg:pb-28 lg:pt-52">
            <div className="flex justify-center">
              <div className="flex gap-3">
                <a href="/category/technology">
                  <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                    Technology
                  </span>
                </a>
              </div>
            </div>
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
              {postPage.title}
            </h1>
            <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <a href="/author/mario-sanchez">
                    <img
                      alt="Mario Sanchez"
                      className="rounded-full object-cover"
                      sizes="40px"
                      src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                    />
                  </a>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-400">
                    <a href="/author/mario-sanchez">Mario Sanchez</a>
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <time className="text-gray-500 dark:text-gray-400">
                      October 21, 2022
                    </time>
                    <span>· 8 min read</span>
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
            <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                <div className="flex items-center mb-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1696244553.png"
                    alt="Harsh image"
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="block">
                  <h4 className="text-gray-900 font-medium leading-8 mb-9">
                    Fintech 101: Exploring the Basics of Electronic Payments
                  </h4>
                  <div className="flex items-center justify-between  font-medium">
                    <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                    <span className="text-sm text-indigo-600">2 year ago</span>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                <div className="flex items-center mb-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1696244579.png"
                    alt="John image"
                    className="rounded-lg w-full/"
                  />
                </div>
                <div className="block">
                  <h4 className="text-gray-900 font-medium leading-8 mb-9">
                    From classNameroom to Cyberspace: The Growing Influence of
                    EdTech in Fintech
                  </h4>
                  <div className="flex items-center justify-between  font-medium">
                    <h6 className="text-sm text-gray-500">By John D.</h6>
                    <span className="text-sm text-indigo-600">2 year ago</span>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                <div className="flex items-center mb-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1696244619.png"
                    alt="Alexa image"
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="block">
                  <h4 className="text-gray-900 font-medium leading-8 mb-9">
                    Fintech Solutions for Student Loans: Easing the Burden of
                    Education Debt
                  </h4>
                  <div className="flex items-center justify-between  font-medium">
                    <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                    <span className="text-sm text-indigo-600">2 year ago</span>
                  </div>
                </div>
              </div>
            </div>
            <a className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">
              View All
            </a>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post page:", error);
  }
};

export default BlogPage;
