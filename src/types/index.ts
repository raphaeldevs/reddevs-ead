export type Course = {
  id: string;
  name: string;
  image: string;
  slug: string;
  created_at: string;
};

export type Module = {
  id: string;
  name: string;
  slug: string;
  image: string;
  created_at: string;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  url: string;
  created_at: string;
};
