import { createScript } from 'utils/script';
import { addFile } from 'utils/build';
import { getSettings } from 'func/getSettings';
import { SETTINGS_FILE_NAME } from 'const/names';

export const buildSettings = createScript({
  startMsg: 'Started build for setting',
  successMsg: 'Settings successfully build',

  script: async () => {
    const settings = await getSettings();

    await addFile(SETTINGS_FILE_NAME, settings);
  }
});
