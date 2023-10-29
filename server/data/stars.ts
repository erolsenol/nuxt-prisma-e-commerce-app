import prisma from "./prisma";
async function getAll({ skip = 0,
  take = 20, }) {
  const users = await prisma.star.findMany({
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
  const users = await prisma.star.findUnique(
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
  const users = await prisma.star.findFirst(
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

async function getStarByUser(user: Number) {
  const users = await prisma.star.findUnique(
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

async function getStarByProduct(product: Number) {
  const users = await prisma.star.findUnique(
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
  const user = await prisma.star.create({
    data
  });

  return user;
}

async function update(id: Number, data: Object) {
  const update = await prisma.star.update({
    where: {
      id
    },
    data: data,
  })

  return update
}

async function count(where: Object = {}) {
  const count = await prisma.star.count({
    where: where,
  })

  return count
}

async function remove(id: Number) {
  const deleteCategory = await prisma.star.delete({
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
  getStarByUser,
  getStarByProduct,
  post,
  update,
  count,
  remove
}