import { postUser, getUserByEmail } from "../../data/users";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false
  }
  const body = await readBody(event)

  if (!body.username || !body.password || !body.email) {
    response.error = "cannot be empty"
    return response
  }

  const userEmail = await getUserByEmail(body.email)
  if (userEmail && userEmail.id) {
    response.error = "email address is already registered"
    return response
  }

  const user = await postUser(body)

  if (user.id) {
    response.data = user
    response.status = true
  }

  return response
});
