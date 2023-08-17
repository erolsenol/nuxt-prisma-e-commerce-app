import { postUser } from "../../data/users";

export default defineEventHandler(async () => {
  console.log("user post ");
  return await postUser();
});
