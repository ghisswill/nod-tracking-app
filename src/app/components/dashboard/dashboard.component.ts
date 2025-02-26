import { Component } from '@angular/core';
import { BlocCardsComponent } from "../bloc-cards/bloc-cards.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BlocCardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
