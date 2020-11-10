import { prompt } from 'inquirer';
import { MAIN_LIST, Script } from './utils/types';
import { buildExtensions } from './scripts/buildExtensions';
import { buildSettings } from './scripts/buildSettings';
import { buildSnippets } from './scripts/buildSnippets';
import { buildFull } from './scripts/buildFull';
import { installExtensions } from './scripts/installExtensions';

const prompts = [
  {
    type: 'list', 
    message: 'choice command',
    name: MAIN_LIST,
    choices: [
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
      },
      {
        value: installExtensions,
        name: 'install extensions from build'
      }
    ] 
  },
];

const main = async () => {
  const answers = await prompt(prompts);

  const handler = answers[MAIN_LIST] as Script;
  await handler();
};

main();