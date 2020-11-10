import { setSettings } from "../../func/setSettings";
import { createScript } from "../../utils/script";

export const installSettings = createScript({
  startMsg: 'Started install for settings',
  successMsg: 'Settings successfully installed!',

  script: async () => await setSettings()
});

