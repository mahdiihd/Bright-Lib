import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthorService} from "../../shared/services/author.service";
import {Author} from "../../shared/models/author.model";

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent implements OnInit{
  authorFormGroup!: FormGroup;
  authorList!: Author[];

  constructor(private authorsService: AuthorService) {
  }

  ngOnInit() {
    this.createAuthorForm();
    this.getAuthorList();
  }

  getAuthorList() {
    this.authorsService.getAuthorList().subscribe((value) => {
      this.authorList = value;
      console.log(value)
    })
  }
  createAuthorForm () {
    this.authorFormGroup = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl('')
    })
  }

  submitAuthorForm() {
    console.log(this.authorFormGroup.value)
  }

}
