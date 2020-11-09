import { addFile } from "../func/build";
import { getSettings } from "../func/getSettings";
import { success } from "../func/log";

const FILE_NAME = 'settings.json';

export const buildSettings = async () => {
  const settings = await getSettings();

  await addFile(FILE_NAME, settings);
  success(`Success added ${FILE_NAME} to build!`);
};