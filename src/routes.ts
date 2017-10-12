import { Routes }   from '@angular/router';

import { SignupComponent } from './app/signup/signup.component';
import { AboutComponent } from './app/about/about.component';
import { LoginComponent } from './app/login/login.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { StudentComponent } from './app/student/student.component';
import { TutorialComponent } from './app/tutorial/tutorial.component';

export const appRouters: Routes = [
  { path:'', component: AboutComponent },
  { path:'', component: LoginComponent },
  { path:'', component: NavbarComponent },
  { path:'', component: SignupComponent },
  { path:'', component: StudentComponent },
  { path:'', component: TutorialComponent }
  //{ path:'', redirectTo:'', pathMatch: 'full' }
]
