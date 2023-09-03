import {
  fileToBase64,
  replaceTurkishCharacters,
  paginationCondition,
  imageToObj
} from "../helper";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      helper: {
        fileToBase64,
        replaceTurkishCharacters,
        paginationCondition,
        imageToObj
      },
    },
  };
});
