import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.authService.getCurrentUser() != null) {
      this.router.navigate(['/home']).then();
    }
  }

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      this.authService.login(this.form.getRawValue()).subscribe(res => {
        this.router.navigate(['/home']).then();
      }, err => {
        this.loginInvalid = true;
      })
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
