import { BUILD_EXTENSIONS, BUILD_SETTINGS, BUILD_SNIPPETS } from './utils/types';
import { Strategy, getFromStrategy } from './utils/strategy';
import { buildExtensions } from './scripts/buildExtensions';
import { buildSettings } from './scripts/buildSettings';
import { buildSnippets } from './scripts/buildSnippets';


export type Handler = () => Promise<void>;

type HandlersStrategy = Strategy<Handler>;

const handlersStrategy: HandlersStrategy = {
  [BUILD_EXTENSIONS]: buildExtensions,
  [BUILD_SETTINGS]: buildSettings,
  [BUILD_SNIPPETS]: buildSnippets,
  
  default: async () => {}
};

export const getHandler = getFromStrategy(handlersStrategy);