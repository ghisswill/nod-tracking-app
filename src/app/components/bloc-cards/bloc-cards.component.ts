import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Card } from '../../shared/models/card.model';

@Component({
  selector: 'app-bloc-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './bloc-cards.component.html',
  styleUrl: './bloc-cards.component.css'
})
export class BlocCardsComponent implements OnInit {

  cards: Card[] = [];
  ngOnInit(): void {
    this.cards = [
      {
        label: 'Online Users',
        value: 6,
        description: `<Valeur>
                    Nombre de Vehicules en ligne 
                    à la palce de l'ecran`
      },
      {
        label: 'Created Today (Official)',
        value: 0,
        description: ''
      },
      {
        label: 'Active Subscriptions',
        value: 65,
        description: `Nombre total d'utilisateur`
      },
      {
        label: 'Open Connections',
        value: 6,
        description: `Nombre de kilometres parcourus ce mois
                    - jour avec le plus km
                    - jour avec le mons de km`
      },
      {
        label: 'Create Today (Trials)',
        value: 0,
        description: ''
      }
    ]
  }

}
