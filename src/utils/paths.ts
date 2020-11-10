import * as path from 'path';

export const BUILD_PATH = path.join(__dirname, '../../build');

// code paths
const { HOME } = process.env;
export const CODE_PATH = path.join(HOME, '/.config/Code');
export const USER_PATH = path.join(CODE_PATH, '/User');
export const SETTINGS_PATH = path.join(USER_PATH, '/settings.json');
export const SNIPPETS_PATH = path.join(USER_PATH, '/snippets');