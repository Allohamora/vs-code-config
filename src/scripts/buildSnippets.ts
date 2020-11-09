import { copy } from "../func/build";
import { SNIPPETS_DIR_NAME } from '../utils/names';
import { SNIPPETS_PATH } from '../utils/paths';

export const buildSnippets = async () => {
  await copy(SNIPPETS_PATH, SNIPPETS_DIR_NAME);
};