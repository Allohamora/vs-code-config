import { copy } from "../func/build";
import { SNIPPETS_DIR_NAME } from '../utils/names';
import { SNIPPETS_PATH } from '../utils/paths';
import { Script } from "../utils/types";

export const buildSnippets: Script = async () => {
  await copy(SNIPPETS_PATH, SNIPPETS_DIR_NAME);
};