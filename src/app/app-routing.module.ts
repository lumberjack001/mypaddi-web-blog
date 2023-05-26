import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RequestResetComponent } from './components/auth/request-reset/request-reset.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { BlogComponent } from './components/dashboard/blog/blog.component';
import { SinglePostComponent } from './components/blog/single-post/single-post.component';
import { ChatComponent } from './components/dashboard/chat/chat.component';
import { SubscriptionComponent } from './partials/modals/subscription/subscription.component'; 
import { AudioComponent } from './components/dashboard/audio/audio.component';
import { AlbumDetailsComponent } from './components/dashboard/album-details/album-details.component';

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
    children: [
      { path: '', component: BlogComponent },
      { path: 'single-post', component: SinglePostComponent },
    ],
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
    children: [
      { path: '', component: AudioComponent},
      { path: 'album-details', component: AlbumDetailsComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
