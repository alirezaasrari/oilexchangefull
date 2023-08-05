import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {}

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
  plaquenumber: string[] = ['', '', '', '', '', '', '', ''];

  selectAlphabetHandler(event: any) {
    this.plaquenumber[2] = event.target.value;
  }
  plaquenumber2: string;
  onSearch() {
    this.plaquenumber2 = this.plaquenumber[0]
      .concat(this.plaquenumber[1])
      .concat(this.plaquenumber[2])
      .concat(this.plaquenumber[3])
      .concat(this.plaquenumber[4])
      .concat(this.plaquenumber[5])
      .concat(this.plaquenumber[6])
      .concat(this.plaquenumber[7]);
    this.router.navigate(['/historyplaque', this.plaquenumber2]);
  }
}
