import { Component } from '@angular/core';

@Component({
  selector: 'app-usados-home-page',
  templateUrl: './usados-home-page.component.html',
  styleUrls: ['./usados-home-page.component.css']
})
export class UsadosHomePageComponent {
  images = ['used-home-banner-1', 'banner-dos'].map((n) => `assets/img/banners/${n}.png`);
}
