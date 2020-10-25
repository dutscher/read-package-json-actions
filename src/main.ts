import * as core from '@actions/core';
import { getPackageEndpoint } from './getPackageEndpoint';

async function run() {
  try {
    const path = core.getInput('path');

    core.debug(`Load package.json at ${path}`);

    const result = getPackageEndpoint(path);

    core.debug(`set output: endpoint: ${result}`);
    core.setOutput('endpoint', result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
