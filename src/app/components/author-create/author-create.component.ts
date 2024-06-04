import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../../../services/author.service';
import { Author, AuthorCreate } from '../../../interfaces/author.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './author-create.component.html',
  styleUrl: './author-create.component.scss',
})
export class ArCreateComponent {
  @Input()
  authorDetail!: Author;

  @Input()
  isEdit: boolean = false;

  router = inject(Router);
  authorService = inject(AuthorService);
  activatedRoute = inject(ActivatedRoute);

  createAuthor: AuthorCreate = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    bio: '',
  };
  errorObj: any;
  g: any;

  ngOnChanges() {
    this.createAuthor = this.authorDetail;
  }

  clearForm() {
    this.createAuthor = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      bio: '',
    };
  }

  submitForm() {
    if (this.isEdit) {
      this.authorService
        .updateAuthor(
          this.activatedRoute.snapshot.params['id'],
          this.createAuthor
        )
        .subscribe(
          (_) => {
            alert('Author Updated');
            this.router.navigateByUrl('author');
          },
          (error) => {
            this.errorObj = error.error.errors;
          }
        );
    } else {
      this.authorService.createAuthor(this.createAuthor).subscribe(
        (_) => {
          alert('Author created');
          this.router.navigateByUrl('author');
        },
        (error) => {
          this.errorObj = error.error.errors;
        }
      );
    }
  }
}
