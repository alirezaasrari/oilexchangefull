import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-forget-password-otp',
  templateUrl: './forget-password-otp.component.html',
  styleUrls: ['./forget-password-otp.component.css'],
})
export class ForgetPasswordOtpComponent {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['red-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  loading: boolean = false;
  openSnackBar1(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  phone: string;
  changePass() {
    this.loading = true;
    this.service.forgetpassword(this.phone).subscribe({next:(res: string) => {
      localStorage.setItem('forgetpasstoken', res);
      this.openSnackBar1('شما میتوانید رمز حساب کاربری خود را تغییر دهید');
      this.router.navigate(['/login/forgetpassword']);
    },error:(e) => {
      this.loading = false;
      if (e.status == 404) {
        this.openSnackBar('موردی یافت نشد');
      } else if (e.status == 500) {
        this.openSnackBar('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      } else if (e.status == 0) {
        this.openSnackBar('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      }else if (e.status == 400) {
        this.openSnackBar('لطفا شماره تلفن رو به صورت صحیح وارد کنید');
      }
    },});
  }
}
