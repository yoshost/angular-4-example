import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { TutorialComponent } from './tutorial/tutorial.component';

import { StudentService }   from './services/student.service';
import { TutorialService }   from './services/tutorial.service';

import { HomeComponent } from './home/home.component';

import { appRouters } from '../routes'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    StudentComponent,
    TutorialComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRouters),
    FormsModule,
    BrowserModule
  ],
  providers: [
    StudentService,
    TutorialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
