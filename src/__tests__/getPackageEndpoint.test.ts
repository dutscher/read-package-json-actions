import fs from 'fs';

import { findPackageJson, getPackageEndpoint } from '../getPackageEndpoint';

const fixturePath = './src/__tests__/fixture';
const fixture = `./src/__tests__/fixture/package.json`;

describe('getPackageEndpoint', () => {
  describe('getPackageEndpoint', () => {
    test('find package.json', () => {
      const result = findPackageJson(fixturePath);

      expect(result).toBe(fs.readFileSync(fixture).toString());
    });
  });

  describe('getPackageEndpoint', () => {
    test('get the complete endpoint within package.json', () => {
      const endpoint = getPackageEndpoint(fixturePath);
      expect(endpoint).toBe('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=GEN%20=%20\'BERLIN%20TREPTOW-K%C3%96PENICK\'%20OR%20GEN%20=%20\'BERLIN%20MITTE\'%20OR%20GEN%20=%20\'BERLIN%20FRIEDRICHSHAIN-KREUZBERG\'%20OR%20GEN%20=%20\'BERLIN%20PANKOW\'%20OR%20GEN%20=%20\'BERLIN%20LICHTENBERG\'%20OR%20GEN%20=%20\'BERLIN%20MARZAHN-HELLERSDORF\'%20OR%20GEN%20=%20\'BERLIN%20CHARLOTTENBURG-WILMERSDORF\'%20OR%20GEN%20=%20\'BERLIN%20STEGLITZ-ZEHLENDORF\'%20OR%20GEN%20=%20\'BERLIN%20TEMPELHOF-SCH%C3%96NEBERG\'%20OR%20GEN%20=%20\'BERLIN%20NEUK%C3%96LLN\'%20OR%20GEN%20=%20\'BERLIN%20REINICKENDORF\'%20OR%20GEN%20=%20\'BERLIN%20SPANDAU\'');
    });
  });
});
