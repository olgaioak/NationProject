import { Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { FiltersPageComponent } from './filters-page/filters-page.component';

export const routes: Routes = [
    {path: 'countries-list', component: CountriesListComponent},
    {path: 'countries-table', component: CountriesTableComponent},
    {path: 'filters-page', component: FiltersPageComponent},
];
