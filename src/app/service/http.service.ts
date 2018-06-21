import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HTTPService {
    constructor(private http: HttpClient) {
    }

    register(postedData : any) : Observable<HttpErrorResponse> {
        let body = postedData;
        return this.http.post<HttpErrorResponse>("/token", body);
    }

    upload(postedData : any) : Observable<HttpErrorResponse> {
        let body = postedData;
        return this.http.post<HttpErrorResponse>("/picture", body);
    }
}