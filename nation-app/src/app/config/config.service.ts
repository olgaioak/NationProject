import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }
  serverUrl = 'http://localhost:8080/nation-0.0.1-SNAPSHOT/api/v1';
  configUrl = 'assets/config.json';

  getOrderedCountries(){
    return this.http.get(this.serverUrl + '/orderedCountries').pipe(
        map((countries) => {return countries; })
    );
  }
  getLanguagesById(country_id: number){
    return this.http.get(this.serverUrl + '/getLanguagesById/' + country_id).pipe(
        map((lang) => {return lang; })
    );
  }
  getGdpData(){
    return this.http.get(this.serverUrl + '/getGdpData').pipe(
        map((countries) => {return countries; })
    );
  }
}