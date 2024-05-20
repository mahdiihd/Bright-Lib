import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthorService} from "../../shared/services/author.service";
import {Author} from "../../shared/models/author.model";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs";

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
    NgForOf,
    FormsModule
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent implements OnInit{
  authorFormGroup!: FormGroup;
  searchFormGroup!: FormGroup;
  authorList: Author[] = [];
  displayData: Author[] = [];

  constructor(private authorsService: AuthorService) {
  }

  ngOnInit() {
    this.createForms();
    this.getAuthorList();
    this.search();
  }

  getAuthorList() {
    this.authorsService.getAuthorList().subscribe((value) => {
      this.authorList = value.results;
      this.loadMore(3);
    })
  }
  createForms () {
    this.authorFormGroup = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl('')
    });

    this.searchFormGroup = new FormGroup({
      searchInput: new FormControl(''),
    })
  }

  submitAuthorForm() {
    const newAuthorName = `${this.authorFormGroup.value.name} ${this.authorFormGroup.value.lastName}`
    const author = new Author();
    author.name = newAuthorName;
    author.id = this.authorList.length + 1;
    this.authorList.unshift(author);
    this.loadMore(1)
  }

  loadMore(size: number) {
    let newLength = this.displayData.length + size;
    if (newLength > this.authorList.length) {
      newLength = this.authorList.length
    }
    this.displayData = this.authorList.slice(0, newLength);
  }

  search() {
    this.searchFormGroup.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchInput) => {
        return searchInput //TODO
      })
    )
  }

}
