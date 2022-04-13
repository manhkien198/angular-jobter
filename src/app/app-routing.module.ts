import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: IntroduceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
