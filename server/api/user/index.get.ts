import { getUserByEmail, getUsers, countUser } from "../../data/users";

export default defineEventHandler(async (event) => {
  console.log("@@@@@");
  let response = {
    status: false
  }
  const query = getQuery(event);

  const skip: Number = Number(query.skip || 0) as number;
  const take: Number = Number(query.take || 20) as number;
  const email: String = query.email || "" as string;
  const password: String = query.password || "" as string;

  let users, total: Number

  console.log("1");
  if (!email) {
    users = await getUsers({ skip: Number(skip), take: Number(take) })
    total = await countUser({})
  } else {
    console.log("2");
    users = await getUserByEmail(email)
    console.log("users", users);
    if (users && users?.password !== password) {
      response.error = "your password is wrong"
      return response
    }
    total = 1
  }

  if (users) {
    response.data = users
    response.paginate = {
      totalPage: Math.ceil(total / take),
      totalCount: total
    }
    response.status = true
    return response
  }
  return response
});
