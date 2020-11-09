import * as path from 'path';
import { copy } from "../func/build";
import { CODE_PATH } from '../utils/paths';

const SNIPPETS_PATH = path.join(CODE_PATH, '/User/snippets');
const SNIPPETS_DIR = 'snippets';

export const buildSnippets = async () => {
  await copy(SNIPPETS_PATH, SNIPPETS_DIR);
};