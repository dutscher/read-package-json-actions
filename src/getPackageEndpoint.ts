import fs from 'fs';
import { join } from 'path';

/**
 * Find package.json with path.
 * @param path
 */
export const findPackageJson = (path: string): string => {
  return fs.readFileSync(join(path, 'package.json')).toString();
};

/**
 * Get version field within package.json
 * @param path
 */
export const getPackageEndpoint = (path: string): string => {
  const packageJson = findPackageJson(path);
  const json = JSON.parse(packageJson).endpoint;
  let endpoint = '';

  // endpoint
  // url + params + locations
  // escape(GEN = '' OR GEN = '')

  endpoint += json.url;
  endpoint += json.params;

  const locations = json.locations.map((location) => {
    return `GEN = '${location.toUpperCase()}'`;
  });

  endpoint += encodeURI(locations.join(' OR '));

  return endpoint;
};
