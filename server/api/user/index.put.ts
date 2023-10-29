import users from "../../data/users";

interface response {
  data?: Object;
  error?: String;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const body = await readBody(event);

  const keys = Object.keys(body);
  if (keys.length < 1 || !body.id) {
    response.error = "cannot be empty";
    return response;
  }

  const data = body;
  const res = await users.update(data.id, data);

  if (res.id) {
    response.data = res;
    response.status = true;
  }

  return response;
});