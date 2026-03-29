import { wisp, GetPostsResult } from "@/libs/wisp"
import BlogsClient from "@/components/blogs-client"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  let posts: GetPostsResult["posts"] = []
  try {
    const result = await wisp.getPosts({ limit: 6 })
    posts = result.posts || []
  } catch (error) {
    console.error("❌ Lỗi khi fetch bài viết:", error)
  }

  return <BlogsClient posts={posts} />
}
