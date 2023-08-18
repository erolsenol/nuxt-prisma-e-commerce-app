import { getCategory } from "../../data/categories";

export default defineEventHandler(
  async (event) => {
    let response = {
      status: false
    }
    const id: Number = parseInt(event.context.params.id) as number

    if (!id) {
      response.error = "id cannot be empty"
      return response
    }

    const category = await getCategory(id)

    if (category && category.id) {
      response.data = category
      response.status = true
      return response
    }
    return response
  }
);
