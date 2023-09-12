import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent {
  countriesData: any;
  errorMessage: any;

  constructor(private data: DataService) {
    console.log('data inside countries contsructor', this.data);
  }
  ngOnInit() {
    console.log('this.data.getCountries()', this.data.getCountries());
    this.data.getCountries().subscribe({
      next: (data) => {
        this.countriesData = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    console.log(
      'countriesData inside ngOnInit countries component',
      this.countriesData
    );
  }
}
