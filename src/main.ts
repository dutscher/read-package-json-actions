import * as core from '@actions/core';
import { getPackageJSON } from './getPackageJSON';

async function run() {
  try {
    const path = core.getInput('path');

    core.debug(`Load package.json at ${path}`);

    const result = getPackageJSON(path);

    core.debug(`set output: json: ${result}`);
    core.setOutput('json', result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
