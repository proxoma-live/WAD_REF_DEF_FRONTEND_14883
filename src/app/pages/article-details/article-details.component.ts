import { Component, inject } from '@angular/core';
import { DetailComponent } from '../../components/detail/detail.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../interfaces/article.interface';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
})
export class ArticleDetailsComponent {
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
