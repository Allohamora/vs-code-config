import { getFile } from "../func/build";
import { installExtension } from "../func/installExtension";
import { EXTENSIONS_FILE_NAME } from "../utils/names";
import { log } from '../func/log';

export const installExtensions = async () => {
  const extensionsJSON = await getFile(EXTENSIONS_FILE_NAME);

  const extensions = JSON.parse(extensionsJSON) as string[];

  await Promise.all(extensions.map(extension => installExtension(extension).then(info => log(info))));
};