import { info, success } from "../func/log";
import { setSettings } from "../func/setSettings";
import { Script } from "../utils/types";

export const installSettings: Script = async () => {
  info('Started install for settings!');

  await setSettings();
  
  success('Success installed settings!');
};
