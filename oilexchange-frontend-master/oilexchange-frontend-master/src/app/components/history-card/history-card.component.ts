import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ICustomerCarService from 'src/app/InterFaces/ICustomerCarService';
import CustomerCarService from 'src/app/Models/CustomerCarService';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';
import { CarServiesCollection } from 'src/app/staticValues/CarServiesCollection';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css'],
})
export class HistoryCardComponent {
  // CarServices: CarServiesCollection = new CarServiesCollection();

  // constructor(private service: AdminPanelCustomerManegementService) {}

  // CustomerList$: Observable<ICustomerCarService[]>;

  // rows: string[] = [
  //   this.CarServices.EngineOilName,
  //   this.CarServices.GearBoxOilName,
  //   this.CarServices.BrakeOilName,
  //   this.CarServices.AirFilterName,
  //   this.CarServices.CabinFilterName,
  //   this.CarServices.OilFilterName,
  //   this.CarServices.PetrolFilterName,
  //   this.CarServices.UntiFreezeName,
  //   this.CarServices.PreviouseKilometer,
  //   this.CarServices.NextKilometer,
  // ];
  // Refresh(e: any) {
  //   this.ngOnInit();
  // }
  // ngOnInit(): void {
  //   this.CustomerList$ = this.service.GetCustomers();
  // }
}
