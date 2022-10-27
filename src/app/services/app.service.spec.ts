import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("una compra d'una aigua", () => {
    const aigua = service.producte('01');
    expect(aigua).toBeDefined();

    const aiguesInicials = aigua?.stock!;
    const caixaInicial = service.model.dinersTotals;

    service.introduirDiners(1);
    service.demanarProducte('01');

    expect(service.model.calaixRecollir.length)
      .withContext("Al calaix hi ha d'haver almenys 1 producte")
      .toBeGreaterThan(0);

    expect(service.model.calaixRecollir.some((p) => p.codi == '01'))
      .withContext("Al calaix hi ha d'haver almenys 1 aigua")
      .toBeTrue();

    expect(service.model.calaixDiners)
      .withContext('Ha de retornar 0.5€ al calaix de monedes')
      .toBe(0.5);

    expect(aigua?.stock)
      .withContext("El stock d'aigues ha de decrementar")
      .toBe(aiguesInicials - 1);

    expect(service.model.dinersTotals)
      .withContext("La caixa ha d'haver-hi més diners")
      .toBe(caixaInicial + aigua?.preu!);

    expect(service.model.dinersIntroduits)
      .withContext('Els diners introduits ha de ser 0')
      .toBe(0);
  });
});
