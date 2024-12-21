// import { getPosts, getSinglePost, getRecentPost } from "@/libs/ghost";
// import DOMPurify from "isomorphic-dompurify";
// import { BlogPost, PostProps } from "@/types/schema";

// export const generateStaticParams = async () => {
//   // try {
//   //   const posts: BlogPost[] = await getPosts();
//   //   return posts.map((post) => ({
//   //     slug: post.slug,
//   //   }));
//   // } catch (error) {
//   //   console.error("Error fetching posts:", error);
//   //   return [];
//   // }
// };

const BlogPage = async () => {
  // try {
  //   const postPage = await getSinglePost(params.slug);
  //   if (!postPage) {
  //     return <div>Loading...</div>;
  //   }

  //   const formatGhostDate = (
  //     dateString: string | undefined,
  //     formatString: string
  //   ): string => {
  //     if (!dateString) {
  //       return "";
  //     }
  //     const date = new Date(dateString);
  //     const formattedDate = new Intl.DateTimeFormat("en-US", {
  //       day: "2-digit",
  //       month: "long",
  //       year: "numeric",
  //     }).format(date);
  //     return formattedDate;
  //   };
  //   const posts: BlogPost[] = await getRecentPost();

  return (

    <section className="">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-black text-gray-600">404 error</p>
          <h1 className="mt-3 text-2xl font-black text-gray-600 dark:text-white md:text-3xl">Page not found</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn&apos;t exist.Here are some helpful links:</p>

          <div className="flex items-center mt-6 gap-x-3">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <a href="/">
                <span>Go back</span>
              </a>
            </button>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="" />
        </div>
      </div>
    </section>

    //     <div>
    //       <div>
    //         <div className="mx-auto max-w-screen-md relative pt-36 pb-20 lg:pb-28 lg:pt-52">
    //           <div className="flex justify-center">
    //             <div className="flex gap-3">
    //               {postPage.tags?.map((tag: any) => (
    //                 <a href={`/tag/${tag.name}`} key={tag.id}>
    //                   <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
    //                     {tag.name}
    //                   </span>
    //                 </a>
    //               ))}
    //             </div>
    //           </div>

    //           <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl tracking-tight dark:text-white lg:text-4xl lg:leading-snug font-bold uppercase text-zinc-600">
    //             {postPage.title}
    //           </h1>
    //           <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
    //             <div className="flex items-center gap-3">
    //               <div className="relative h-10 w-10 flex-shrink-0">
    //                 {postPage.authors?.map((author: any) => (
    //                   <a href={`/author/${author.name}`} key={author.id}>
    //                     <img
    //                       alt={`${author.name}`}
    //                       className="rounded-full object-cover"
    //                       sizes="40px"
    //                       src={author.profile_image}
    //                     />
    //                   </a>
    //                 ))}
    //               </div>
    //               <div>
    //                 <p className="text-gray-800 dark:text-gray-400">
    //                   {postPage.authors?.map((author: any) => (
    //                     <a href={`/author/${author.name}`} key={author.id}>
    //                       {" "}
    //                       {author.name}
    //                     </a>
    //                   ))}
    //                 </p>
    //                 <div className="flex items-center space-x-2 text-sm">
    //                   <time className="text-gray-500 dark:text-gray-400">
    //                     {postPage ? (
    //                       <div>
    //                         {postPage.published_at && (
    //                           <p>
    //                             {formatGhostDate(
    //                               postPage.published_at,
    //                               "DD MMMM YYYY"
    //                             )}
    //                           </p>
    //                         )}
    //                       </div>
    //                     ) : (
    //                       <div>Loading...</div>
    //                     )}
    //                   </time>

    //                   <span>· {postPage.reading_time} min read</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="relative z-0 h-[40vh] mx-auto items-center aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
    //         {postPage.feature_image && (
    //           <img
    //             alt="Thumbnail"
    //             loading="eager"
    //             sizes="100vw"
    //             src={postPage.feature_image}
    //           />
    //         )}
    //       </div>
    //       <article className="mx-auto max-w-screen-md ">
    //         {postPage ? (
    //           <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
    //             {postPage.html && (
    //               <div
    //                 className=" mb-3 mt-2  tracking-tight dark:text-white   text-zinc-600  text-lg leading-loose md:text-xl md:leading-loose"
    //                 dangerouslySetInnerHTML={{
    //                   __html: DOMPurify.sanitize(postPage.html),
    //                 }}
    //               ></div>
    //             )}
    //           </div>
    //         ) : (
    //           <div>Loading...</div>
    //         )}
    //       </article>

    //       <section className="py-24 ">
    //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //           <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
    //             Read More
    //           </h2>
    //           <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    //             {posts.map((post): any => (
    //               <article
    //                 className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
    //                 key={post.id}
    //               >
    //                 {" "}
    //                 <a href={`/blogs/${post.slug}`}>
    //                   <img
    //                     alt=""
    //                     src={post.feature_image}
    //                     className="h-56 w-full object-cover"
    //                   />

    //                   <div className="bg-white p-4 sm:p-6">
    //                     <time className="block text-xs text-gray-500">
    //                       {formatGhostDate(post.created_at, "DD MMMM YYYY")}
    //                     </time>
    //                     <h3 className="mt-0.5 text-lg text-gray-900">
    //                       {post.title}
    //                     </h3>
    //                     {post.authors.map((author: any) => (
    //                       <p
    //                         className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
    //                         key={author.id}
    //                       >
    //                         {author.name}
    //                       </p>
    //                     ))}

    //                     <div className="mt-4 flex flex-wrap gap-1">
    //                       {post.tags.map((tag: any) => (
    //                         <span
    //                           className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
    //                           key={tag.id}
    //                         >
    //                           {tag.name}
    //                         </span>
    //                       ))}
    //                     </div>
    //                   </div>
    //                 </a>
    //               </article>
    //             ))}
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   );
    // } catch (error) {
    //   console.error("Error fetching post page:", error);
    // }
  )
};

export default BlogPage;
