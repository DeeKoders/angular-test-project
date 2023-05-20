import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertMessageSource = new Subject<string>();
  alertMessage$ = this.alertMessageSource.asObservable();

  showAlert(message: string): void {
    this.alertMessageSource.next(message);
  }
}
