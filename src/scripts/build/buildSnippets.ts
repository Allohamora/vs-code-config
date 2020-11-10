import { copy } from 'utils/build';
import { createScript } from 'utils/script';
import { SNIPPETS_DIR_NAME } from 'const/names';
import { SNIPPETS_PATH } from 'const/paths';

export const buildSnippets = createScript({
  startMsg: 'Started build for snippets',
  successMsg: 'Snippets successfully build',

  script: async () => await copy(SNIPPETS_PATH, SNIPPETS_DIR_NAME)
});
