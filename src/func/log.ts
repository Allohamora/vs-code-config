import * as chalk from 'chalk';

export const log = console.log;
const errorLog = console.error;

const successColor = chalk.rgb(61, 204, 83);
const errorColor  = chalk.rgb(220, 20, 60);

export const success = (info: string) => {
  log(successColor(info));
};

export const error = (info: string) => {
  errorLog(errorColor(info));
};