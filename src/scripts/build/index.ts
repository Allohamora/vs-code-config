import { createList } from 'utils/list';
import { buildExtensions } from './buildExtensions';
import { buildSettings } from './buildSettings';
import { buildSnippets } from './buildSnippets';
import { buildFull } from './buildFull';
import { BUILD_LIST } from 'const/types';

const choices = [
  {
    value: buildExtensions,
    name: 'build extensions'
  },
  {
    value: buildSettings,
    name: 'build settings'
  },
  {
    value: buildSnippets,
    name: 'build snippets'
  },
  {
    value: buildFull,
    name: 'build full'
  }
];

export const buildHandler = () =>
  createList({
    list_name: BUILD_LIST,
    list_message: 'choose build command:',

    choices
  });
