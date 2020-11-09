import * as path from 'path';

export const BUILD_PATH = path.join(__dirname, '../../build');

const { HOME } = process.env;
export const CODE_PATH = `${HOME}/.config/Code`;
