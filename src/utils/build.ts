import * as path from 'path';
import * as fs from 'fs-extra';
import { ncp } from 'utils/ncp';
import { BUILD_PATH } from 'const/paths';

export const getPath = (pathName: string) => path.join(BUILD_PATH, pathName);

const isBuildDirExists = async () => await fs.pathExists(BUILD_PATH);

const buildDir = async () => {
  const isBuildExists = await isBuildDirExists();

  if (isBuildExists) return;

  await fs.mkdir(BUILD_PATH);
};

export const addFile = async (
  name: string,
  data: Parameters<typeof fs.writeFile>[1],
  options?: Parameters<typeof fs.writeFile>[2]
) => {
  await buildDir();

  const pathToFile = getPath(name);

  await fs.writeFile(pathToFile, data, options);
};

export const copy = async (from: string, dir = '') => {
  await buildDir();

  const to = getPath(dir);

  await ncp(from, to);
};

export const getFile = async (name: string) => {
  const fullPath = getPath(name);

  const file = await fs.readFile(fullPath);
  const string = file.toString();

  return string;
};
