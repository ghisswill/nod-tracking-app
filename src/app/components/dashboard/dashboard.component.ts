import { Component } from '@angular/core';
import { BlocCardsComponent } from "../bloc-cards/bloc-cards.component";
import { BlocMapsComponent } from "../bloc-maps/bloc-maps.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BlocCardsComponent, BlocMapsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
