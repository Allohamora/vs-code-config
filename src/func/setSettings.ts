import { SETTINGS_FILE_NAME } from '../utils/names';
import * as fs from 'fs-extra';
import * as path from 'path';
import { USER_PATH } from '../utils/paths';
import { getPath } from './build';

export const setSettings = async () => {
  const from = getPath(SETTINGS_FILE_NAME);
  const to =  path.join(USER_PATH, SETTINGS_FILE_NAME);

  await fs.copy(from, to);
};