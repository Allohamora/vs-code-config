import { getFile } from "../func/build";
import { installExtension } from "../func/installExtension";
import { EXTENSIONS_FILE_NAME } from "../utils/names";
import { success, info } from '../func/log';
import { Script } from "../utils/types";

export const installExtensions: Script = async () => {
  const extensionsJSON = await getFile(EXTENSIONS_FILE_NAME);

  const extensions = JSON.parse(extensionsJSON) as string[];

  await Promise.all(extensions.map(extension => installExtension(extension).then(log => info(log))));
  
  success('Success installed all extensions!');
};