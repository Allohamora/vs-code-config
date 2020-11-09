export interface Strategy<T> {
  [key: string]: T,
  default: T
};

export const getFromStrategy = <T>(strategy: Strategy<T>) => (param: string) => {
  const getted = strategy[param];

  return getted ? getted : strategy.default;
};
