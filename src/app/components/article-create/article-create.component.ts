import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Article, ArticleCreate } from '../../../interfaces/article.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../interfaces/author.interface';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class ACreateComponent {
  @Input()
  articleDetail!: Article;

  @Input()
  isEdit: boolean = false;

  router = inject(Router);
  articleService = inject(ArticleService);
  authorService = inject(AuthorService);
  activatedRoute = inject(ActivatedRoute);

  createArticle: ArticleCreate = {
    title: '',
    content: '',
    publishedDate: '',
    category: '',
    authorId: null,
  };
  errorObj: any;
  authors: Author[] = [];
  authorId: number | null = 0;

  ngOnInit() {
    this.authorService.getAuthors().subscribe((result) => {
      this.authors = result;
    });
  }

  ngOnChanges() {
    this.createArticle = this.articleDetail;
    this.authorId = this.createArticle.authorId;
  }

  clearForm() {
    this.createArticle = {
      title: '',
      content: '',
      publishedDate: '',
      category: '',
      authorId: null,
    };
  }

  submitForm() {
    this.createArticle.authorId = this.authorId;
    if (this.isEdit) {
      this.articleService
        .updateArticle(
          this.activatedRoute.snapshot.params['id'],
          this.createArticle
        )
        .subscribe(
          (_) => {
            alert('Article Updated');
            this.router.navigateByUrl('article');
          },
          (error) => {
            this.errorObj = error.error.errors;
          }
        );
    } else {
      this.articleService.createArticle(this.createArticle).subscribe(
        (_) => {
          alert('Article created');
          this.router.navigateByUrl('article');
        },
        (error) => {
          this.errorObj = error.error.errors;
        }
      );
    }
  }
}
