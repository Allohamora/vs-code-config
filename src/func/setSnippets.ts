import { ncp } from '../utils/ncp';
import { getPath } from '../utils/build';
import { SNIPPETS_DIR_NAME } from '../const/names';
import { SNIPPETS_PATH } from '../const/paths';

export const setSnippets = async () => {
  const from = getPath(SNIPPETS_DIR_NAME);
  const to = SNIPPETS_PATH;

  await ncp(from, to);
};