import { success } from "../func/log";
import { buildExtensions } from "./buildExtensions";
import { buildSettings } from "./buildSettings";
import { buildSnippets } from "./buildSnippets";

export const buildFull = async () => {
  await buildExtensions();
  await buildSettings();
  await buildSnippets();

  success('Success full build!');
};