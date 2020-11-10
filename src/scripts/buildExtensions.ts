import { getExtensions } from '../func/getExtensions';
import { Script } from '../utils/types';
import { addFile } from '../func/build';
import { EXTENSIONS_FILE_NAME } from '../utils/names';
import { info } from '../func/log';

export const buildExtensions: Script = async () => {
  info('Started build for extensions!');
  
  const extensions = await getExtensions();

  await addFile(EXTENSIONS_FILE_NAME, JSON.stringify(extensions));
};
