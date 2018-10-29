import {Component, OnInit} from '@angular/core';
import { LoginService } from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
  title = 'TestApp';
  isLogin: boolean = false;

  ngOnInit() {}

  isLoggednIn() {
    this.isLogin = true;
    return this.getLogin() !== null;
  }
  getLogin() {
    return localStorage.getItem("currentUser");
  }
}
