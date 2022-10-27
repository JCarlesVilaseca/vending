import { Injectable } from '@angular/core';
import { AppModel } from '../model/app-model';
import { Producte } from '../model/producte';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  model: AppModel = new AppModel();

  constructor() {}

  public producte(codi: string): Producte | undefined {
    return this.model.productes.find((p) => p.codi == codi);
  }

  public introduirDiners(quantitat: number): void {
    this.model.dinersIntroduits += quantitat;
  }

  public demanarProducte(codi: string): void {
    const producteDemanat = this.producte(codi);

    if (!producteDemanat) {
      this.model.display = 'Producte no existeix';
      return;
    }

    if (this.model.dinersIntroduits < producteDemanat.preu) {
      this.model.display = 'Diners insuficients';
      return;
    }

    if (producteDemanat.stock <= 0) {
      this.model.display = `No hi ha stock de ${producteDemanat.nom}`;
      return;
    }

    this.model.calaixRecollir.push(producteDemanat);
    producteDemanat.stock--;
    this.model.calaixDiners +=
      this.model.dinersIntroduits - producteDemanat.preu;
    this.model.dinersTotals += producteDemanat.preu;
    this.model.dinersIntroduits = 0;

    this.model.display = `Reculli el producte (${producteDemanat.nom}) al calaix`;
  }

  public devolucioDiners(): void {
    this.model.calaixDiners += this.model.dinersIntroduits;
    this.model.dinersIntroduits = 0;
  }

  public recollirDinersCalaix(): void {
    this.model.calaixDiners = 0;
  }

  public recollirProductesCalaix(): void {
    this.model.calaixRecollir.length = 0;
    this.model.display = '';
  }
}
