import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  lang: any;

  changeLang(arg0: string) {
    throw new Error('Method not implemented.');
  }

}