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
      expect(endpoint).toBe('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=GEN%20%3D%20%27BERLIN%20TREPTOW-K%D6PENICK%27%20OR%20GEN%20%3D%20%27BERLIN%20MITTE%27%20OR%20GEN%20%3D%20%27BERLIN%20FRIEDRICHSHAIN-KREUZBERG%27%20OR%20GEN%20%3D%20%27BERLIN%20PANKOW%27%20OR%20GEN%20%3D%20%27BERLIN%20LICHTENBERG%27%20OR%20GEN%20%3D%20%27BERLIN%20MARZAHN-HELLERSDORF%27%20OR%20GEN%20%3D%20%27BERLIN%20CHARLOTTENBURG-WILMERSDORF%27%20OR%20GEN%20%3D%20%27BERLIN%20STEGLITZ-ZEHLENDORF%27%20OR%20GEN%20%3D%20%27BERLIN%20TEMPELHOF-SCH%D6NEBERG%27%20OR%20GEN%20%3D%20%27BERLIN%20NEUK%D6LLN%27%20OR%20GEN%20%3D%20%27BERLIN%20REINICKENDORF%27%20OR%20GEN%20%3D%20%27BERLIN%20SPANDAU%27');
    });
  });
});
