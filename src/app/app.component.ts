import { Component } from '@angular/core';
import { Producte } from './model/producte';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  producteSeleccionat?: Producte;
  monedaSeleccionada?: number;

  constructor(public appService: AppService) {}

  introduirMoneda() {
    if (this.monedaSeleccionada)
      this.appService.introduirDiners(this.monedaSeleccionada);
  }

  demanarProducte() {
    if (this.producteSeleccionat)
      this.appService.demanarProducte(this.producteSeleccionat.codi);
  }

  recollirProductesCalaix() {
    this.appService.recollirProductesCalaix();
  }

  recollirDinersCalaix() {
    this.appService.recollirDinersCalaix();
  }
}
