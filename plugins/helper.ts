import {
  fileToBase64,
  replaceTurkishCharacters,
  get,
  paginationCondition,
  set,
  remove,
  imageToObj
} from "../helper";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      helper: {
        fileToBase64,
        replaceTurkishCharacters,
        paginationCondition,
        get,
        set,
        remove,
        imageToObj
      },
    },
  };
});
