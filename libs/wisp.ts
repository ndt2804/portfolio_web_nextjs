import {
    buildWispClient,
    GetPostsResult,
    GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
    baseUrl: "https://www.wisp.blog",
    blogId: process.env.BLOG_ID || "",

});

export type { GetPostsResult, GetPostResult };
