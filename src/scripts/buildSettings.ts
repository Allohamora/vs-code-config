import { addFile } from "../func/build";
import { getSettings } from "../func/getSettings";
import { SETTINGS_FILE_NAME } from "../utils/names";

export const buildSettings = async () => {
  const settings = await getSettings();

  await addFile(SETTINGS_FILE_NAME, settings);
};