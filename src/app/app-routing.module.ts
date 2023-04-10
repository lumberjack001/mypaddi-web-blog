import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';



const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "auth",
    component: AuthComponent, 
  },
  {
    path: "blog",
    component: DashboardComponent
  },
  {
    path: "chat",
    component: DashboardComponent
  },
  {
    path: "audio",
    component: DashboardComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
