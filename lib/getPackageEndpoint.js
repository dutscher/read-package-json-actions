"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
/**
 * Find package.json with path.
 * @param path
 */
exports.findPackageJson = (path) => {
    return fs_1.default.readFileSync(path_1.join(path, 'package.json')).toString();
};
/**
 * Get version field within package.json
 * @param path
 */
exports.getPackageEndpoint = (path) => {
    const packageJson = exports.findPackageJson(path);
    const json = JSON.parse(packageJson);
    let endpoint = '';
    // endpoint
    // url + params + locations
    // entities.encode(GEN = '' OR GEN = '')
    endpoint += json.url;
    endpoint += json.params;
    const locations = json.locations.map((location) => {
        return `GEN = '${location.toUpperCase()}'`;
    });
    endpoint += entities.encode(locations.join(' OR '));
    return endpoint;
};
