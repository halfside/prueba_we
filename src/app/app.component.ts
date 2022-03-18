import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba técnica Wembley Studios';
  loading$ = this.spinnerService.loading$;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  






}
