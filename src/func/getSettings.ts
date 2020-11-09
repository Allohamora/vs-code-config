import { promises as fs } from 'fs';
import { SETTINGS_PATH } from '../utils/paths';

export const getSettings = async () => {
  const buffer = await fs.readFile(SETTINGS_PATH);
  const settings = buffer.toString();

  return settings;
};