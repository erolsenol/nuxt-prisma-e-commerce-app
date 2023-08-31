import users from "../../data/users";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  if (!body.username || !body.password || !body.email) {
    response.error = "cannot be empty";
    return response;
  }

  const userEmail = await users.getByEmail(body.email);
  if (userEmail) {
    response.error = "same_name";
    return response;
  }
  
  const user = await users.create(body);

  if (user?.id) {
    response.data = user;
    response.status = true;
  }
  return response;
});
