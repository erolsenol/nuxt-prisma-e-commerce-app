import prisma from "./prisma";
async function getAll({ skip = 0,
  take = 20, }) {
  const users = await prisma.question.findMany({
    skip: 0,
    take: 20,
    include: {
      user: true,
      product: true,
    },
  });
  return users;
}

async function get(id: Number) {
  const users = await prisma.question.findUnique(
    {
      where: {
        id
      },
      include: {
        user: true,
        product: true,
      },
    }
  );
  return users;
}

async function getWhere(where: Object) {
  const users = await prisma.question.findFirst(
    {
      where: where,
      include: {
        user: true,
        product: true,
      },
    }
  );
  return users;
}

async function getQuestionByUser(user: Number) {
  const users = await prisma.question.findUnique(
    {
      where: {
        userId: user
      },
      include: {
        user: true,
        product: true,
      },
    }
  );
  return users;
}

async function getQuestionByProduct(product: Number) {
  const users = await prisma.question.findUnique(
    {
      where: {
        productId: product
      },
      include: {
        user: true,
        product: true,
      },
    }
  );
  return users;
}

async function post(data: Object) {
  const user = await prisma.question.create({
    data
  });

  return user;
}

async function update(id: Number, data: Object) {
  const update = await prisma.question.update({
    where: {
      id
    },
    data: data,
  })

  return update
}

async function count(where: Object = {}) {
  const count = await prisma.question.count({
    where: where,
  })

  return count
}

async function remove(id: Number) {
  const deleteCategory = await prisma.question.delete({
    where: {
      id: id,
    },
  })

  return deleteCategory
}

export default {
  getAll,
  get,
  getWhere,
  getQuestionByUser,
  getQuestionByProduct,
  post,
  update,
  count,
  remove
}