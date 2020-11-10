import { createScript } from "../../utils/script";
import { installExtensions } from "./installExtensions";
import { installSettings } from "./installSettings";
import { installSnippets } from "./installSnippets";

export const installFull = createScript({
  startMsg: 'Started full install',
  successMsg: 'Full install successfully finished',

  script: async () => {
    await installExtensions();
    await installSettings();
    await installSnippets();
  }
});
