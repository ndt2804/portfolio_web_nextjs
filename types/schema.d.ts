export type BlogPost = {
  id: string;
  slug: string;
  feature_image: string;
  tags: string[];
  title: string;
  primary_author: string;
  authors: string[];
  created_at: string;
};
export type PostProps = {
  params: {
    slug: string;
  };
};
