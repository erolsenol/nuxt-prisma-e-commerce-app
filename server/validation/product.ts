import { object, string, number, date, InferType } from 'yup';

export function productCreateValid() {
    let validSchema = object({
        name: string().required(),
        title: string().required(),
        content: string().required(),
        createdAt: date().default(() => new Date()),
      });

      return validSchema
}