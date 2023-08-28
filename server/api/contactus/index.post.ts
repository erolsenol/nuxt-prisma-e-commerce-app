import contactus from "../../data/contactus";
import { postImage } from "../../data/images";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  const res = await contactus.post(body);

  if (res.id) {
    response.data = res;
    response.status = true;
  }
  return response;
});
