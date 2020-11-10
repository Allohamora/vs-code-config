import { SNIPPETS_DIR_NAME } from '../utils/names';
import { ncp } from '../utils/ncp';
import { SNIPPETS_PATH } from '../utils/paths';
import { getPath } from './build';

export const setSnippets = async () => {
  const from = getPath(SNIPPETS_DIR_NAME);
  const to = SNIPPETS_PATH;

  await ncp(from, to);
};