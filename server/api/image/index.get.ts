import { getImageWhere, getImageOwnerName } from "../../data/images";

interface fileRes {
  success: Boolean;
  path?: String;
  name?: String;
  error?: String;
}
interface errorData {
  name: String;
  error?: String;
}

interface response {
  data: errorData[];
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    data: [],
    status: false,
  };

  const query = getQuery(event);

  if (!query.id && query.ownerName && query.name) {
    response.error = "cannot be empty";
    return response;
  }

  const where = {};
  const keys = Object.keys(query);
  keys.forEach((key) => {
    where[key] = query[key];
  });

  if ("ownerName" in where) {
    const images = await getImageOwnerName(where["ownerName"]);
    if (images && images.length > 0) {

      if (where["ownerName"] != 'slider') {
        response.data = images[0];
      } else {
        response.data = images;
      }
      response.status = true;
    }
  } else {
    const image = await getImageWhere(where);
    if (image) {
      response.data = image;
      response.status = true;
    }
  }

  if (!("data" in response)) {
    response.error = "image_not_found";
  }

  return response;
});
