import prisma from "./prisma";

async function getAll() {
  const comments = await prisma.comment.findMany({
    include: {
      product: true,
      user: true,
    },
  });
  return comments;
}

async function get(where: Object) {
  const users = await prisma.comment.findMany(
    {
      where: where,
      include: {
        product: true,
        user: true,
      },
    }
  );
  return users;
}

async function post(data: Object) {
  const user = await prisma.comment.create({
    data: data,
  });
  console.log("user 123123", user);
  return user;
}


export default {
  getAll,
  get,
  post
}