import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/author.model";
import {BaseModel} from "../models/base.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  url: string = "assets/mock/authors.json";

  constructor(private http: HttpClient) { }

  getAuthorList():Observable<BaseModel<Author>> {
    return this.http.get<BaseModel<Author>>(this.url)
  }
}
