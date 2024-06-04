import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../interfaces/author.interface';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss',
})
export class AuthorDetailsComponent {
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
