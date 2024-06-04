import { Routes } from '@angular/router';
import { AuthorComponent } from './pages/author/author.component';
import { ArticleComponent } from './pages/article/article.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { AuthorCreateComponent } from './pages/author-create/author-create.component';
import { ArticleCreateComponent } from './pages/article-create/article-create.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { AuthorEditComponent } from './pages/author-edit/author-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'author', pathMatch: 'full' },
  {
    path: 'author',
    component: AuthorComponent,
  },
  {
    path: 'author/:id',
    component: AuthorDetailsComponent,
  },
  {
    path: 'author/:id/edit',
    component: AuthorEditComponent,
  },
  {
    path: 'author-create',
    component: AuthorCreateComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'article/:id',
    component: ArticleDetailsComponent,
  },
  {
    path: 'article/:id/edit',
    component: ArticleEditComponent,
  },
  {
    path: 'article-create',
    component: ArticleCreateComponent,
  },
];
