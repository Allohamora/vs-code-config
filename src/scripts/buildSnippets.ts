import { copy } from "../func/build";
import { info } from "../func/log";
import { SNIPPETS_DIR_NAME } from '../utils/names';
import { SNIPPETS_PATH } from '../utils/paths';
import { Script } from "../utils/types";

export const buildSnippets: Script = async () => {
  info('Started build for snippets');

  await copy(SNIPPETS_PATH, SNIPPETS_DIR_NAME);
};