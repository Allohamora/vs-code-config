import { promises as fs } from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { BUILD_PATH } from '../utils/paths';
import { success } from '../func/log';
import * as ncpCallback from 'ncp';

const ncp = promisify(ncpCallback);

const buildExists = async () => {
  try {
    await fs.access(BUILD_PATH);

    return true;
  } catch (err) {
    return false;
  }
};

const buildDir = async () => {
  const isBuildExists = await buildExists();

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
  success(`Success added ${name} to build!`);
};

export const copy = async (from: string, dir: string = "") => {
  await buildDir();

  try {
    await ncp(from, path.join(BUILD_PATH, dir));

    success(`Success added ${from} to build!`);
  } catch (e) {
    // TODO: added error log
    console.error(e);
  }
};