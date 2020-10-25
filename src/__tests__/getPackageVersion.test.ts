import fs from 'fs';

import { findPackageJson, getPackageJSON } from '../getPackageJSON';

const fixturePath = './src/__tests__/fixture';
const fixture = `./src/__tests__/fixture/package.json`;

describe('getPackageJSON', () => {
  describe('findPackageJson', () => {
    test('find package.json', () => {
      const result = findPackageJson(fixturePath);

      expect(result).toBe(fs.readFileSync(fixture).toString());
    });
  });

  describe('getPackageJSON', () => {
    test('get version text within package.json', () => {
      const result = getPackageJSON(fixturePath);

      expect(result.name).toBe('fixture');
      expect(result.version).toBe('0.0.0');
    });
  });
});
