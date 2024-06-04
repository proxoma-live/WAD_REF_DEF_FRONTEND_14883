import { Author } from './author.interface';

export interface Article {
  id: number;
  title: string;
  content: string;
  publishedDate: string;
  category: string;
  authorId: number | null;
  author: Author | null;
}

export interface ArticleCreate {
  title: string;
  content: string;
  publishedDate: string;
  category: string;
  authorId: number | null;
}
