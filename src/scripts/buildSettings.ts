import { addFile } from "../func/build";
import { getSettings } from "../func/getSettings";
import { info } from "../func/log";
import { SETTINGS_FILE_NAME } from "../utils/names";
import { Script } from "../utils/types";

export const buildSettings: Script = async () => {
  info('Started build for setting!');

  const settings = await getSettings();

  await addFile(SETTINGS_FILE_NAME, settings);
};