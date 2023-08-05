import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterRequst } from 'src/app/Models/RegisterRequest';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-next-page-register',
  templateUrl: './next-page-register.component.html',
  styleUrls: ['./next-page-register.component.css'],
})
export class NextPageRegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}

  confirmpassword: string;
  

  registerrequest: RegisterRequst = new RegisterRequst();
  isValid: boolean = true;
  loading: boolean = false;
  disable: boolean = true;
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['red-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  openSnackBar1(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  onRegister(): void {
    this.loading = true;
    if (this.registerrequest.pass === this.confirmpassword) {
      this.service.Register(this.registerrequest).subscribe({
        next: () => {
          this.router.navigate(['/login']);
          this.openSnackBar1('ثبت نام با موفقیت انجام شد');
        },
        error: (e) => {
          this.loading = false;
          if (e.status == 404) {
            this.openSnackBar('موردی یافت نشد');
          } else if (e.status == 500) {
            this.openSnackBar('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
          } else if (e.status == 0) {
            this.openSnackBar('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
          }else if (e.status == 400) {
            this.openSnackBar('برای این شماره تلفن و یا نام مغازه قبلا حساب کاربری ایجاد شده است');
          }
        },
      });
    } else {
      this.isValid = false;
      this.openSnackBar('لطفا فرم ثبت نام را به صورت صحیح وارد کنید');
      this.loading = false;
      this.router.navigate(['/register']);
    }
    console.log(this.confirmpassword)
    console.log(this.registerrequest.pass)
  }
  ngOnInit(): void {}
}
