import prisma from "./prisma";

async function getAll({skip = 0, take = 20}) {
  const items = await prisma.comment.findMany({
    skip,
    take,
    include: {
      product: true,
      user: true,
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
  });

  return item;
}


export default {
  getAll,
  get,
  post,
  count
}