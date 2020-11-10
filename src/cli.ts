import { MAIN_LIST } from './const/types';
import { buildHandler } from './scripts/build';
import { installHandler } from './scripts/install';
import { createList } from './utils/list';

const choices = [
  {
    name: 'build section',
    value: buildHandler,
  },
  {
    name: 'install section',
    value: installHandler
  }
]

const main = async () => await createList({
  list_name: MAIN_LIST,
  list_message: 'choose section:',

  choices
});

main();