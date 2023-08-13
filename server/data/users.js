import prisma from "./prisma";
export async function getUsers() {
  const users = await prisma.user.findMany({
    skip: 0,
    take: 20,
  });
  return users;
}

export async function getUser(id) {
  const users = await prisma.user.findUnique(
    {
      where: {
        id
      },
    }
  );
  return users;
}

export async function postUser(data) {
  const user = await prisma.user.create({
    data: {
      firstName: "Erol",
      lastName: "Senol",
      age: 20,
    },
  });
  console.log("user 123123", user);
  return user;
}

export async function createMany() {
  return await prisma.user.createMany({
    data: [
      { firstName: 'test1', lastName: 'last1' },
      { firstName: 'test2', lastName: 'last2' },
      { firstName: 'test3', lastName: 'last3' },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  })
} 