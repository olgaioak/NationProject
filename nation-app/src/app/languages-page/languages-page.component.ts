import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../models/language';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-languages-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages-page.component.html',
  styleUrl: './languages-page.component.css',
  providers: [ConfigService]
})
export class LanguagesPageComponent {

  constructor(private configService: ConfigService, private route:ActivatedRoute) {}

  ngOnInit(){
      let country_id = this.route.snapshot.paramMap.get('id');
      this.getLanguagesById(Number(country_id));
  }
  getLanguagesById(id: number): Array<Language>{
    this.configService.getLanguagesById(id).subscribe((lang) => {
        console.log(lang);
        return lang;
      });
    return [];
  }
}
