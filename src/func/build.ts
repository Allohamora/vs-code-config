import * as path from 'path';
import { promises as fs } from 'fs';
import { BUILD_PATH } from '../utils/paths';
import { error, success } from '../func/log';
import { ncp } from '../utils/ncp';

const successAdded = (item: string) => success(`Success added ${item} to build!`);

export const getPath = (pathName: string) => path.join(BUILD_PATH, pathName);

const isBuildDirExists = async () => {
  try {
    await fs.access(BUILD_PATH);

    return true;
  } catch (err) {
    return false;
  }
};

const buildDir = async () => {
  const isBuildExists = await isBuildDirExists();

  if( isBuildExists ) return;

  await fs.mkdir(BUILD_PATH, { recursive: true });
};

export const addFile = async (
  name: string, 
  data: Parameters<typeof fs.writeFile>[1], 
  options?: Parameters<typeof fs.writeFile>[2]
) => {
  await buildDir();

  const pathToFile = getPath(name);

  await fs.writeFile(pathToFile, data, options);

  successAdded(name);
};

export const copy = async (from: string, dir: string = "") => {
  await buildDir();

  const to = getPath(dir);

  try {
    await ncp(from, to);

    successAdded(from);
  } catch (e) {
    error(`Error with copy from - ${from}, to - ${to}, error - ${e}`);
  }
};

export const getFile = async (name: string) => {
  const fullPath = getPath(name);

  const file = await fs.readFile(fullPath);
  const string = file.toString();

  return string;
};
