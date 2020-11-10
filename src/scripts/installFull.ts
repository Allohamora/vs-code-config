import { info, success } from "../func/log";
import { installExtensions } from "./installExtensions";
import { installSettings } from "./installSettings";
import { installSnippets } from "./installSnippets";

export const installFull = async () => {
  info('Started full install!');

  await installExtensions();
  await installSettings();
  await installSnippets();

  success('Success full install!');
};