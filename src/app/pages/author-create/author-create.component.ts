import { Component } from '@angular/core';
import { ArCreateComponent } from '../../components/author-create/author-create.component';

@Component({
  selector: 'app-author-create-page',
  standalone: true,
  imports: [ArCreateComponent],
  templateUrl: './author-create.component.html',
  styleUrl: './author-create.component.scss',
})
export class AuthorCreateComponent {}
