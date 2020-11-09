import * as path from 'path';
import * as ncpCallback from 'ncp';
import { promises as fs } from 'fs';
import { promisify } from 'util';
import { BUILD_PATH } from '../utils/paths';
import { error, success } from '../func/log';

const ncp = promisify(ncpCallback);

const successAdded = (item: string) => success(`Success added ${item} to build!`);

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

  const pathToFile = path.join(BUILD_PATH, name);

  await fs.writeFile( pathToFile, data, options);

  successAdded(name);
};

export const copy = async (from: string, dir: string = "") => {
  await buildDir();

  const to = path.join(BUILD_PATH, dir);

  try {
    await ncp(from, to);

    successAdded(from);
  } catch (e) {
    error(`Error with copy from - ${from}, to - ${to}, error - ${e}`);
  }
};
