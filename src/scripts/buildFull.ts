import { success } from "../func/log";
import { Script } from "../scriptsStrategy";
import { buildExtensions } from "./buildExtensions";
import { buildSettings } from "./buildSettings";
import { buildSnippets } from "./buildSnippets";

export const buildFull: Script = async () => {
  await buildExtensions();
  await buildSettings();
  await buildSnippets();

  success('Success full build!');
};