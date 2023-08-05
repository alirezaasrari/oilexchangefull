import { Component, OnInit } from '@angular/core';
import { IPlaqueObject } from 'src/app/InterFaces/IPlaqueObject';
import { plaqueObject } from 'src/app/Models/PlaqueObject';
import { HistoryService } from 'src/app/services/historyService/history.service';

@Component({
  selector: 'app-plaque',
  templateUrl: './plaque.component.html',
  styleUrls: ['./plaque.component.css'],
})
export class PlaqueComponent implements OnInit {
  constructor(private service: HistoryService) {}
  ngOnInit(): void {}
  plaqueobject: plaqueObject = new plaqueObject();

  alphaBets: string[] = [
    'الف',
    'ب',
    'پ',
    'ت',
    'ث',
    'ج',
    'چ',
    'ح',
    'خ',
    'د',
    'ذ',
    'ر',
    'ز',
    'ژ',
    'س',
    'ش',
    'ص',
    'ض',
    'ط',
    'ظ',
    'ع',
    'غ',
    'ف',
    'ق',
    'ک',
    'گ',
    'ل',
    'م',
    'ن',
    'و',
    'ه',
    'ی',
  ];
  selectAlphabetHandler(event: any) {
    this.plaqueobject.thirdCharector = event.target.value;
  }
  plaquenumber: string;
  onSearch() {
    this.plaquenumber = this.plaqueobject.firstCharector
      .concat(this.plaqueobject.firstCharector)
      .concat(this.plaqueobject.secondCharector)
      .concat(this.plaqueobject.thirdCharector)
      .concat(this.plaqueobject.fourthCharector)
      .concat(this.plaqueobject.fivthCharector)
      .concat(this.plaqueobject.sixthCharector)
      .concat(this.plaqueobject.seventhCharector)
      .concat(this.plaqueobject.eighththCharector);
this.service.checkHistory(this.plaquenumber).subscribe((res:IPlaqueObject []) => console.log(res));
  }
}
