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
  console.log("image getttt requestttttttttt");

  const query = getQuery(event);

  console.log("image gettttt image gettttt", query);

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
      response.data = images[0];
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
