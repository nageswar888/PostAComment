import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {QueryApi} from "./commonservice/request/QueryApi";
import { catchError } from 'rxjs/operators'
import { of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private queryApi:QueryApi) { }

  getPost():Observable<any>{
    let params
    //console.log("calling api")
    return this.queryApi.doGet('POST',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  getPostInComt(params):Observable<any>{
    console.log("calling api")
    return this.queryApi.doGet('POST',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  createPost(params):Observable<any>{
    console.log("object in service-----",params)
    return this.queryApi.doPost('POSTSPOST',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

}
