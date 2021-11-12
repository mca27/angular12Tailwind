import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'in']);
    translateService.setDefaultLang('en');
  }
  translateSite(langauge: string) {
    console.log(langauge);
    this.translateService.use(langauge);
  }

  ngOnInit(): void {}
}
