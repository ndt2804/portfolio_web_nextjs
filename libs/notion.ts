import { Client } from "@notionhq/client";
import slugify from "slugify";
import { NotionToMarkdown } from "notion-to-md";
import { BlogPost, PostPage } from "@/types/schema";
export const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
});
export const n2m = new NotionToMarkdown({ notionClient: notion });
export const databaseId = process.env.NOTION_BLOG_DATABASE_ID as string;
export async function getBlogPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties["Name"].title[0].text.content,
    slug: slugify(page.properties["Name"].title[0].text.content, {
      lower: true,
      locale: "vi",
    }),
    tags: page.properties["Tags"].multi_select.map((tag: any) => tag.name),
    author: page.properties["Author"].rich_text[0].text.content,
  }));
}

export async function getSingleBlogPost(slug: string): Promise<PostPage> {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  if (!response.results || response.results.length === 0) {
    throw "No results available";
  }

  let foundPost: PostPage | null = null;
  const markdownPromises = response.results.map(async (page: any) => {
    if (page.properties) {
      const slugFromName = slugify(
        page.properties["Name"].title[0].text.content,
        {
          lower: true,
          locale: "vi",
        }
      );
      if (slugFromName === slug) {
        const mdBlocks = await n2m.pageToMarkdown(page.id);
        const markdown = n2m.toMarkdownString(mdBlocks).parent;
        const post = pageToPostTransformer(page);

        foundPost = {
          post,
          markdown,
        };
      }
    }
  });
  await Promise.all(markdownPromises);

  if (!foundPost) {
    throw "No matching post found";
  }

  return foundPost;
}

export function pageToPostTransformer(page: any): BlogPost {
  let cover = "";

  if (page.cover) {
    if (page.cover.type === "file") {
      cover = page.cover.file;
    } else if (page.cover.type === "external") {
      cover = page.cover.external.url;
    } else {
    }
  }

  return {
    id: page.id,
    cover: cover,
    name: page.properties.Name.title[0].plain_text,
    tags: page.properties.Tags.multi_select.map((tag: any) => tag.name),
    description: page.properties.Description.rich_text[0].plain_text,
  };
}
