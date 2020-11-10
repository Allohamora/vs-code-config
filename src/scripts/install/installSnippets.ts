import { setSnippets } from 'func/setSnippets';
import { createScript } from 'utils/script';

export const installSnippets = createScript({
  startMsg: 'Started install for snippets',
  successMsg: 'Snippets successfully installed!',

  script: async () => await setSnippets()
});
