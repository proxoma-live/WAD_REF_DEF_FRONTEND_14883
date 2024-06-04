import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ArticleService } from '../../../services/article.service';
import { AuthorService } from '../../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DeleteDialogComponent {
  router = inject(Router);
  articleService = inject(ArticleService);
  authorService = inject(AuthorService);
  id: number;
  tableName: string = '';
  constructor(
    private _mdr: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { id: number; tableName: string }
  ) {
    this.id = data.id;
    this.tableName = data.tableName;
  }
  cancelTask() {
    this._mdr.close(false);
  }

  refreshPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.tableName]);
    });
  }

  deleteTask() {
    if (this.tableName === 'article') {
      this.articleService.deleteArticle(this.id).subscribe((_) => {
        this.refreshPage();
      });
    }
    if (this.tableName === 'author') {
      this.authorService.deleteAuthor(this.id).subscribe((_) => {
        this.refreshPage();
      });
    }
    this._mdr.close(false);
  }
}
