import * as chalk from 'chalk';

const log = console.log;

export const success = (info: string) => {
  log(chalk.rgb(61, 204, 83)(info));
}