import subCategories from "../../data/subCategories";

export default defineEventHandler(
  async (event) => {
    let response = {
      status: false
    }

    console.log("event.context",event.context);
    const id: Number = parseInt(event.context.params.id) as number

    if (!id) {
      response.error = "id cannot be empty"
      return response
    }

    const category = await subCategories.remove(id)

    if (category && category.id) {
      response.data = category
      response.status = true
      return response
    }
    return response
  }
);
