import { addFile } from "../func/build";
import { getSettings } from "../func/getSettings";

const FILE_NAME = 'settings.json';

export const buildSettings = async () => {
  const settings = await getSettings();

  await addFile(FILE_NAME, settings);
};