import { Component, Input } from '@angular/core';
import { Author } from '../../../interfaces/author.interface';
import { Article } from '../../../interfaces/article.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  @Input()
  detail: any;

  @Input()
  title: string = '';

  detailIter: any;
  description: string = '';
  authorIter!: any;
  authorDesc: string = '';

  ngOnChanges() {
    this.detailIter = Object.entries(this.detail);
    if (this.detail && this.detail.author) {
      this.authorIter = Object.entries(this.detail.author);
      this.authorDesc = this.detail.description;
    }
  }
}
