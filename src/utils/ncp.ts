import * as ncpCallback from 'ncp';
import { promisify } from 'util';

export const ncp = promisify(ncpCallback);
