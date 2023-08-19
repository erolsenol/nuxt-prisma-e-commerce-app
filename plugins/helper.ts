import {fileToBase64} from "../helper"
  
export default defineNuxtPlugin(() => {
    return {
      provide: {
        helper: {
          fileToBase64
        }
      }
    }
  })