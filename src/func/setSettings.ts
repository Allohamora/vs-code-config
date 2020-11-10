import * as fs from 'fs-extra';
import * as path from 'path';
import { getPath } from 'utils/build';
import { SETTINGS_FILE_NAME } from 'const/names';
import { USER_PATH } from 'const/paths';

export const setSettings = async () => {
  const from = getPath(SETTINGS_FILE_NAME);
  const to = path.join(USER_PATH, SETTINGS_FILE_NAME);

  await fs.copy(from, to);
};
