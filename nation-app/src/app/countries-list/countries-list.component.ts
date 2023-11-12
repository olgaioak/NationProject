import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../config/config.service';
import { Country } from '../models/country';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './countries-list.component.html', 
  styleUrl: './countries-list.component.css',
  providers: [ConfigService]
})
export class CountriesListComponent {
  public countriesList: Array<Country>;
  dataSource: MatTableDataSource<Country>;

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(){
    this.countriesList = this.getOrderedCountries();
  //   this.countriesList = [{
  //     "country_id": 1,
  //     "name": "Aruba",
  //     "area": 193.0,
  //     "national_day": new Date(),
  //     "country_code2": "AW",
  //     "country_code3": "ABW",
  //     "region_id": 12,
  //     "year": 1993,
  //     "population": 72504,
  //     "gdp": 1082979708
  //   },
  //   {
  //     "country_id": 1,
  //     "name": "Aruba",
  //     "area": 193.00,
  //     "national_day": new Date(),
  //     "country_code2": "AW",
  //     "country_code3": "ABW",
  //     "region_id": 1,
  //     "year": 1993,
  //     "population": 72504,
  //     "gdp": 1082979708
  //   }
  // ];
  }

  getOrderedCountries(): Array<Country>{
    this.configService.getOrderedCountries().subscribe((countries) => {
        console.log(countries);
        return countries;
      });
    return [];
  }
  goToLanguagesPage(country_id: number){
    this.router.navigate(['/languages', country_id]);
  }
}
