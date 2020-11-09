import { prompt } from 'inquirer';
import { BUILD_EXTENSIONS, MAIN_LIST } from './utils/types';
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