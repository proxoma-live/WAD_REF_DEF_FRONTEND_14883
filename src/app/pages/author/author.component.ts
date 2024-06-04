import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../interfaces/author.interface';
import { TableKey } from '../../../types';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss',
})
export class AuthorComponent {
  router = inject(Router);
  authorService = inject(AuthorService);
  authors: Author[] = [];

  ngOnInit() {
    this.authorService.getAuthors().subscribe((result) => {
      this.authors = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: 'Id',
      key: 'id',
    },
    {
      label: 'First Name',
      key: 'firstName',
    },
    {
      label: 'Last Name',
      key: 'lastName',
    },
    {
      label: 'Email',
      key: 'email',
    },
    {
      label: 'Gender',
      key: 'gender',
    },
    {
      label: 'Bio',
      key: 'bio',
    },
  ];
}
