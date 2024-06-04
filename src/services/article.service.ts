import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ArticleCreate } from '../interfaces/article.interface';

const BASE_URL = 'https://localhost:7010/api';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  httpClient = inject(HttpClient);

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${BASE_URL}/Articles`);
  }

  getArticle(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${BASE_URL}/Articles/${id}`);
  }

  updateArticle(id: number, article: ArticleCreate) {
    return this.httpClient.put(`${BASE_URL}/Articles/${id}`, article);
  }

  deleteArticle(id: number) {
    return this.httpClient.delete(`${BASE_URL}/Articles/${id}`);
  }

  createArticle(article: ArticleCreate): Observable<Article> {
    return this.httpClient.post<Article>(`${BASE_URL}/Articles`, article);
  }
}
