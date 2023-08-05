import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import ICustomerCarService from 'src/app/InterFaces/ICustomerCarService';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';
import { CarServiesCollection } from 'src/app/staticValues/CarServiesCollection';

@Component({
  selector: 'app-next-page-plaque',
  templateUrl: './next-page-plaque.component.html',
  styleUrls: ['./next-page-plaque.component.css'],
})
export class NextPagePlaqueComponent implements OnInit {
  constructor(
    private service: AdminPanelCustomerManegementService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  CustomerList$: Observable<ICustomerCarService[]>;
  CarServices: CarServiesCollection = new CarServiesCollection();
  rows: string[] = [
    this.CarServices.EngineOilName,
    this.CarServices.GearBoxOilName,
    this.CarServices.BrakeOilName,
    this.CarServices.AirFilterName,
    this.CarServices.CabinFilterName,
    this.CarServices.OilFilterName,
    this.CarServices.PetrolFilterName,
    this.CarServices.UntiFreezeName,
    this.CarServices.PreviouseKilometer,
    this.CarServices.NextKilometer,
    this.CarServices.hydraulicoil,
  ];
  plaque: any;
  show: boolean = false;
  name$: Observable<string>;
  loading: boolean = true;
  storId: number;
  getname(id: number) {
    this.name$ = this.service.GetStorename(id);
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['red-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  ngOnInit() {
    this.loading = true;
    this.plaque = this.route.snapshot.paramMap.get('plaquenumber');

    this.service.GetCustomersHistory(this.plaque).subscribe({
      next: (res: ICustomerCarService[]) => {
        if (res.length == 0) {
          this.show = false;
          this.loading = false;
          this.openSnackBar('موردی یافت نشد');
        } else {
          this.show = true;
          this.CustomerList$ = of(res);
          this.loading = false;
        }
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
}
