export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type BlogPost = {
  id: string;
  cover: string;
  name: string;
  tags: Tag[];
  description: string;
};

export type PostPage = {
  post: BlogPost;
  markdown: string;
};
