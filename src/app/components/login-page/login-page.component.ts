import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class LoginPageComponent implements OnInit {

  loginForm !: FormGroup
  registerForm !: FormGroup
  constructor(private authService : AuthService, private router :Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required])
      }
    )

    this.registerForm = new FormGroup(
      {
        
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required])
      }
    )
  }

  onLoginSubmit() {
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value )
      .subscribe(res => {
        this.authService.sessionUser = res;
        console.log(res)
        localStorage.setItem('token', res.token)
        let redirectUrl = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
        this.router.navigateByUrl(redirectUrl);
      }
      )
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value)
      .subscribe(res => {
        this.authService.sessionUser = res;
        console.log(res)
        localStorage.setItem('token', res.token)
        let redirectUrl = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
        this.router.navigateByUrl(redirectUrl);
      }
        )
    }
  }

}
