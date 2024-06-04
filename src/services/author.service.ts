import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Author, AuthorCreate } from '../interfaces/author.interface';

const BASE_URL = 'https://localhost:7010/api';
@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  httpClient = inject(HttpClient);

  getAuthors() {
    return this.httpClient.get<Author[]>(`${BASE_URL}/Authors`);
  }

  getAuthor(id: number) {
    return this.httpClient.get<Author>(`${BASE_URL}/Authors/${id}`);
  }

  updateAuthor(id: number, author: AuthorCreate) {
    return this.httpClient.put(`${BASE_URL}/Authors/${id}`, author);
  }

  deleteAuthor(id: number) {
    return this.httpClient.delete(`${BASE_URL}/Authors/${id}`);
  }

  createAuthor(author: AuthorCreate) {
    return this.httpClient.post<Author>(`${BASE_URL}/Authors`, author);
  }
}
