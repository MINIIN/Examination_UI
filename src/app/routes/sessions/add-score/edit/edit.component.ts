import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddScoreComponent } from '../add-score.component';
import { AddScoreService } from '../add-score.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  registerForm = this.fb.group({
    // name: ['',{}],
    socre: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddScoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addScoreService: AddScoreService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onSave() {
    this.addScoreService
      .addScore(
        this.data.record.id,
        this.data.record.subjectId,
        this.registerForm.controls.socre?.value
      )
      .subscribe(result => {
        this.dialogRef.close();
      });
  }
}
