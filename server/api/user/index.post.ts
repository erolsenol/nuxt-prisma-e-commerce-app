import users from "../../data/users";
import { bcryptPassword, createJwt } from "../../utils/utils"

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  console.log("bcryptPassword", bcryptPassword);
  console.log("createJwt", createJwt);

  if (!body.username || !body.password || !body.email) {
    response.error = "cannot be empty";
    return response;
  }

  const userEmail = await users.getByEmail(body.email);
  if (userEmail) {
    response.error = "same_name";
    return response;
  }

  body.password = await bcryptPassword(body.password)

  const user = await users.create(body);

  if (user?.id) {
    response.data = {
      access_token: createJwt(user),
      user: {
        age: user.age,
        email: user.email,
        firstname: user.firstname,
        id: user.id,
        lastname: user.lastname,
        phone: user.phone,
        username: user.username,
        verify: user.verify,
      }
    };
    response.status = true;
  }
  return response;
});
