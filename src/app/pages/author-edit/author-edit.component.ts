import { Component, inject } from '@angular/core';
import { ArCreateComponent } from '../../components/author-create/author-create.component';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../interfaces/author.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  standalone: true,
  imports: [ArCreateComponent],
  templateUrl: './author-edit.component.html',
  styleUrl: './author-edit.component.scss',
})
export class AuthorEditComponent {
  authorDetail: Author = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    bio: '',
  };

  activatedRoute = inject(ActivatedRoute);
  authorService = inject(AuthorService);

  ngOnInit() {
    this.authorService
      .getAuthor(this.activatedRoute.snapshot.params['id'])
      .subscribe((author) => {
        this.authorDetail = author;
      });
  }
}
