import { Component } from '@angular/core';
import { ACreateComponent } from '../../components/article-create/article-create.component';

@Component({
  selector: 'app-article-create-page',
  standalone: true,
  imports: [ACreateComponent],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss',
})
export class ArticleCreateComponent {}
