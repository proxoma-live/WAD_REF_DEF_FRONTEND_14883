import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../interfaces/article.interface';
import { TableKey } from '../../../types';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  router = inject(Router);
  articleService = inject(ArticleService);
  articles: Article[] = [];

  ngOnInit() {
    this.articleService.getArticles().subscribe((result) => {
      this.articles = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: 'Id',
      key: 'id',
    },
    {
      label: 'Title',
      key: 'title',
    },
    {
      label: 'Content',
      key: 'content',
    },
    {
      label: 'Published Date',
      key: 'publishedDate',
    },
    {
      label: 'Category',
      key: 'category',
    },
  ];
}
