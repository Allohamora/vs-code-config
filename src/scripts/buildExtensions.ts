import { getExtensions } from '../func/getExtensions';
import { Script } from '../scriptsStrategy';
import { addFile } from '../func/build';
import { EXTENSIONS_FILE_NAME } from '../utils/names';

export const buildExtensions: Script = async () => {
  const extensions = await getExtensions();

  await addFile(EXTENSIONS_FILE_NAME, JSON.stringify(extensions));
};
