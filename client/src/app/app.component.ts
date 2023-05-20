import { Component } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private alertService: AlertService) {}
  alertMessage!: string;
  title = 'angular-practice-project';
  ngOnInit(): void {
    this.alertService.alertMessage$.subscribe((message) => {
      this.alertMessage = message;
    });
  }
  clearAlertMessage() {
    this.alertMessage = '';
  }
}
