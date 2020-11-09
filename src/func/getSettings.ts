import { promises as fs } from 'fs';

const { HOME } = process.env;
const LINUX_PATH = `${HOME}/.config/Code/User/settings.json`;

export const getSettings = async () => {
  const buffer = await fs.readFile(LINUX_PATH);
  const settings = buffer.toString();

  return settings;
};