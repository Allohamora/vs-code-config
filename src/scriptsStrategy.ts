import { BUILD_EXTENSIONS, BUILD_FULL, BUILD_SETTINGS, BUILD_SNIPPETS } from './utils/types';
import { Strategy, getFromStrategy } from './utils/strategy';
import { buildExtensions } from './scripts/buildExtensions';
import { buildSettings } from './scripts/buildSettings';
import { buildSnippets } from './scripts/buildSnippets';
import { buildFull } from './scripts/buildFull';


export type Script = () => Promise<void>;

type ScriptsStrategy = Strategy<Script>;

const scriptsStrategy: ScriptsStrategy = {
  [BUILD_EXTENSIONS]: buildExtensions,
  [BUILD_SETTINGS]: buildSettings,
  [BUILD_SNIPPETS]: buildSnippets,
  [BUILD_FULL]: buildFull,

  default: async () => {}
};

export const getScript = getFromStrategy(scriptsStrategy);