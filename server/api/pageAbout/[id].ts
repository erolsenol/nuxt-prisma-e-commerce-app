import pageAbout from "../../data/pageAbout";
import { getImageWithDynamicId } from "../../data/images";

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

    const data = await pageAbout.get(id)
    console.log("page about first data:", data);

    if (data && data.id) {
      const images = await getImageWithDynamicId({ pageaboutId: id })

      if (images.length > 0) {
        data.images = images
      } else {
        data.images = []
      }

      response.data = data
      response.status = true
      return response
    }
    return response
  }
);
