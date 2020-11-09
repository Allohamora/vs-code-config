import { getExtensions } from '../func/getExtensions';
import { Handler } from '../handlersStrategy';
import { addFile } from '../func/build';

const FILE_NAME = 'extensions.json';

export const buildExtensions: Handler = async () => {
  const extensions = await getExtensions();

  await addFile(FILE_NAME, JSON.stringify(extensions));
};