import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Login} from "../models/login";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  SERVER_API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  login(user: Login) {
    return this.http.post<string>(this.SERVER_API_URL + 'login', user)
    .pipe(map(token => {
      localStorage.setItem('access_token', token);
      let email = this.jwtHelper.decodeToken(token).sub;
      localStorage.setItem('access_email', email);
      return token;
    }));
  }

  getCurrentUser(): string {
    const token = localStorage.getItem('access_token');
    if (token !== null) {
      return this.jwtHelper.decodeToken(token).sub;
    }
    return null;
  }
}
