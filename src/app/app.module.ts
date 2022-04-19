import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LoginComponent } from './components/login/login.component';
import { StatsComponent } from './components/stats/stats.component';
import { AllJobComponent } from './components/all-job/all-job.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AvatarPipe } from './components/all-job/avatar.pipe';
import { TokenIntecepterService } from './token-intecepter.service';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntecepterService,
      multi: true,
    },
  ],
  declarations: [
    AppComponent,
    IntroduceComponent,
    LoginComponent,
    StatsComponent,
    AllJobComponent,
    AddJobComponent,
    ProfileComponent,
    AvatarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    NgxChartsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
