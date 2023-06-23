import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddSubjectService } from './add-subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
})
export class AddSubjectComponent implements OnInit {
  registerForm = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private addSubjectService: AddSubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSave() {
    const userId = localStorage.getItem('UserId')!;

    this.addSubjectService
      .addSubject(this.registerForm.controls.name?.value, userId)
      .subscribe(result => {
        console.log(result);
        this.router.navigateByUrl('/tester-score');
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
}
