import { Routes } from '@angular/router';
import {AuthorComponent} from "./pages/author/author.component";
import {AuthorsComponent} from "./pages/authors/authors.component";

export const routes: Routes = [
  {path: 'author', component: AuthorComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: '', component: AuthorComponent},
];
