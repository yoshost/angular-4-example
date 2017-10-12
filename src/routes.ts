import { Routes }   from '@angular/router';

import { SignupComponent } from './app/signup/signup.component';
import { AboutComponent } from './app/about/about.component';
import { LoginComponent } from './app/login/login.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { StudentComponent } from './app/student/student.component';
import { TutorialComponent } from './app/tutorial/tutorial.component';
import { HomeComponent } from './app/home/home.component';

export const appRouters: Routes = [
  { path:'about', component: AboutComponent },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'students', component: StudentComponent },
  { path:'tutorials', component: TutorialComponent },
  { path:'', component: HomeComponent }
  //{ path:'', redirectTo:'', pathMatch: 'full' }
]
