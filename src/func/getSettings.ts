import { promises as fs } from 'fs';
import * as path from 'path';
import { CODE_PATH } from '../utils/paths';

const SETTINGS_PATH = path.join(CODE_PATH, '/User/settings.json');

export const getSettings = async () => {
  const buffer = await fs.readFile(SETTINGS_PATH);
  const settings = buffer.toString();

  return settings;
};