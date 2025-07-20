// export default async function Home() {
//   return (
//     <section className="">
//       <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
//         <div className="wf-ull lg:w-1/2">
//           <p className="text-sm font-black text-gray-600">404 error</p>
//           <h1 className="mt-3 text-2xl font-black text-gray-600 dark:text-white md:text-3xl">Page not found</h1>
//           <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn&apos;t exist.Here are some helpful links:</p>

//           <div className="flex items-center mt-6 gap-x-3">
//             <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
//               </svg>
//               <a href="/">
//                 <span>Go back</span>
//               </a>
//             </button>
//           </div>
//         </div>

//         <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
//           <img className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="" />
//         </div>
//       </div>
//     </section>


//   );
// }

import { wisp } from "@/libs/wisp";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User } from "lucide-react"


export default async function Home() {
  const result = await wisp.getPosts({ limit: 6 });
  console.log(result.posts);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Khám phá những bài viết mới nhất về công nghệ, lập trình và phát triển web
            </p>
          </div>
        </div>
      </div>
      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {/* <Badge className="absolute top-3 left-3">{post.tag}</Badge> */}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>
                </div>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag.id} variant="outline" className="text-xs">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author?.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("vi-VN")
                          : "Chưa xuất bản"}
                      </span>                    </div>

                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors">
            Xem thêm bài viết
          </button>
        </div>
      </div>
    </div>
  )
}