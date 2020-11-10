import { success } from "../func/log";
import { setSettings } from "../func/setSettings";
import { Script } from "../utils/types";

export const installSettings: Script = async () => {
  await setSettings();
  
  success('Success installed new vs code settings!');
};
