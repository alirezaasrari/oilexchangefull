import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextPagePromoteComponent } from './pages/next-page-promote/next-page-promote.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './components/map/map.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PlaqueComponent } from './components/plaque/plaque.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { HistoryButtonComponent } from './components/history-button/history-button.component';
import { FlagnumberComponent } from './components/flagnumber/flagnumber.component';
import { AlphabetSelectorComponent } from './components/alphabet-selector/alphabet-selector.component';
import { NextPagePlaqueComponent } from './pages/next-page-plaque/next-page-plaque.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { NextPageRegisterComponent } from './pages/next-page-register/next-page-register.component';
import { ForgetPasswordOtpComponent } from './pages/forget-password-otp/forget-password-otp.component';
import { OtpRegisterComponent } from './pages/otp-register/otp-register.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { CustomerManagementComponent } from './components/admin-component/customer-management/customer-management.component';
import { StoreManagementComponent } from './components/admin-component/store-management/store-management.component';
import { AnalizeManagementComponent } from './components/admin-component/analize-management/analize-management.component';
import { PromoteManagementComponent } from './components/admin-component/promote-management/promote-management.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlaqueSmallComponent } from './components/plaque-small/plaque-small.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PlaqueComponent,
    LoginButtonComponent,
    FooterComponent,
    InputComponent,
    HistoryButtonComponent,
    FlagnumberComponent,
    AlphabetSelectorComponent,
    NextPagePromoteComponent,
    HomeComponent,
    MapComponent,
    NextPagePlaqueComponent,
    HistoryCardComponent,
    CardDetailComponent,
    ReturnButtonComponent,
    LoginComponent,
    ForgetPasswordComponent,
    NextPageRegisterComponent,
    ForgetPasswordOtpComponent,
    OtpRegisterComponent,
    AdminPanelComponent,
    CustomerManagementComponent,
    StoreManagementComponent,
    AnalizeManagementComponent,
    PromoteManagementComponent,
    PlaqueSmallComponent,
    LoadingComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide:LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
