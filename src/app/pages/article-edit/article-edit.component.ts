import { Component, inject } from '@angular/core';
import { ACreateComponent } from '../../components/article-create/article-create.component';
import { Article } from '../../../interfaces/article.interface';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [ACreateComponent],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.scss',
})
export class ArticleEditComponent {
  articleDetail: Article = {
    id: 0,
    title: '',
    content: '',
    publishedDate: '',
    category: '',
    authorId: null,
    author: null,
  };

  activatedRoute = inject(ActivatedRoute);
  articleService = inject(ArticleService);

  ngOnInit() {
    this.articleService
      .getArticle(this.activatedRoute.snapshot.params['id'])
      .subscribe((article) => {
        this.articleDetail = article;
      });
  }
}
