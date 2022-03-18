import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  //Declare var loading as observable
  loading$ = new BehaviorSubject<boolean>(false);

  // Show the spinner
  showSpinner(): void {
    this.loading$.next(true);
  };

  //Hide the spinner
  hideSpinner(): void {
    this.loading$.next(false);
   };
}
