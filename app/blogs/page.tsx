// import { getPosts } from "@/libs/ghost";
// import { BlogPost } from "@/types/schema";

export default async function Home() {
  // const post: BlogPost[] = await getPosts();
  // const formatGhostDate = (
  //   dateString: string | undefined,
  //   formatString: string
  // ): string => {
  //   if (!dateString) {
  //     return "";
  //   }
  //   const date = new Date(dateString);
  //   const formattedDate = new Intl.DateTimeFormat("en-US", {
  //     day: "2-digit",
  //     month: "long",
  //     year: "numeric",
  //   }).format(date);

  //   return formattedDate;
  // };
  // if (!post) return <p>No profile data</p>;
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


  );
}
// <section className="relative pt-36 pb-20 lg:pb-28 lg:pt-52">
//   <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
//   <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
//   <main className="min-h-screen pl-6 pr-6 max-w-6xl mx-auto">
//     <header className="mb-8">
//       <div className="content-wrapper">
//         <p className="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200">
//           Blogs
//         </p>
//         <p className="max-w-lg text-slate-600 dark:text-slate-400">
//           Someone blog i write about tech and something like camping,
//           lifestyle and maybe a story love hehe
//         </p>
//       </div>
//     </header>
//     <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
//       {post.map((post): any => (
//         <article
//           className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
//           key={post.id}
//         >
//           {" "}
//           <a href={`/blogs/${post.slug}`}>
//             <img
//               alt=""
//               src={post.feature_image}
//               className="h-56 w-full object-cover"
//             />

//             <div className="bg-white p-4 sm:p-6">
//               <time className="block text-xs text-gray-500">
//                 {formatGhostDate(post.created_at, "DD MMMM YYYY")}
//               </time>
//               <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
//               {post.authors.map((author: any) => (
//                 <p
//                   className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
//                   key={author.id}
//                 >
//                   {author.name}
//                 </p>
//               ))}

//               <div className="mt-4 flex flex-wrap gap-1">
//                 {post.tags.map((tag: any) => (
//                   <span
//                     className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
//                     key={tag.id}
//                   >
//                     {tag.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </a>
//         </article>
//       ))}
//     </div>
//   </main>
// </section>

