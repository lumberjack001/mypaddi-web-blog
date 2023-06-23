import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { ThemeEffects } from './store/effects/theme.effects';

import { AuthService } from './services/auth/auth.service';


import { ToastrModule } from 'ngx-toastr';
import { Angular4PaystackModule } from 'angular4-paystack';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ShareModule } from 'ngx-sharebuttons';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AuthComponent } from './layout/auth/auth.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RequestResetComponent } from './components/auth/request-reset/request-reset.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';

import { LandingpageheaderComponent } from './components/landing-page/landingpageheader/landingpageheader.component';
import { LandingpageNavbarComponent } from './partials/landingpage-navbar/landingpage-navbar.component';
import { LandingpageFooterComponent } from './partials/landingpage-footer/landingpage-footer.component';
import { LandingpagePartnerComponent } from './partials/landingpage-partner/landingpage-partner.component';
import { MainCarouselComponent } from './partials/carousels/main-carousel/main-carousel.component';
import { LandingpagefeaturesComponent } from './components/landing-page/landingpage-features/landingpage-features.component';
import { LandingpageCampaignComponent } from './components/landing-page/landingpage-campaign/landingpage-campaign.component';
import { RadioBtnComponent } from './partials/radio-btn/radio-btn.component';
import { SubscriptionComponent } from './partials/modals/subscription/subscription.component';
import { ChatComponent } from './components/dashboard/chat/chat.component';


import { HeaderComponent } from './partials/header/header.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './partials/right-sidebar/right-sidebar.component';
import { NavIconsComponent } from './partials/nav-icons/nav-icons.component';
import { SubscriptionCardComponent } from './partials/subscription-card/subscription-card.component';
import { BlogComponent } from './components/dashboard/blog/blog.component';
import { BlogFeaturedComponent } from './components/blog/blog-featured/blog-featured.component';
import { BlogMainComponent } from './components/blog/blog-main/blog-main.component';
import { SinglePostComponent } from './components/dashboard/single-post/single-post.component';
import { ChatBannerComponent } from './partials/chat-banner/chat-banner.component';
import { PersonalDetailsComponent } from './partials/modals/personal-details/personal-details.component';
import { TrackOrderComponent } from './partials/modals/track-order/track-order.component';
import { PeriodCheckerComponent } from './partials/modals/period-checker/period-checker.component';

import { AlbumListComponent } from './components/audio/album-list/album-list.component';
import { AudioComponent } from './components/dashboard/audio/audio.component';
import { AlbumDetailsComponent } from './components/dashboard/album-details/album-details.component';
import { AudioListComponent } from './components/audio/audio-list/audio-list.component';
import { SelectCategoryComponent } from './partials/modals/select-category/select-category.component';
import { SmallSpinnerComponent } from './partials/loaders/small-spinner/small-spinner.component';
import { SpinnerComponent } from './partials/loaders/spinner/spinner.component';
import { StatusUpdateComponent } from './partials/loaders/status-update/status-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    RequestResetComponent,
    ResetPasswordComponent,
    LandingpageheaderComponent,
    LandingpageNavbarComponent,
    LandingpageFooterComponent,
    LandingpagePartnerComponent,
    MainCarouselComponent,
    LandingpagefeaturesComponent,
    LandingpageCampaignComponent,
    RadioBtnComponent,
    SubscriptionComponent,
    ChatComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    NavIconsComponent,
    SubscriptionCardComponent,
    BlogComponent,
    BlogFeaturedComponent,
    BlogMainComponent,
    SinglePostComponent,
    ChatBannerComponent,
    PersonalDetailsComponent,
    TrackOrderComponent,
    PeriodCheckerComponent,
    AlbumListComponent,
    AudioComponent,
    AlbumDetailsComponent,
    AudioListComponent,
    SelectCategoryComponent,
    SmallSpinnerComponent,
    SpinnerComponent,
    StatusUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ShareModule,
    InfiniteScrollModule,
    ClipboardModule,
    StoreModule.forRoot(Appreducers),
    EffectsModule.forRoot([
      AuthEffects,
      ProfileEffects,
      SubscriptionEffects,
      NotificationEffects,
      BlogEffects,
      UnauthBlogEffects,
      UserEffects,
      ChatEffects,
      ThemeEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    ToastrModule.forRoot(),
    Angular4PaystackModule.forRoot(
      environment.production
        ? environment.PAYSTACK_LIVE_PUBLIC_KEY
        : environment.PAYSTACK_TEST_PUBLIC_KEY
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
