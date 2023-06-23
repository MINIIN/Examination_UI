// import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@core/authentication';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterSuccessComponent } from './dialog/register-success/register-success.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  selectedPermissions!: string;
  // teamInitial = '';

  confirmValidator = (control: FormControl): { [k: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { error: true, confirm: true };
    }
    return {};
  };

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [this.confirmValidator]],
    permission: [this.selectedPermissions, [Validators.required]],
    studentId: '',
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    // private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  openWelcomeDialog() {
    // this.snackBar.open('Successful Registration', '', { duration: 2000 });
    this.dialog.open(RegisterSuccessComponent);

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [this.confirmValidator]],
      permission: [this.selectedPermissions, [Validators.required]],
      studentId: '',
    });
    // this.teamInitial = '';
  }

  onSave() {
    this.auth
      .addUser(
        this.registerForm.controls.name?.value,
        this.registerForm.controls.email?.value,
        this.registerForm.controls.password?.value,
        this.registerForm.controls.permission?.value,
        this.registerForm.controls.studentId?.value
      )
      .subscribe(x => {
        console.log(x);
        this.openWelcomeDialog();
      });
  }

  changeClient(value: any) {
    this.registerForm.controls.permission.setValue(value);
  }

  permissions = [
    // { value: 'admin', label: 'Admin' },
    { value: '2', label: 'Tester' },
    { value: '3', label: 'Examiner' },
  ];
}

// Dialog
// @Component({
//   selector: 'register-success',
//   templateUrl: './register-success.html',
// })
// export class RegisterSuccessComponent {}
