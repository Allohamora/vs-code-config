import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const BUILD_PATH = path.join(__dirname, '../../build');

// code paths
const { 
  HOME, 
  VSCODE_PATH: RAW_VSCODE_PATH
} = process.env;

const VSCODE_PATH = RAW_VSCODE_PATH.replace('<HOME>', HOME);
export const USER_PATH = path.join(VSCODE_PATH, '/User');
export const SETTINGS_PATH = path.join(USER_PATH, '/settings.json');
export const SNIPPETS_PATH = path.join(USER_PATH, '/snippets');
