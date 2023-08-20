import prisma from "./prisma";
export async function getUsers({ skip = 0,
  take = 20, }) {
  const users = await prisma.user.findMany({
    skip: 0,
    take: 20,
    include: {
      comments: true,
    },
  });
  return users;
}

export async function getUser(id: Number) {
  const users = await prisma.user.findUnique(
    {
      where: {
        id
      },
      include: {
        comments: true,
      },
    }
  );
  return users;
}

export async function getUserByEmail(email: String) {
  const users = await prisma.user.findUnique(
    {
      where: {
        email: email
      },
      include: {
        comments: true,
      },
    }
  );
  return users;
}

export async function postUser(data: Object) {
  const user = await prisma.user.create({
    data
  });
  console.log("user 123123", user);
  return user;
}

export async function update(id: Number, data: Object) {
  const update = await prisma.user.update({
    where: {
      id
    },
    data: data,
  })

  return
}

export async function countUser(where: Object = {}) {
  const count = await prisma.user.count({
    where: where,
  })

  return count
}
