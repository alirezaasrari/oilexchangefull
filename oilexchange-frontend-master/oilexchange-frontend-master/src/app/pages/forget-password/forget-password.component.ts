import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ChangePass } from 'src/app/Models/ChangePass';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}
  isValid: boolean = true;
  confirmpassword: string;
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  openSnackBar1(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['red-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  loading: boolean = false;
  tok: string | null;
  resetpass: ChangePass = new ChangePass();
  onResetpass(): void {
    this.loading = true;
    this.tok = localStorage.getItem('forgetpasstoken');
    if (this.tok) {
      this.resetpass.Token = this.tok;
      if (this.resetpass.pass == this.confirmpassword) {
        this.service.resetpassword(this.resetpass).subscribe({next:()=>{
          this.router.navigate(['/login']);
        this.openSnackBar(' تغییر رمز ورود با موفقیت انجام شد');
        localStorage.removeItem('forgetpasstoken');
        },error:(e) => {
          this.loading = false;
          if (e.status == 404) {
            this.openSnackBar1('موردی یافت نشد');
          } else if (e.status == 500) {
            this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
          } else if (e.status == 0) {
            this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
          }else if (e.status == 400) {
            this.openSnackBar1('لطفا شماره تلفن رو به صورت صحیح وارد کنید');
          }
        },});
        
      } else {
        this.openSnackBar1('لطفا فرم را به صورت صحیح کامل کنید')
        this.isValid = false;
        this.loading = false;
      }
    } else {
      this.router.navigate(['login/forgetpassword']);
    }
  }
  ngOnInit(): void {}
}
