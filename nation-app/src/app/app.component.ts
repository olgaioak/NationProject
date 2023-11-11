import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FiltersPageComponent } from './filters-page/filters-page.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FiltersPageComponent, CountriesTableComponent, CountriesListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nation-app';
}
