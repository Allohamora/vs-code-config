import { exec as execCallback } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCallback);

const mapExtensionsStdoutToArray = (stdout: string) => {
  return stdout
          .split('\n')
          .filter(extension => extension !== '');
}

export const getExtensions = async () => {
  const { stdout } = await exec('code --list-extensions 2>&1 | tee');

  return mapExtensionsStdoutToArray(stdout);
}
