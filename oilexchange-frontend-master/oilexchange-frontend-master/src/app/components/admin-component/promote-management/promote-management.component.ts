import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import Promote from 'src/app/Models/Promote';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-promote-management',
  templateUrl: './promote-management.component.html',
  styleUrls: ['./promote-management.component.css'],
})
export class PromoteManagementComponent implements OnInit {
  constructor(
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}
  promoted: Promote = new Promote();
  token: any;
  show:boolean = false;
  loading: boolean = true;
  loading2: boolean = true;
  request$:Observable<string>[] = [];
  ngOnInit(): void {
    this.loading = true;
    this.service.GetUserid().subscribe({next:(res: any) => {
      of(res).subscribe({next:(t: any) => {
      this.service.Getpromoted(t).subscribe((r:string) =>{
        if(r != null){
          this.request$.push(of(r.split("T")[0]));
          this.show = true;
          this.loading2 = false;
        }else{
          this.show = false;
        }
        this.loading = false;
      });
      },error:(e)=>{
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar1('موردی یافت نشد');
        } else if (e.status == 500) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 400) {
          this.openSnackBar1('');
        }
      }});
    },error:(e)=>{
      this.loading = false;
      if (e.status == 404) {
        this.openSnackBar1('موردی یافت نشد');
      } else if (e.status == 500) {
        this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      } else if (e.status == 0) {
        this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      } else if (e.status == 400) {
        this.openSnackBar1('');
      }
    }});
  }
  addToPromotedList() {
    this.service.GetUserid().subscribe({next:(res: any) => {
      of(res).subscribe((t: any) => {
        this.promoted.UserId = t;
        this.service.Promote(this.promoted).subscribe(() => {
          this.openSnackBar('درخواست شما ثبت شد ');
          this.show =true;
          this.loading2 =  false;
          this.ngOnInit();
        });
      });
    },error:(e)=>{
      this.loading = false;
      if (e.status == 404) {
        this.openSnackBar1('موردی یافت نشد');
      } else if (e.status == 500) {
        this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      } else if (e.status == 0) {
        this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      } else if (e.status == 400) {
        this.openSnackBar1('');
      }
    }});
  }
  remove(){
    this.service.GetUserid().subscribe({next:(res: any) => {
      of(res).subscribe((t: any) => {
        this.service.deletePromote(t).subscribe(() => {
          this.openSnackBar('درخواست شما با موفقیت حذف شد ');
          this.ngOnInit();
        });
      });
    },error:(e)=>{
      this.loading = false;
      if (e.status == 404) {
        this.openSnackBar1('موردی یافت نشد');
      } else if (e.status == 500) {
        this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      } else if (e.status == 0) {
        this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
      } else if (e.status == 400) {
        this.openSnackBar1('');
      }
    }});
  }
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
}
