import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { annotation, annotationSolid, HeroIconsModule } from 'ng-heroicons';
@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeroIconsModule.withIcons({ annotation, annotationSolid }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
