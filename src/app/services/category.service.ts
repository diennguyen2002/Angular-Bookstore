import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()

export class CategoryService {
    constructor(private http: HttpClient){}
    getCategories(){
        const options = {
            headers: new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
        }
        return this.http.post("http://localhost:3000/api/categories", options);
    }
}