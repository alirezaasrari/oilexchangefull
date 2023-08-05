import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private service: AdminPanelCustomerManegementService
  ) {}
  loginrequest: LoginRequest = new LoginRequest();
  check: boolean = true;
  loading: boolean = false;

  Check(): boolean {
    return (this.check = !this.check);
  }
  OnLOgin() {
    this.loading = true;
    this.service.login(this.loginrequest).subscribe({
      next: (token: string) => {
        if (this.check) {
          localStorage.setItem('phonenumber', this.loginrequest.Phonenumber);
          localStorage.setItem('pass', this.loginrequest.pass);
        } else if (!this.check) {
          localStorage.setItem('phonenumber', '');
          localStorage.setItem('pass', '');
        }
        localStorage.setItem('token', token);
        this.router.navigate(['/login/adminpanel']);
        this.openSnackBar1('شما با موفقیت به حساب کاربری خود وارد شدید');
      },
      error: (e) => {
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar('موردی یافت نشد');
        } else if (e.status == 500) {
          this.openSnackBar('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        }
      },
    });
  }
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
  ngOnInit(): void {
    const phone = localStorage.getItem('phonenumber');
    const pas = localStorage.getItem('pass');
    if (phone && pas) {
      this.loginrequest.Phonenumber = phone;
      this.loginrequest.pass = pas;
    }
  }
}
