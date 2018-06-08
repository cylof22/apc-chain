import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HTTPService {
    private url : string;

    constructor(private http: HttpClient) {
        this.url = 'http://localhost:8000/#';
    }

    register(postedData : any) : Observable<string> {
        let body = postedData;
        return this.http.post<string>(this.url + "/token", body);
    }
}