import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RequestResetComponent } from './components/auth/request-reset/request-reset.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ChatComponent } from './components/dashboard/chat/chat.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'request-reset', component: RequestResetComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ],
  },
  {
    path: 'blog',
    component: DashboardComponent,
  },
  {
    path: 'chat',
    component: DashboardComponent,
    children: [
      { path: '', component: ChatComponent},
    ]
  },
  {
    path: 'audio',
    component: DashboardComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
