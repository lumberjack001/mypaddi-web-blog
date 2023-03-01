import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/http.interceptor';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Appreducers } from './store';
import { AuthEffects } from './store/effects/auth.effects';
import { BlogEffects } from './store/effects/blog.effects';
import { UnauthBlogEffects } from './store/effects/unauth-blog.effects';
import { UserEffects } from './store/effects/user.effects';
import { ChatEffects } from './store/effects/chat.effects'
import { ProfileEffects } from './store/effects/profile.effects';
import { SubscriptionEffects } from './store/effects/subscription.effects';
import { NotificationEffects } from './store/effects/notifications.effects';

import { AuthService } from './services/auth/auth.service';


import { ToastrModule } from 'ngx-toastr';
import { Angular4PaystackModule } from 'angular4-paystack';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(Appreducers),
    EffectsModule.forRoot([
      AuthEffects,
      ProfileEffects,
      SubscriptionEffects,
      NotificationEffects,
      BlogEffects,
      UnauthBlogEffects,
      UserEffects,
      ChatEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    ToastrModule.forRoot(),
    Angular4PaystackModule.forRoot(environment.production ? environment.PAYSTACK_LIVE_PUBLIC_KEY : environment.PAYSTACK_TEST_PUBLIC_KEY),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
