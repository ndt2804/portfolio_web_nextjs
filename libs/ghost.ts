import GhostContentAPI from "@tryghost/content-api";

const url = process.env.ghost_url ?? "http://localhost:8080";
const key = process.env.ghost_content_key ?? "YOUR_DEFAULT_KEY";

const api = new GhostContentAPI({
  url: url,
  key: key,
  // @ts-ignore
  makeRequest: ({ url, method, params, headers }) => {
    const apiUrl = new URL(url);
    // @ts-ignore
    Object.keys(params).map((key) =>
      apiUrl.searchParams.set(key, encodeURIComponent(params[key]))
    );

    return fetch(apiUrl.toString(), { method, headers })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return { data: await res.json() };
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  },
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      return err;
    });
}
export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
