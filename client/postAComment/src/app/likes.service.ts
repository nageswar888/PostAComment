import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {QueryApi} from "./commonservice/request/QueryApi";
import { catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private http: HttpClient, private queryApi:QueryApi) { }

  getLikes():Observable<any>{
    let req
    console.log("calling api")
    return this.queryApi.doGet('LIKE',req)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
