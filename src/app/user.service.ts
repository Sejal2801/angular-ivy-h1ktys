import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = "https://instajobapp.herokuapp.com/api/getAll/jobposts";
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.post(this.url, {
      headers: new HttpHeaders({ "content-type": "application/json" })
    });
  }
}
