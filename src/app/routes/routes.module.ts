import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AdminDashbordComponent } from './sessions/admin-dashbord/admin-dashbord.component';
import { AddSubjectComponent } from './sessions/add-subject/add-subject.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TesterScoreComponent } from './sessions/tester-score/tester-score.component';
import { RegisterSubjectComponent } from './sessions/register-subject/register-subject.component';
import { AddScoreComponent } from './sessions/add-score/add-score.component';
import { ExaminationScoreComponent } from './sessions/examination-score/examination-score.component';
import { RegisterSuccessComponent } from './sessions/register/dialog/register-success/register-success.component';
import { EditComponent } from './sessions/add-score/edit/edit.component';

const COMPONENTS: any[] = [
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
  AdminDashbordComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, MatDialogModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC,
    AddSubjectComponent,
    TesterScoreComponent,
    RegisterSubjectComponent,
    AddScoreComponent,
    ExaminationScoreComponent,
    RegisterSuccessComponent,
    EditComponent,
  ],
  // exports: [
  //   MatDialogModule,
  // ]
})
export class RoutesModule {}
