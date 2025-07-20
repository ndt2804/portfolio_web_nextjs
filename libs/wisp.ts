import {
    buildWispClient,
    GetPostsResult,
    GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
    baseUrl: "https://www.wisp.blog",
    blogId: process.env.NEXT_PUBLIC_BLOG_ID || "",

});

export type { GetPostsResult, GetPostResult };
