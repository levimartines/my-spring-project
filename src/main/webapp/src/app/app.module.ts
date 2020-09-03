import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./services/authentication.service";
import {HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {tokenGetter: tokenGetter}
    }),
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
