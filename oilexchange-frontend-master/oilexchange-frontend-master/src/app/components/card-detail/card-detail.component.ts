import { Component } from '@angular/core';
import { CarServiesCollection } from 'src/app/staticValues/CarServiesCollection';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent {
  Services: CarServiesCollection = new CarServiesCollection();
  rows: string[] = [
    this.Services.EngineOilName,
    this.Services.GearBoxOilName,
    this.Services.BrakeOilName,
    this.Services.AirFilterName,
    this.Services.CabinFilterName,
    this.Services.OilFilterName,
    this.Services.PetrolFilterName,
    this.Services.UntiFreezeName,
    this.Services.PreviouseKilometer,
    this.Services.NextKilometer,
    this.Services.hydraulicoil    
  ];
}
