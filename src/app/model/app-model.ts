import { Producte } from './producte';

export class AppModel {
  productes: Array<Producte> = [
    { nom: 'Aigua', codi: '01', preu: 0.5, stock: 10 },
    { nom: 'Bocata', codi: '02', preu: 3, stock: 0 },
    { nom: 'xips', codi: '03', preu: 1, stock: 4 },
  ];

  dinersIntroduits: number = 0;
  dinersTotals: number = 100;

  display: string = '';

  calaixRecollir: Array<Producte> = [];
  calaixDiners: number = 0;
}
