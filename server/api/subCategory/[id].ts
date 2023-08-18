import { getSubCategory } from "../../data/subCategories";

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

    const subCategory = await getSubCategory(id)

    if (category && category.id) {
      response.data = subCategory
      response.status = true
      return response
    }
    return response
  }
);
