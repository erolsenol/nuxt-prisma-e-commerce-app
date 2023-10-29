import prisma from "./prisma";

async function getAll({ skip = 0, take = 20 }, where = {}) {
  const users = await prisma.user.findMany({
    skip: 0,
    take: 20,
    where: {
      deleted: false,
      ...where,
    },
    include: {
      comments: true,
      star: true,
      question: true,
      contactUs: true,
    },
  });
  return users;
}

async function get(id: Number) {
  const users = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
      star: true,
      question: true,
      contactUs: true,
    },
  });
  return users;
}

async function getWhere(where = {}) {
  const users = await prisma.user.findMany({
    where: where,
    include: {
      comments: true,
      star: true,
      question: true,
      contactUs: true,
    },
  });
  return users;
}

async function getByEmail(email: String) {
  const users = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      comments: true,
      star: true,
      question: true,
      contactUs: true,
    },
  });
  return users;
}

async function getUser(where: object) {
  const users = await prisma.user.findUnique({
    where: {
      deleted: false,
      ...where
    },
    include: {
      comments: true,
      star: true,
      question: true,
      contactUs: true,
    },
  });
  return users;
}

async function create(data: Object) {
  const user = await prisma.user.create({
    data,
  });

  return user;
}

async function update(id: Number, data: Object) {
  const update = await prisma.user.update({
    where: {
      id,
    },
    include: {
      comments: true,
      star: true,
      question: true,
      contactUs: true,
    },
    data: data,
  });

  return update;
}

async function remove(id: Number, deleted: boolean) {
  const item = await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      deleted: deleted,
    },
  });

  return item;
}

async function count(where: Object = {}) {
  const count = await prisma.user.count({
    where: where,
  });

  return count;
}

export default {
  getAll,
  get,
  getWhere,
  getByEmail,
  create,
  update,
  count,
  remove,
  getUser,
};
