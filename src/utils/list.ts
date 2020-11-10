import { prompt } from 'inquirer';

type Handler = () => Promise<void>;

interface Choice { 
  name: string, 
  value: Handler 
};

interface CreateListParams {
  list_name: string, 
  list_message: string,

  choices: Choice[],
}

export const createList = async ({ 
  list_name, 
  list_message,
  choices 
}: CreateListParams) => {

  const answers = await prompt({
    type: 'list', 
    message: list_message,
    name: list_name,

    choices
  });

  const handler = answers[list_name] as Handler;

  await handler();
};