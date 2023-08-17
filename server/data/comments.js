import prisma from "./prisma";

export async function getComments() {
  const comments = await prisma.comment.findMany();
  return comments;
}

export async function getCommentFromProduct(id) {
  const users = await prisma.comment.findMany(
    {
      where: {
        productId: id
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