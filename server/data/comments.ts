import prisma from "./prisma";

async function getAll({ skip = 0, take = 20 }, where = {}) {
  const items = await prisma.comment.findMany({
    skip,
    take,
    where: {
      deleted: false,
      ...where
    },
    include: {
      product: true,
      user: true,
      images: true,
    },
  });
  return items;
}

async function get(where: Object) {
  const item = await prisma.comment.findMany(
    {
      where: where,
      include: {
        product: true,
        user: true,
        images: true,
      },
    }
  );
  return item;
}

async function count(where: Object) {
  const item = await prisma.comment.count({
    where: where,
  })

  return item
}

async function post(data: Object) {
  const item = await prisma.comment.create({
    data: data,
    include: {
      product: true,
      user: true,
      images: true,
    },
  });

  return item;
}

async function remove(id: Number, deleted) {
  const item = await prisma.comment.update({
    where: {
      id: id,
    },
    data: {
      deleted: deleted
    },
  })

  return item
}


export default {
  getAll,
  get,
  post,
  count,
  remove
}