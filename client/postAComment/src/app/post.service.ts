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
    let req
    console.log("calling api")
    return this.queryApi.doGet('POST',req)
      .pipe(
        catchError(err => of([err]))
      );
  }

}
