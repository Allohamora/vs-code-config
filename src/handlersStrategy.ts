import { BUILD_EXTENSIONS } from './utils/types';
import { Strategy, getFromStrategy } from './utils/strategy';
import { buildExtensions } from './scripts/buildExtensions';


export type Handler = () => Promise<void>;

type HandlersStrategy = Strategy<Handler>;

const handlersStrategy: HandlersStrategy = {
  [BUILD_EXTENSIONS]: buildExtensions,
  default: async () => {}
};

export const getHandler = getFromStrategy(handlersStrategy);