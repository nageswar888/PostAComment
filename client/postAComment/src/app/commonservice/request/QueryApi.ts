import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserEndPoint} from "./userEndPoint";

@Injectable()
export class QueryApi {
  constructor(private http: HttpClient) { }

  doGet(url: string,  params: any) {
    url = UserEndPoint(url,params);
    console.log("id in QueryApi----------",params)
    console.log("url in QueryApi----------",url)
    return this.http.get(url, params);
  }

  doPost(url: any, params: any) {
    url = UserEndPoint(url, params);
    console.log("obh",params);
    //alert('>>--->'+url);
    return this.http.post(url, params );
  }


}
