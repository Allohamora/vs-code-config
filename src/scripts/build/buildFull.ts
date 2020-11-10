import { createScript } from 'utils/script';
import { buildExtensions } from './buildExtensions';
import { buildSettings } from './buildSettings';
import { buildSnippets } from './buildSnippets';

export const buildFull = createScript({
  startMsg: 'Started full build',
  successMsg: 'Full build successfully finished!',

  script: async () => {
    await buildExtensions();
    await buildSettings();
    await buildSnippets();
  }
});
