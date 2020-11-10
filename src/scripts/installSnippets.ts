import { info, success } from "../func/log";
import { setSnippets } from "../func/setSnippets"

export const installSnippets = async () => {
  info('Started installing for snippets!');

  await setSnippets();

  success('Success installed snippets!');
}