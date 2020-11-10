import { exec as execCallback } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCallback);

export type Extensions = string[];

const mapStdoutToExtensions = (stdout: string): Extensions => {
  return stdout
          .split('\n')
          .filter(extension => extension !== '');
}

export const getExtensions = async () => {
  const { stdout } = await exec('code --list-extensions 2>&1 | tee');

  return mapStdoutToExtensions(stdout);
}
