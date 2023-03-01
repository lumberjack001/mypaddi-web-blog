export interface Category {
  category_name: string;
}

export interface Post {
  title: string;
  content: string;
  category_id: number;
  photo: string;
  id: number;
}

export interface Comment {
  content: string;
  slug: string;
}

export interface Reply {
  content: string;
  id: string;
  slug: string;
}
