import { createScript } from 'utils/script';
import { getExtensions } from 'func/getExtensions';
import { addFile } from 'utils/build';
import { EXTENSIONS_FILE_NAME } from 'const/names';

export const buildExtensions = createScript({
  startMsg: 'Started build for extensions',
  successMsg: 'Extensions successfully build',

  script: async () => {
    const extensions = await getExtensions();

    await addFile(EXTENSIONS_FILE_NAME, JSON.stringify(extensions));
  }
});
