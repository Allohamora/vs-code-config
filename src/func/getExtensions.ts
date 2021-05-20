import { exec as execCallback } from 'child_process';
import { isLinux, isWindows } from 'const/osType';
import { promisify } from 'util';

const exec = promisify(execCallback);

export type Extensions = string[];

const mapStdoutToExtensions = (stdout: string): Extensions => {
  return stdout.split('\n').filter((extension) => extension !== '');
};

const getExtensionsCommand = () => {
  switch (true) {
    case isWindows:
      return "code --list-extensions";
    case isLinux:
      return "code --list-extensions 2>&1 | tee";
    default:
      throw Error('not supported os type!');
  }
}

const extensionsCommand = getExtensionsCommand();

export const getExtensions = async () => {
  const { stdout } = await exec(extensionsCommand);

  return mapStdoutToExtensions(stdout);
};
