import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextPagePromoteComponent } from './pages/next-page-promote/next-page-promote.component';
import { HomeComponent } from './pages/home/home.component';
import { NextPagePlaqueComponent } from './pages/next-page-plaque/next-page-plaque.component';
import { LoginComponent } from './pages/login/login.component';
import { NextPageRegisterComponent } from './pages/next-page-register/next-page-register.component';
import { ForgetPasswordOtpComponent } from './pages/forget-password-otp/forget-password-otp.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { OtpRegisterComponent } from './pages/otp-register/otp-register.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';



const routes: Routes = [
  { path: 'promoted', component: NextPagePromoteComponent },
  { path: '', component: HomeComponent },
  { path: 'historyplaque/:plaquenumber', component: NextPagePlaqueComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/register' , component: NextPageRegisterComponent},
  { path: 'login/otp' , component: ForgetPasswordOtpComponent},
  { path: 'login/forgetpassword/adminpanel' , component: AdminPanelComponent},
  { path: 'login/forgetpassword' , component: ForgetPasswordComponent},
  { path: 'login/register/otp' , component: OtpRegisterComponent},
  { path: 'login/register/otp/adminpanel' , component: AdminPanelComponent},
  { path: 'login/adminpanel' , component: AdminPanelComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
