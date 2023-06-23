import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterSubjectService } from './register-subject.service';

@Component({
  selector: 'app-register-subject',
  templateUrl: './register-subject.component.html',
})
export class RegisterSubjectComponent implements OnInit {
  registerForm = this.fb.group({
    subject: ['', [Validators.required]],
  });

  userId = localStorage.getItem('UserId')!;
  // userId = '8' ;
  subjects = this.registerSubjectService.getSubject(this.userId);
  constructor(
    private fb: FormBuilder,
    private registerSubjectService: RegisterSubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSave() {
    // var userId = localStorage.getItem('UserId')!;
    // userId = '8'

    this.registerSubjectService
      .addSubject(this.registerForm.controls.subject?.value, this.userId)
      .subscribe(result => {
        console.log(result);
        this.router.navigateByUrl('/examination-score');
      });
    // this.auth
    //   .addUser(
    //     this.registerForm.controls.name?.value,
    //     this.registerForm.controls.email?.value,
    //     this.registerForm.controls.password?.value,
    //     this.registerForm.controls.permission?.value,
    //     this.registerForm.controls.studentId?.value
    //   )
    //   .subscribe(x => {
    //     console.log(x);
    //     this.openWelcomeDialog();
    //   });
  }

  changeClient(value: any) {
    this.registerForm.controls.subject.setValue(value);
  }
}
