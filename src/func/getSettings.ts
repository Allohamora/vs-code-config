import * as fs from 'fs-extra';
import { SETTINGS_PATH } from '../const/paths';

export const getSettings = async () => {
  const buffer = await fs.readFile(SETTINGS_PATH);
  const settings = buffer.toString();

  return settings;
};