import { exec as execCallback } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCallback);

export const installExtension = async (extension: string) => {
  const { stdout } = await exec(`code --install-extension ${extension} 2>&1 | tee`);
  
  return stdout;
};