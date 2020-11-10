import { info, success } from "../func/log";
import { Script } from "../utils/types";
import { buildExtensions } from "./buildExtensions";
import { buildSettings } from "./buildSettings";
import { buildSnippets } from "./buildSnippets";

export const buildFull: Script = async () => {
  info('Started full build!');

  await buildExtensions();
  await buildSettings();
  await buildSnippets();

  success('Success full build!');
};