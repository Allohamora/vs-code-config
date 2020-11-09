import { BUILD_EXTENSIONS, BUILD_SETTINGS } from './utils/types';
import { Strategy, getFromStrategy } from './utils/strategy';
import { buildExtensions } from './scripts/buildExtensions';
import { buildSettings } from './scripts/buildSettings';


export type Handler = () => Promise<void>;

type HandlersStrategy = Strategy<Handler>;

const handlersStrategy: HandlersStrategy = {
  [BUILD_EXTENSIONS]: buildExtensions,
  [BUILD_SETTINGS]: buildSettings,
  default: async () => {}
};

export const getHandler = getFromStrategy(handlersStrategy);