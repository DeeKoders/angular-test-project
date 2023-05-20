import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  constructor(
    private moviesData: MovieDataService,
    private alertService: AlertService
  ) {
    moviesData.movies().subscribe((data: any) => {
      console.warn(data);
      this.cards = data.results;
    });
  }
  BASE_URL = 'https://image.tmdb.org/t/p/original/';
  cards: any;
  triggerAlert(card: any): void {
    // Call the showAlert() method of AlertService with the desired message
    this.alertService.showAlert(card.overview);
  }
  showDetail(card: any) {
    console.log('Showing detail for:', card.title);
    // Add your custom logic here for showing card details
  }
}
