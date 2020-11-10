import { createScript } from 'utils/script';
import { info } from 'utils/log';
import { getFile } from 'utils/build';
import { installExtension } from 'func/installExtension';
import { Extensions } from 'func/getExtensions';
import { EXTENSIONS_FILE_NAME } from 'const/names';

export const installExtensions = createScript({
  startMsg: 'Started install for extensions',
  successMsg: 'Extensions successfully installed',

  script: async () => {
    const extensionsJSON = await getFile(EXTENSIONS_FILE_NAME);

    const extensions = JSON.parse(extensionsJSON) as Extensions;

    await Promise.all(
      extensions.map((extension) => installExtension(extension).then((log) => info(log)))
    );
  }
});
