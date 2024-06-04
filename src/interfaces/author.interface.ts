export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  bio: string;
}

export interface AuthorCreate {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  bio: string;
}
