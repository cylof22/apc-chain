import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HTTPService {
    constructor(private http: HttpClient) {
    }

    register(postedData : any) : Observable<string> {
        let body = postedData;
        return this.http.post<string>("/token", body);
    }
}