import { info, success } from "./log";

export type Script = () => Promise<void>;

interface Params {
  startMsg?: string,
  successMsg?: string,
  
  script: Script,
};

export const createScript = (params: Params): Script => {
  const { startMsg, successMsg, script } = params;

  return async () => {
    if( startMsg ) info(startMsg);

    await script();

    if( successMsg ) success(successMsg);
  }
};
