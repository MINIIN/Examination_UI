import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isSubmitting = false;
  // favcolor = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    // rememberMe: [false],
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // get rememberMe() {
  //   return this.loginForm.get('rememberMe');
  // }

  login() {
    this.isSubmitting = true;

    this.auth
      .login(this.email?.value, this.password?.value)
      // .pipe(filter(authenticated => authenticated))
      .subscribe(
        // () => this.router.navigateByUrl('/'),
        (
          x //console.log(x)
        ) => {
          if (x == true) {
            this.auth.loginUser(this.email?.value, this.password?.value).subscribe(result => {
              console.log(result);
              localStorage.setItem('UserId', result.id);
              localStorage.setItem('Permisson', result.permisson);

              if (result.permisson == '1') {
                this.router.navigateByUrl('/admin-Dashbord');
              }
              else if (result.permisson == '2') {
                this.router.navigateByUrl('/tester-score');
              } else {
                this.router.navigateByUrl('/examination-score');
              }
              // Test
              // localStorage.setItem('UserId', '4');
            });
            // this.router.navigateByUrl('/');
          } else {
            // this.router.navigateByUrl('/');
            this.isSubmitting = false;
          }
        },

        (errorRes: HttpErrorResponse) => {
          // if (errorRes.status === 422) {
          if (errorRes.status === 401) {
            // const form = this.loginForm;
            // const errors = errorRes.error.errors;
            // Object.keys(errors).forEach(key => {
            //   form.get(key === 'email' ? 'username' : key)?.setErrors({
            //     remote: errors[key][0],
            //   });
            // });
            // document.getElementById("login").style.visibility = "hidden";
          }

          this.isSubmitting = false;
          // if(errorRes.status === 0)
          // {
          //   this.router.navigateByUrl('/');
          //   this.isSubmitting = true;
          // }
        }
      );
  }
}
