import { Producte } from './producte';

describe('Producte', () => {
  it('should create an instance', () => {
    expect(new Producte('01', 'Bikini', 4, 1)).toBeTruthy();
  });
});
