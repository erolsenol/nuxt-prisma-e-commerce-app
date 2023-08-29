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

  const id: Number = parseInt(event.context.params.id) as number

  console.log("userrrr id",id);

  if (!id) {
    response.error = "id cannot be empty"
    return response
  }

  const body = await readBody(event);

  const keys = Object.keys(body);
  if (keys.length < 1) {
    response.error = "cannot be empty";
    return response;
  }

  const data = body;
  const res = await users.update(id, data);

  if (res.id) {
    response.data = res;
    response.status = true;
  }

  return response;
});
