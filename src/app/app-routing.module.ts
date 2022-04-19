import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth.guard';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LoginComponent } from './components/login/login.component';
import { StatsComponent } from './components/stats/stats.component';
import { AllJobComponent } from './components/all-job/all-job.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: IntroduceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'alljob', component: AllJobComponent, canActivate: [AuthGuard] },
  { path: 'addjob', component: AddJobComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
