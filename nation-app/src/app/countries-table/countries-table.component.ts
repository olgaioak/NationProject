import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ConfigService } from '../config/config.service';
import { Country } from '../models/country';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-countries-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.css',
  providers: [ConfigService]
})

export class CountriesTableComponent {

  displayedColumns: string[] = [
    'name',
    'country_code3',
    'year',
    'population',
    'gdp',
  ];
  dataSource: MatTableDataSource<Country>;

  constructor(private configService: ConfigService) {}

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.getGdpData());
  }

  getGdpData(): Array<Country>{
    this.configService.getGdpData().subscribe((countries) => {
        console.log(countries);
        return countries;
      });
    return [];
  }

}
