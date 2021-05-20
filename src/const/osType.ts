import * as os from 'os';

const osType = os.type();

export const isWindows = osType === 'Windows_NT';
export const isMacOs = osType === 'Darwin';
export const isLinux = osType === 'Linux';