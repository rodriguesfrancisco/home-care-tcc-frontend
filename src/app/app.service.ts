import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

    authenticated = false;

    constructor(private http: HttpClient) { }

}