import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  Data: any[] = [];
  jobType = true;
  skillsName = true;
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.getData().subscribe((result: any) => {
      //console.warn("Data", result);
      this.Data = result.data;
      console.log(result);
    });
  }
}
