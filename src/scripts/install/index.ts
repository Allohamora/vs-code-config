import { INSTALL_LIST } from "../../const/types";
import { createList } from "../../utils/list";
import { installExtensions } from "./installExtensions";
import { installFull } from "./installFull";
import { installSettings } from "./installSettings";
import { installSnippets } from "./installSnippets";

const choices = [
  {
    value: installExtensions,
    name: 'install extensions from build'
  },
  {
    value: installSettings,
    name: 'install settings from build'
  },
  {
    value: installSnippets,
    name: 'install snippets from build'
  },
  {
    value: installFull,
    name: 'install full build'
  }
];

export const installHandler = () => createList({
  list_name: INSTALL_LIST,
  list_message: 'choose install command:',

  choices
});

