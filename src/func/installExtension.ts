import { exec as execCallback } from 'child_process';
import { isLinux, isWindows } from 'const/osType';
import { promisify } from 'util';

const exec = promisify(execCallback);

const getInstallCommand = (extension: string) => {
  switch (true) {
    case isWindows:
      return `code --install-extension ${extension}`;
    case isLinux:
      return `code --install-extension ${extension} 2>&1 | tee`;
    default:
      throw new Error('incorrect os type!');
  }
};

export const installExtension = async (extension: string) => {
  const { stdout } = await exec(getInstallCommand(extension));

  const [, packageLog] = stdout.split('\n');

  return packageLog;
};
