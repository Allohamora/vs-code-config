import { prompt } from 'inquirer';
import { BUILD_EXTENSIONS, BUILD_FULL, BUILD_SETTINGS, BUILD_SNIPPETS, MAIN_LIST } from './utils/types';
import { getHandler } from './handlersStrategy';

const prompts = [
  {
    type: 'list', 
    message: 'choice command',
    name: MAIN_LIST,
    choices: [
      {
        value: BUILD_EXTENSIONS,
        name: 'build extensions'
      },
      {
        value: BUILD_SETTINGS,
        name: 'build settings'
      },
      {
        value: BUILD_SNIPPETS,
        name: 'build snippets'
      },
      {
        value: BUILD_FULL,
        name: 'build full'
      }
    ] 
  },
];

const main = async () => {
  const answers = await prompt(prompts);

  const answer = answers[MAIN_LIST];
  const handler = getHandler(answer);
  
  await handler();
};

main();